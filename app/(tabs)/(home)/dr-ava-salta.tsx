
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, ActivityIndicator, Platform, Dimensions, Image, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useAudioRecorder, RecordingPresets, setAudioModeAsync, requestRecordingPermissionsAsync } from 'expo-audio';
import { useEvent } from 'expo';

const D_ID_API_KEY = 'cGF0cmlja3NoZXJsb2NrNDExQGdtYWlsLmNvbQ:yuPvdNJE9EcynkqSQeuco';
const D_ID_API_URL = 'https://api.d-id.com';

// Static fallback image for Dr. Ava Salta - professional medical instructor
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=711&fit=crop';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function DrAvaSaltaScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [currentTalkId, setCurrentTalkId] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const pollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Audio recorder for voice input - initialized with HIGH_QUALITY preset
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  // Video player setup with expo-video
  const player = useVideoPlayer(videoUrl || undefined, (player) => {
    if (videoUrl) {
      player.loop = false;
      player.play();
    }
  });

  // Listen to video player status
  const { status } = useEvent(player, 'statusChange', { status: player.status });

  // Calculate video dimensions (9:16 aspect ratio)
  const screenWidth = Dimensions.get('window').width;
  const videoWidth = Math.min(screenWidth * 0.9, 400);
  const videoHeight = videoWidth * (16 / 9);

  // Setup audio permissions and mode on mount
  useEffect(() => {
    const setupAudio = async () => {
      try {
        console.log('Setting up audio permissions and mode...');
        
        // Request recording permissions
        const { granted } = await requestRecordingPermissionsAsync();
        console.log('Recording permissions granted:', granted);
        setPermissionsGranted(granted);

        if (granted) {
          // Set audio mode to allow recording
          await setAudioModeAsync({
            playsInSilentMode: true,
            allowsRecording: true,
          });
          console.log('Audio mode configured for recording');
        }
      } catch (error) {
        console.error('Error setting up audio:', error);
      }
    };

    setupAudio();
  }, []);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
      }
    };
  }, []);

  // Update video source when URL changes
  useEffect(() => {
    if (videoUrl && player) {
      console.log('Updating video player with new URL:', videoUrl);
      player.replace(videoUrl);
    }
  }, [videoUrl]);

  // Function to create a talk with D-ID
  const createTalk = async (text: string) => {
    try {
      setIsGeneratingVideo(true);
      console.log('Creating D-ID talk with text:', text);

      const response = await fetch(`${D_ID_API_URL}/talks`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${D_ID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          script: {
            type: 'text',
            input: text,
            provider: {
              type: 'microsoft',
              voice_id: 'en-US-JennyNeural',
            },
          },
          config: {
            fluent: true,
            pad_audio: 0,
          },
          source_url: 'https://create-images-results.d-id.com/default-presenter-image.png',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('D-ID API error:', errorData);
        throw new Error(`D-ID API error: ${response.status}`);
      }

      const data = await response.json();
      console.log('D-ID talk created:', data);

      // Poll for video completion
      if (data.id) {
        setCurrentTalkId(data.id);
        await pollTalkStatus(data.id);
      }
    } catch (error) {
      console.error('Error creating D-ID talk:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error generating the video. Please try again.',
      }]);
      setIsGeneratingVideo(false);
    }
  };

  // Poll for talk status with proper cleanup
  const pollTalkStatus = async (talkId: string) => {
    const maxAttempts = 30;
    let attempts = 0;

    const poll = async () => {
      try {
        // Check if this is still the current talk
        if (currentTalkId !== talkId) {
          console.log('Talk ID changed, stopping poll');
          return;
        }

        const response = await fetch(`${D_ID_API_URL}/talks/${talkId}`, {
          headers: {
            'Authorization': `Basic ${D_ID_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to get talk status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Talk status:', data.status, 'Attempt:', attempts + 1);

        if (data.status === 'done' && data.result_url) {
          setVideoUrl(data.result_url);
          setIsGeneratingVideo(false);
          console.log('Video ready:', data.result_url);
          return;
        } else if (data.status === 'error') {
          throw new Error('Video generation failed');
        }

        attempts++;
        if (attempts < maxAttempts) {
          pollingTimeoutRef.current = setTimeout(poll, 2000);
        } else {
          throw new Error('Video generation timeout');
        }
      } catch (error) {
        console.error('Error polling talk status:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, the video generation took too long. Please try again.',
        }]);
        setIsGeneratingVideo(false);
      }
    };

    poll();
  };

  const handleSend = async () => {
    if (!inputText.trim()) {
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const userMessage: Message = {
      role: 'user',
      content: inputText.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response (you can integrate with OpenAI or another LLM here)
    setTimeout(() => {
      const assistantMessage: Message = {
        role: 'assistant',
        content: `Thank you for your question about "${userMessage.content}". As Dr. Ava Salta, I'm here to help you learn. Let me explain this medical concept in detail.`,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);

      // Create video with the response
      createTalk(assistantMessage.content);
    }, 1000);

    // Scroll to bottom
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleClearChat = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMessages([]);
    setVideoUrl(null);
    setIsGeneratingVideo(false);
    setCurrentTalkId(null);
    if (pollingTimeoutRef.current) {
      clearTimeout(pollingTimeoutRef.current);
    }
  };

  // Voice recording functions
  const startRecording = async () => {
    try {
      if (!permissionsGranted) {
        const { granted } = await requestRecordingPermissionsAsync();
        setPermissionsGranted(granted);
        
        if (!granted) {
          Alert.alert('Permission Required', 'Please grant microphone permission to use voice input.');
          return;
        }
      }

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      
      // Prepare the recorder before recording
      await audioRecorder.prepareToRecordAsync();
      await audioRecorder.record();
      
      setIsRecording(true);
      console.log('Recording started');
    } catch (error) {
      console.error('Failed to start recording:', error);
      Alert.alert('Error', 'Failed to start recording. Please try again.');
    }
  };

  const stopRecording = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      await audioRecorder.stop();
      setIsRecording(false);
      
      const uri = audioRecorder.uri;
      console.log('Recording stopped, URI:', uri);

      // For now, just notify the user that voice input was recorded
      // In a production app, you would send this to a speech-to-text service
      Alert.alert(
        'Voice Input Recorded',
        'Voice input has been recorded. In a production version, this would be converted to text using a speech-to-text service. For now, please type your question.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Failed to stop recording:', error);
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Learn with Dr. Ava Salta',
          headerLargeTitle: false,
        }}
      />
      <View style={commonStyles.container}>
        {/* Dr. Ava Salta Video Avatar Container */}
        <View style={styles.avatarContainer}>
          <View style={[styles.videoWrapper, { width: videoWidth, height: videoHeight }]}>
            {/* Static Image - Always visible as background */}
            <Image
              source={{ uri: FALLBACK_IMAGE }}
              style={styles.backgroundImage}
              resizeMode="cover"
            />

            {/* Video Player - Overlays the image when available */}
            {videoUrl && (
              <View style={styles.videoContainer}>
                <VideoView
                  player={player}
                  style={styles.videoView}
                  contentFit="cover"
                  nativeControls={false}
                  allowsFullscreen={false}
                />
              </View>
            )}

            {/* Loading Overlay - shown while video is generating or loading */}
            {(isGeneratingVideo || (videoUrl && status === 'loading')) && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color={colors.card} />
                <Text style={styles.loadingText}>
                  {isGeneratingVideo ? 'Dr. Ava Salta is responding...' : 'Loading video...'}
                </Text>
              </View>
            )}

            {/* Initial state overlay */}
            {!videoUrl && !isGeneratingVideo && (
              <View style={styles.initialOverlay}>
                <Text style={styles.initialText}>Dr. Ava Salta</Text>
                <Text style={styles.initialSubtext}>Ready to help you learn</Text>
              </View>
            )}

            {/* Persistent Label */}
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Dr. Ava Salta</Text>
            </View>
          </View>

          {/* Video Status Indicator */}
          {videoUrl && (
            <View style={styles.statusContainer}>
              <View style={[styles.statusDot, status === 'readyToPlay' && styles.statusDotActive]} />
              <Text style={styles.statusText}>
                {status === 'loading' && 'Loading...'}
                {status === 'readyToPlay' && 'Ready'}
                {status === 'error' && 'Error'}
                {status === 'idle' && 'Idle'}
              </Text>
            </View>
          )}
        </View>

        {/* Chat Section */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
        >
          {messages.length === 0 && (
            <View style={styles.emptyState}>
              <IconSymbol
                ios_icon_name="person.circle.fill"
                android_material_icon_name="account_circle"
                size={80}
                color={colors.primary}
              />
              <Text style={styles.emptyTitle}>Meet Dr. Ava Salta</Text>
              <Text style={styles.emptySubtitle}>
                Your AI medical education assistant. Ask me anything about medical topics, and I&apos;ll explain with an interactive video response.
              </Text>
              <View style={styles.exampleQuestions}>
                <Text style={styles.exampleTitle}>Try asking:</Text>
                <Pressable
                  style={styles.exampleButton}
                  onPress={() => setInputText('What are the signs of heart failure?')}
                >
                  <Text style={styles.exampleButtonText}>What are the signs of heart failure?</Text>
                </Pressable>
                <Pressable
                  style={styles.exampleButton}
                  onPress={() => setInputText('Explain the pathophysiology of diabetes')}
                >
                  <Text style={styles.exampleButtonText}>Explain the pathophysiology of diabetes</Text>
                </Pressable>
                <Pressable
                  style={styles.exampleButton}
                  onPress={() => setInputText('How do I interpret an ECG?')}
                >
                  <Text style={styles.exampleButtonText}>How do I interpret an ECG?</Text>
                </Pressable>
              </View>
            </View>
          )}

          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.role === 'user' ? styles.userMessage : styles.assistantMessage,
              ]}
            >
              <Text style={[
                styles.messageText,
                message.role === 'user' && styles.userMessageText,
              ]}>
                {message.content}
              </Text>
            </View>
          ))}

          {isLoading && (
            <View style={[styles.messageContainer, styles.assistantMessage]}>
              <ActivityIndicator color={colors.primary} />
              <Text style={styles.messageLoadingText}>Dr. Ava is thinking...</Text>
            </View>
          )}
        </ScrollView>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          {messages.length > 0 && (
            <Pressable style={styles.clearButton} onPress={handleClearChat}>
              <IconSymbol
                ios_icon_name="trash"
                android_material_icon_name="delete"
                size={20}
                color={colors.error}
              />
            </Pressable>
          )}
          
          {/* Voice Input Button */}
          <Pressable 
            style={[styles.voiceButton, isRecording && styles.voiceButtonActive]} 
            onPress={toggleRecording}
            disabled={isLoading || isGeneratingVideo}
          >
            <IconSymbol
              ios_icon_name={isRecording ? "stop.circle.fill" : "mic.circle.fill"}
              android_material_icon_name={isRecording ? "stop_circle" : "mic"}
              size={32}
              color={isRecording ? colors.error : colors.primary}
            />
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Ask Dr. Ava a medical question..."
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={500}
            editable={!isRecording}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading || isGeneratingVideo || isRecording}
          >
            <IconSymbol
              ios_icon_name="arrow.up.circle.fill"
              android_material_icon_name="arrow_circle_up"
              size={40}
              color={inputText.trim() && !isRecording ? colors.primary : colors.textSecondary}
            />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: colors.background,
  },
  videoWrapper: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  videoView: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  initialOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  initialText: {
    color: colors.card,
    fontSize: 24,
    fontWeight: '700',
  },
  initialSubtext: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    zIndex: 15,
  },
  labelText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textSecondary,
  },
  statusDotActive: {
    backgroundColor: '#4CAF50',
  },
  statusText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 20 : 30,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 32,
  },
  exampleQuestions: {
    marginTop: 32,
    width: '100%',
    paddingHorizontal: 16,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  exampleButton: {
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  exampleButtonText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.card,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  userMessageText: {
    color: colors.card,
  },
  messageLoadingText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
    gap: 8,
  },
  clearButton: {
    padding: 8,
    alignSelf: 'center',
  },
  voiceButton: {
    padding: 4,
    alignSelf: 'center',
  },
  voiceButtonActive: {
    backgroundColor: colors.highlight,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    backgroundColor: colors.highlight,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
    maxHeight: 100,
  },
  sendButton: {
    alignSelf: 'flex-end',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
