
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, ActivityIndicator, Platform, Dimensions, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import { 
  useAudioRecorder, 
  RecordingPresets, 
  setAudioModeAsync, 
  requestRecordingPermissionsAsync 
} from 'expo-audio';

const D_ID_API_KEY = 'cGF0cmlja3NoZXJsb2NrNDExQGdtYWlsLmNvbQ:yuPvdNJE9EcynkqSQeuco';
const D_ID_API_URL = 'https://api.d-id.com';

// D-ID Agent Configuration
const D_ID_AGENT_ID = 'v2_agt_8NccMrqm';

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
  const scrollViewRef = useRef<ScrollView>(null);
  const pollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Audio recorder for voice input
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  // Video player setup - Initialize with null source
  const player = useVideoPlayer(null, (player) => {
    console.log('[VIDEO PLAYER] Initialized');
    player.loop = false;
    player.muted = false;
    player.volume = 1.0;
  });

  // Listen to video player status changes
  const { status } = useEvent(player, 'statusChange', { status: player.status });
  const { playing } = useEvent(player, 'playingChange', { playing: player.playing });

  // Calculate video dimensions (9:16 aspect ratio for portrait)
  const screenWidth = Dimensions.get('window').width;
  const videoWidth = Math.min(screenWidth * 0.85, 350);
  const videoHeight = videoWidth * (16 / 9);

  // DIAGNOSTIC: Setup audio permissions and mode on mount
  useEffect(() => {
    const setupAudio = async () => {
      try {
        console.log('[AUDIO SETUP] Starting audio configuration...');
        
        // Request recording permissions
        const { granted } = await requestRecordingPermissionsAsync();
        console.log('[AUDIO SETUP] Recording permissions granted:', granted);
        setPermissionsGranted(granted);

        if (!granted) {
          console.warn('[AUDIO SETUP] Microphone permission denied');
          Alert.alert(
            'Microphone Permission Required',
            'Please grant microphone permission to use voice input feature.',
            [{ text: 'OK' }]
          );
        }

        // Configure audio mode for both recording and playback
        await setAudioModeAsync({
          playsInSilentMode: true,
          allowsRecording: true,
          shouldPlayInBackground: false,
        });
        console.log('[AUDIO SETUP] Audio mode configured successfully');
      } catch (error) {
        console.error('[AUDIO SETUP ERROR]', error);
        Alert.alert('Audio Setup Error', 'Failed to configure audio. Voice input may not work properly.');
      }
    };

    setupAudio();
  }, []);

  // DIAGNOSTIC: Cleanup polling on unmount
  useEffect(() => {
    return () => {
      console.log('[CLEANUP] Component unmounting, clearing polling timeout');
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
        pollingTimeoutRef.current = null;
      }
    };
  }, []);

  // DIAGNOSTIC: Update video source when URL changes
  useEffect(() => {
    if (videoUrl && player) {
      console.log('[VIDEO UPDATE] Updating video player with new URL:', videoUrl);
      try {
        player.replace(videoUrl);
        console.log('[VIDEO UPDATE] Video source replaced successfully');
      } catch (error) {
        console.error('[VIDEO UPDATE ERROR]', error);
        Alert.alert('Video Error', 'Failed to load video. Please try again.');
      }
    }
  }, [videoUrl, player]);

  // DIAGNOSTIC: Auto-play video when status becomes readyToPlay
  useEffect(() => {
    if (status === 'readyToPlay' && videoUrl && !playing) {
      console.log('[VIDEO PLAYBACK] Video ready to play, starting playback');
      try {
        player.play();
        console.log('[VIDEO PLAYBACK] Playback started');
      } catch (error) {
        console.error('[VIDEO PLAYBACK ERROR]', error);
      }
    }
  }, [status, videoUrl, playing, player]);

  // Generate AI response using medical knowledge base
  const generateAIResponse = (userQuestion: string): string => {
    console.log('[AI RESPONSE] Generating response for:', userQuestion);
    const lowerQuestion = userQuestion.toLowerCase();
    
    // Medical knowledge responses
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
    } else if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return "Hello! I'm Dr. Ava Salta, your AI medical education assistant. I'm here to help you learn about various medical topics, from cardiology to infectious diseases. Feel free to ask me any medical questions, and I'll provide clear, evidence-based explanations to support your learning journey.";
    } else {
      return `Thank you for asking about "${userQuestion}". As Dr. Ava Salta, I'm here to help you understand medical concepts. This is an important topic in medical education. Let me break it down for you in a clear, systematic way. Remember to always correlate clinical findings with patient presentation and use evidence-based guidelines in your practice.`;
    }
  };

  // DIAGNOSTIC: Function to create a talk with D-ID
  const createTalk = async (text: string) => {
    try {
      setIsGeneratingVideo(true);
      console.log('[D-ID CREATE] Creating D-ID talk with text:', text.substring(0, 50) + '...');

      const requestBody = {
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
          stitch: true,
        },
        // Using D-ID's default presenter instead of custom image
        presenter_id: 'amy-jcwCkr1grs',
      };

      console.log('[D-ID CREATE] Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`${D_ID_API_URL}/talks`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${D_ID_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();
      console.log('[D-ID CREATE] Response status:', response.status);
      console.log('[D-ID CREATE] Response body:', responseText);

      if (!response.ok) {
        let errorMessage = `D-ID API error: ${response.status}`;
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || errorMessage;
          console.error('[D-ID CREATE ERROR] Error details:', errorData);
        } catch (e) {
          console.error('[D-ID CREATE ERROR] Could not parse error response:', e);
        }
        throw new Error(errorMessage);
      }

      const data = JSON.parse(responseText);
      console.log('[D-ID CREATE] Talk created successfully. Talk ID:', data.id);

      if (data.id) {
        setCurrentTalkId(data.id);
        await pollTalkStatus(data.id);
      } else {
        throw new Error('No talk ID returned from D-ID API');
      }
    } catch (error) {
      console.error('[D-ID CREATE ERROR]', error);
      Alert.alert(
        'Video Generation Error',
        error instanceof Error ? error.message : 'Unable to generate video response. Please check your internet connection and try again.',
        [{ text: 'OK' }]
      );
      setIsGeneratingVideo(false);
    }
  };

  // DIAGNOSTIC: Poll for talk status
  const pollTalkStatus = async (talkId: string) => {
    const maxAttempts = 60;
    let attempts = 0;

    const poll = async () => {
      try {
        // Check if we should stop polling
        if (currentTalkId !== talkId) {
          console.log('[D-ID POLL] Talk ID changed, stopping poll');
          return;
        }

        console.log(`[D-ID POLL] Polling talk status (attempt ${attempts + 1}/${maxAttempts})...`);

        const response = await fetch(`${D_ID_API_URL}/talks/${talkId}`, {
          headers: {
            'Authorization': `Basic ${D_ID_API_KEY}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to get talk status: ${response.status}`);
        }

        const data = await response.json();
        console.log('[D-ID POLL] Talk status:', data.status);

        if (data.status === 'done' && data.result_url) {
          console.log('[D-ID POLL] Video ready! URL:', data.result_url);
          setVideoUrl(data.result_url);
          setIsGeneratingVideo(false);
          
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
          throw new Error(`Video generation failed: ${data.error || 'Unknown error'}`);
        } else if (data.status === 'rejected') {
          throw new Error('Video generation was rejected by D-ID');
        }

        attempts++;
        if (attempts < maxAttempts) {
          pollingTimeoutRef.current = setTimeout(poll, 2000);
        } else {
          throw new Error('Video generation timeout - please try a shorter message');
        }
      } catch (error) {
        console.error('[D-ID POLL ERROR]', error);
        Alert.alert(
          'Video Generation Error',
          error instanceof Error ? error.message : 'Failed to generate video. Please try again.',
          [{ text: 'OK' }]
        );
        setIsGeneratingVideo(false);
        if (pollingTimeoutRef.current) {
          clearTimeout(pollingTimeoutRef.current);
          pollingTimeoutRef.current = null;
        }
      }
    };

    poll();
  };

  // DIAGNOSTIC: Handle send message
  const handleSend = async () => {
    if (!inputText.trim()) {
      console.log('[SEND] Empty input, ignoring');
      return;
    }

    console.log('[SEND] Sending message:', inputText);
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
      console.log('[SEND] AI response generated:', aiResponse.substring(0, 50) + '...');
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
    console.log('[CLEAR] Clearing chat');
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMessages([]);
    setVideoUrl(null);
    setIsGeneratingVideo(false);
    setCurrentTalkId(null);
    if (pollingTimeoutRef.current) {
      clearTimeout(pollingTimeoutRef.current);
      pollingTimeoutRef.current = null;
    }
  };

  // DIAGNOSTIC: Voice recording functions
  const startRecording = async () => {
    try {
      console.log('[VOICE] Starting recording...');
      if (!permissionsGranted) {
        const { granted } = await requestRecordingPermissionsAsync();
        setPermissionsGranted(granted);
        
        if (!granted) {
          console.warn('[VOICE] Permission denied');
          Alert.alert('Permission Required', 'Please grant microphone permission to use voice input.');
          return;
        }
      }

      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      
      console.log('[VOICE] Preparing to record...');
      await audioRecorder.prepareToRecordAsync();
      console.log('[VOICE] Starting recording...');
      await audioRecorder.record();
      
      setIsRecording(true);
      console.log('[VOICE] Recording started successfully');
    } catch (error) {
      console.error('[VOICE ERROR] Failed to start recording:', error);
      Alert.alert('Recording Error', 'Failed to start recording. Please try again.');
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    try {
      console.log('[VOICE] Stopping recording...');
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      await audioRecorder.stop();
      setIsRecording(false);
      
      const uri = audioRecorder.uri;
      console.log('[VOICE] Recording stopped, URI:', uri);

      Alert.alert(
        'Voice Input Recorded',
        'Voice recording feature is available. To enable speech-to-text, you would need to integrate a service like OpenAI Whisper, Google Speech-to-Text, or Azure Speech Services. For now, please type your question.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('[VOICE ERROR] Failed to stop recording:', error);
      setIsRecording(false);
      Alert.alert('Recording Error', 'Failed to stop recording properly.');
    }
  };

  const toggleRecording = () => {
    console.log('[VOICE] Toggle recording, current state:', isRecording);
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
          {/* Dr. Ava Salta Video Avatar Container - NO STOCK IMAGE */}
          <View style={styles.avatarContainer}>
            <View style={[styles.videoWrapper, { width: videoWidth, height: videoHeight }]}>
              {/* Video Player - Only shows when video is available */}
              {videoUrl ? (
                <View style={styles.videoContainer}>
                  <VideoView
                    player={player}
                    style={styles.videoView}
                    contentFit="cover"
                    nativeControls={false}
                    allowsFullscreen={false}
                  />
                </View>
              ) : (
                <View style={styles.placeholderContainer}>
                  <IconSymbol
                    ios_icon_name="person.circle.fill"
                    android_material_icon_name="account_circle"
                    size={80}
                    color={colors.textSecondary}
                  />
                  <Text style={styles.placeholderText}>Dr. Ava Salta</Text>
                  <Text style={styles.placeholderSubtext}>AI Medical Instructor</Text>
                </View>
              )}

              {/* Loading Overlay */}
              {(isGeneratingVideo || (videoUrl && status === 'loading')) && (
                <View style={styles.loadingOverlay}>
                  <ActivityIndicator size="large" color={colors.primary} />
                  <Text style={styles.loadingText}>
                    {isGeneratingVideo ? 'Dr. Ava Salta is responding...' : 'Loading video...'}
                  </Text>
                </View>
              )}

              {/* Persistent Label */}
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Dr. Ava Salta, MD</Text>
              </View>
            </View>

            {/* Status Indicator */}
            <View style={styles.statusContainer}>
              <View style={[styles.statusDot, (status === 'readyToPlay' || playing) && styles.statusDotActive]} />
              <Text style={styles.statusText}>
                {status === 'loading' && 'Loading video...'}
                {status === 'readyToPlay' && playing && 'Speaking...'}
                {status === 'readyToPlay' && !playing && 'Ready'}
                {status === 'error' && 'Video error'}
                {status === 'idle' && !videoUrl && 'Waiting for question...'}
                {status === 'idle' && videoUrl && 'Video complete'}
              </Text>
            </View>
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
              </View>
            )}

            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  message.role === 'user' ? styles.userMessageContainer : styles.assistantMessageContainer,
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
                <View style={[
                  styles.messageBubble,
                  message.role === 'user' ? styles.userMessageBubble : styles.assistantMessageBubble,
                ]}>
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
              <View style={[styles.messageContainer, styles.assistantMessageContainer]}>
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
              returnKeyType="send"
              onSubmitEditing={handleSend}
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
    backgroundColor: colors.card,
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.highlight,
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
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
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  assistantMessageContainer: {
    flexDirection: 'row',
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
  userMessageBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  assistantMessageBubble: {
    backgroundColor: colors.card,
    borderBottomLeftRadius: 4,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
  userMessageText: {
    color: colors.card,
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
