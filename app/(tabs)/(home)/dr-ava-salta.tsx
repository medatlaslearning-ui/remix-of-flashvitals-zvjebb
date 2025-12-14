
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

// Dr. Ava Salta - Professional medical instructor avatar
// Using a professional medical presenter image
const DR_AVA_SALTA_IMAGE = 'https://create-images-results.d-id.com/api_img_gen/default-presenter-image.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  videoUrl?: string;
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
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const pollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Audio recorder for voice input
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

  // Calculate video dimensions (9:16 aspect ratio for portrait)
  const screenWidth = Dimensions.get('window').width;
  const videoWidth = Math.min(screenWidth * 0.85, 350);
  const videoHeight = videoWidth * (16 / 9);

  // Setup audio permissions and mode on mount
  useEffect(() => {
    const setupAudio = async () => {
      try {
        console.log('Setting up audio permissions and mode...');
        
        const { granted } = await requestRecordingPermissionsAsync();
        console.log('Recording permissions granted:', granted);
        setPermissionsGranted(granted);

        if (granted) {
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

  // Generate AI response using a simple medical knowledge base
  const generateAIResponse = (userQuestion: string): string => {
    const lowerQuestion = userQuestion.toLowerCase();
    
    // Simple medical knowledge responses
    if (lowerQuestion.includes('heart failure') || lowerQuestion.includes('hf')) {
      return "Heart failure is a clinical syndrome where the heart cannot pump enough blood to meet the body's needs. Key signs include dyspnea, fatigue, and edema. The New York Heart Association classification helps grade severity. Treatment includes ACE inhibitors, beta blockers, and diuretics. Remember to assess for underlying causes like coronary artery disease or valvular disorders.";
    } else if (lowerQuestion.includes('diabetes') || lowerQuestion.includes('diabetic')) {
      return "Diabetes mellitus involves chronic hyperglycemia due to insulin deficiency or resistance. Type 1 is autoimmune destruction of beta cells, while Type 2 involves insulin resistance. Complications include retinopathy, nephropathy, and neuropathy. Management includes lifestyle modifications, metformin as first-line, and monitoring HbA1c levels. Always screen for cardiovascular risk factors.";
    } else if (lowerQuestion.includes('ecg') || lowerQuestion.includes('ekg')) {
      return "ECG interpretation follows a systematic approach. First, check the rate and rhythm. Look for P waves before each QRS complex. Measure intervals: PR should be 120-200ms, QRS less than 120ms, and QT interval corrected for heart rate. Assess axis, and look for signs of ischemia, infarction, or chamber enlargement. Practice makes perfect with ECG reading.";
    } else if (lowerQuestion.includes('hypertension') || lowerQuestion.includes('blood pressure')) {
      return "Hypertension is defined as blood pressure consistently above 130/80 mmHg. It's a major risk factor for stroke, heart disease, and kidney disease. Initial management includes lifestyle modifications: diet, exercise, and weight loss. First-line medications include ACE inhibitors, ARBs, calcium channel blockers, and thiazide diuretics. Always assess for secondary causes in young patients or resistant hypertension.";
    } else if (lowerQuestion.includes('pneumonia')) {
      return "Pneumonia is an infection of the lung parenchyma. Community-acquired pneumonia often presents with fever, cough, and dyspnea. Use the CURB-65 score to assess severity. Chest X-ray shows infiltrates. Treatment depends on severity and risk factors. Typical organisms include Streptococcus pneumoniae, while atypical include Mycoplasma and Legionella. Always consider aspiration risk in elderly patients.";
    } else if (lowerQuestion.includes('asthma')) {
      return "Asthma is a chronic inflammatory airway disease causing reversible bronchospasm. Symptoms include wheezing, dyspnea, and cough, often worse at night. Diagnosis involves spirometry showing reversible obstruction. Treatment follows a stepwise approach: short-acting beta agonists for rescue, inhaled corticosteroids for control, and add-on therapies like LABAs for severe cases. Always assess triggers and adherence.";
    } else {
      return `Thank you for asking about "${userQuestion}". As Dr. Ava Salta, I'm here to help you understand medical concepts. This is an important topic in medical education. Let me break it down for you in a clear, systematic way. Remember to always correlate clinical findings with patient presentation and use evidence-based guidelines in your practice.`;
    }
  };

  // Function to create a talk with D-ID using proper presenter configuration
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
              voice_id: 'en-US-JennyNeural', // Professional female voice
            },
          },
          config: {
            fluent: true,
            pad_audio: 0,
            stitch: true,
          },
          // Using D-ID's default presenter - you can replace this with your custom agent image
          source_url: DR_AVA_SALTA_IMAGE,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('D-ID API error:', errorData);
        throw new Error(`D-ID API error: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      console.log('D-ID talk created successfully:', data);

      if (data.id) {
        setCurrentTalkId(data.id);
        await pollTalkStatus(data.id);
      }
    } catch (error) {
      console.error('Error creating D-ID talk:', error);
      Alert.alert(
        'Video Generation Error',
        'Unable to generate video response. Please check your internet connection and try again.',
        [{ text: 'OK' }]
      );
      setIsGeneratingVideo(false);
    }
  };

  // Poll for talk status with proper cleanup
  const pollTalkStatus = async (talkId: string) => {
    const maxAttempts = 60; // Increased timeout for longer responses
    let attempts = 0;

    const poll = async () => {
      try {
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
          
          // Update the last message with the video URL
          setMessages(prev => {
            const updated = [...prev];
            if (updated.length > 0 && updated[updated.length - 1].role === 'assistant') {
              updated[updated.length - 1].videoUrl = data.result_url;
            }
            return updated;
          });
          return;
        } else if (data.status === 'error') {
          throw new Error('Video generation failed');
        } else if (data.status === 'rejected') {
          throw new Error('Video generation was rejected');
        }

        attempts++;
        if (attempts < maxAttempts) {
          pollingTimeoutRef.current = setTimeout(poll, 2000);
        } else {
          throw new Error('Video generation timeout - please try a shorter message');
        }
      } catch (error) {
        console.error('Error polling talk status:', error);
        Alert.alert(
          'Video Generation Timeout',
          'The video is taking longer than expected. Please try again with a shorter message.',
          [{ text: 'OK' }]
        );
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
    const currentInput = inputText.trim();
    setInputText('');
    setIsLoading(true);

    // Scroll to bottom
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Generate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(currentInput);
      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);

      // Create video with the response
      createTalk(aiResponse);

      // Scroll to bottom again
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 1000);
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

      Alert.alert(
        'Voice Input Recorded',
        'Voice recording feature is available. To enable speech-to-text, you would need to integrate a service like OpenAI Whisper, Google Speech-to-Text, or Azure Speech Services. For now, please type your question.',
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
          title: 'Dr. Ava Salta',
          headerLargeTitle: false,
        }}
      />
      <View style={commonStyles.container}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Dr. Ava Salta Video Avatar Container */}
          <View style={styles.avatarContainer}>
            <View style={[styles.videoWrapper, { width: videoWidth, height: videoHeight }]}>
              {/* Static Image - Always visible as background */}
              <Image
                source={{ uri: DR_AVA_SALTA_IMAGE }}
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

              {/* Loading Overlay */}
              {(isGeneratingVideo || (videoUrl && status === 'loading')) && (
                <View style={styles.loadingOverlay}>
                  <ActivityIndicator size="large" color={colors.card} />
                  <Text style={styles.loadingText}>
                    {isGeneratingVideo ? 'Dr. Ava Salta is responding...' : 'Loading video...'}
                  </Text>
                </View>
              )}

              {/* Initial state overlay */}
              {!videoUrl && !isGeneratingVideo && messages.length === 0 && (
                <View style={styles.initialOverlay}>
                  <IconSymbol
                    ios_icon_name="person.circle.fill"
                    android_material_icon_name="account_circle"
                    size={64}
                    color={colors.card}
                  />
                  <Text style={styles.initialText}>Dr. Ava Salta</Text>
                  <Text style={styles.initialSubtext}>AI Medical Instructor</Text>
                </View>
              )}

              {/* Persistent Label */}
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Dr. Ava Salta, MD</Text>
              </View>
            </View>

            {/* Status Indicator */}
            {videoUrl && (
              <View style={styles.statusContainer}>
                <View style={[styles.statusDot, status === 'readyToPlay' && styles.statusDotActive]} />
                <Text style={styles.statusText}>
                  {status === 'loading' && 'Loading video...'}
                  {status === 'readyToPlay' && 'Video ready'}
                  {status === 'error' && 'Video error'}
                  {status === 'idle' && 'Idle'}
                </Text>
              </View>
            )}
          </View>

          {/* Chat Messages */}
          <View style={styles.chatContainer}>
            {messages.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyTitle}>Welcome to Dr. Ava Salta</Text>
                <Text style={styles.emptySubtitle}>
                  Your AI medical education assistant with interactive video responses.
                  Ask me anything about medical topics!
                </Text>
                <View style={styles.exampleQuestions}>
                  <Text style={styles.exampleTitle}>Try asking:</Text>
                  <Pressable
                    style={styles.exampleButton}
                    onPress={() => setInputText('What are the signs of heart failure?')}
                  >
                    <Text style={styles.exampleButtonText}>• What are the signs of heart failure?</Text>
                  </Pressable>
                  <Pressable
                    style={styles.exampleButton}
                    onPress={() => setInputText('Explain diabetes pathophysiology')}
                  >
                    <Text style={styles.exampleButtonText}>• Explain diabetes pathophysiology</Text>
                  </Pressable>
                  <Pressable
                    style={styles.exampleButton}
                    onPress={() => setInputText('How do I interpret an ECG?')}
                  >
                    <Text style={styles.exampleButtonText}>• How do I interpret an ECG?</Text>
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
                {message.role === 'assistant' && (
                  <View style={styles.avatarIcon}>
                    <IconSymbol
                      ios_icon_name="person.circle.fill"
                      android_material_icon_name="account_circle"
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                )}
                <View style={styles.messageBubble}>
                  <Text style={[
                    styles.messageText,
                    message.role === 'user' && styles.userMessageText,
                  ]}>
                    {message.content}
                  </Text>
                </View>
              </View>
            ))}

            {isLoading && (
              <View style={[styles.messageContainer, styles.assistantMessage]}>
                <View style={styles.avatarIcon}>
                  <IconSymbol
                    ios_icon_name="person.circle.fill"
                    android_material_icon_name="account_circle"
                    size={24}
                    color={colors.primary}
                  />
                </View>
                <View style={styles.messageBubble}>
                  <ActivityIndicator color={colors.primary} size="small" />
                  <Text style={styles.messageLoadingText}>Thinking...</Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Fixed Input Section - Positioned above tab bar */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            {messages.length > 0 && (
              <Pressable style={styles.clearButton} onPress={handleClearChat}>
                <IconSymbol
                  ios_icon_name="trash.circle.fill"
                  android_material_icon_name="delete"
                  size={28}
                  color={colors.textSecondary}
                />
              </Pressable>
            )}
            
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

            {/* Voice Input Button */}
            <Pressable 
              style={[styles.voiceButton, isRecording && styles.voiceButtonActive]} 
              onPress={toggleRecording}
              disabled={isLoading || isGeneratingVideo}
            >
              <IconSymbol
                ios_icon_name={isRecording ? "stop.circle.fill" : "mic.circle.fill"}
                android_material_icon_name={isRecording ? "stop_circle" : "mic"}
                size={28}
                color={isRecording ? colors.error : colors.primary}
              />
            </Pressable>

            <Pressable
              style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
              onPress={handleSend}
              disabled={!inputText.trim() || isLoading || isGeneratingVideo || isRecording}
            >
              <IconSymbol
                ios_icon_name="arrow.up.circle.fill"
                android_material_icon_name="send"
                size={36}
                color={inputText.trim() && !isRecording ? colors.primary : colors.textSecondary}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Platform.OS === 'ios' ? 120 : 130,
  },
  avatarContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  videoWrapper: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    elevation: 8,
    backgroundColor: '#1a1a1a',
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
    zIndex: 5,
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
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  initialText: {
    color: colors.card,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
  },
  initialSubtext: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    zIndex: 15,
  },
  labelText: {
    color: colors.card,
    fontSize: 13,
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
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
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  exampleQuestions: {
    marginTop: 24,
    width: '100%',
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  exampleButton: {
    backgroundColor: colors.highlight,
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
  },
  exampleButtonText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  assistantMessage: {
    justifyContent: 'flex-start',
  },
  avatarIcon: {
    marginRight: 8,
    marginTop: 4,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
  userMessageText: {
    color: colors.card,
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  userMessage: {
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: colors.primary,
  },
  assistantMessage: {
    maxWidth: '85%',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    backgroundColor: colors.card,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  userMessage: {
    flexDirection: 'row-reverse',
  },
  userMessage: {
    backgroundColor: colors.primary,
  },
  messageLoadingText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
  inputSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
    paddingBottom: Platform.OS === 'ios' ? 90 : 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    gap: 8,
  },
  clearButton: {
    padding: 4,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.highlight,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
    maxHeight: 100,
  },
  voiceButton: {
    padding: 4,
    alignSelf: 'center',
  },
  voiceButtonActive: {
    backgroundColor: colors.highlight,
    borderRadius: 20,
    padding: 6,
  },
  sendButton: {
    alignSelf: 'flex-end',
    padding: 2,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
