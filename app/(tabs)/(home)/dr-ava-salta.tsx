
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, ActivityIndicator, Platform, Dimensions, Image } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { WebView } from 'react-native-webview';

const D_ID_API_KEY = 'cGF0cmlja3NoZXJsb2NrNDExQGdtYWlsLmNvbQ:yuPvdNJE9EcynkqSQeuco';
const D_ID_API_URL = 'https://api.d-id.com';

// Static fallback image for Dr. Ava Salta
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
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const webViewRef = useRef<WebView>(null);

  // Calculate video dimensions (9:16 aspect ratio)
  const screenWidth = Dimensions.get('window').width;
  const videoWidth = Math.min(screenWidth * 0.9, 400);
  const videoHeight = videoWidth * (16 / 9);

  // Function to create a talk with D-ID
  const createTalk = async (text: string) => {
    try {
      setIsGeneratingVideo(true);
      setIsVideoLoading(true);
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
        await pollTalkStatus(data.id);
      }
    } catch (error) {
      console.error('Error creating D-ID talk:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error generating the video. Please try again.',
      }]);
      setIsVideoLoading(false);
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  // Poll for talk status
  const pollTalkStatus = async (talkId: string) => {
    const maxAttempts = 30;
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`${D_ID_API_URL}/talks/${talkId}`, {
          headers: {
            'Authorization': `Basic ${D_ID_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to get talk status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Talk status:', data.status);

        if (data.status === 'done' && data.result_url) {
          setVideoUrl(data.result_url);
          console.log('Video ready:', data.result_url);
          return;
        } else if (data.status === 'error') {
          throw new Error('Video generation failed');
        }

        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 2000);
        } else {
          throw new Error('Video generation timeout');
          setIsVideoLoading(false);
        }
      } catch (error) {
        console.error('Error polling talk status:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, the video generation took too long. Please try again.',
        }]);
        setIsVideoLoading(false);
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
    setIsVideoLoading(false);
    setIsVideoPlaying(false);
  };

  // Handle video load
  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setIsVideoLoading(false);
  };

  // Handle video playback start
  const handleVideoPlaybackStart = () => {
    console.log('Video playback started');
    setIsVideoPlaying(true);
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
            {/* Fallback Image - shown when no video URL */}
            {!videoUrl && (
              <View style={styles.fallbackContainer}>
                <Image
                  source={{ uri: FALLBACK_IMAGE }}
                  style={styles.fallbackImage}
                  resizeMode="cover"
                />
                <View style={styles.fallbackOverlay}>
                  <ActivityIndicator size="large" color={colors.card} />
                  <Text style={styles.fallbackText}>Avatar loading...</Text>
                </View>
              </View>
            )}

            {/* Video Player - shown when video URL is available */}
            {videoUrl && (
              <View style={styles.videoContainer}>
                {Platform.OS === 'web' ? (
                  <video
                    src={videoUrl}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 16,
                    }}
                    controls
                    autoPlay
                    onLoadedData={handleVideoLoad}
                    onPlay={handleVideoPlaybackStart}
                  />
                ) : (
                  <WebView
                    ref={webViewRef}
                    source={{
                      html: `
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                            <style>
                              body {
                                margin: 0;
                                padding: 0;
                                background: #000;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 100vh;
                              }
                              video {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                              }
                            </style>
                          </head>
                          <body>
                            <video
                              src="${videoUrl}"
                              controls
                              autoplay
                              playsinline
                              webkit-playsinline
                              onloadeddata="window.ReactNativeWebView.postMessage('loaded')"
                              onplay="window.ReactNativeWebView.postMessage('playing')"
                            ></video>
                          </body>
                        </html>
                      `,
                    }}
                    style={styles.webView}
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction={false}
                    onMessage={(event) => {
                      if (event.nativeEvent.data === 'loaded') {
                        handleVideoLoad();
                      } else if (event.nativeEvent.data === 'playing') {
                        handleVideoPlaybackStart();
                      }
                    }}
                  />
                )}

                {/* Loading Overlay - shown while video is loading */}
                {isVideoLoading && !isVideoPlaying && (
                  <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color={colors.card} />
                    <Text style={styles.loadingText}>Dr. Ava Salta is responding...</Text>
                  </View>
                )}
              </View>
            )}

            {/* Persistent Label */}
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>Dr. Ava Salta</Text>
            </View>
          </View>
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
          <TextInput
            style={styles.input}
            placeholder="Ask Dr. Ava a medical question..."
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={500}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading || isGeneratingVideo}
          >
            <IconSymbol
              ios_icon_name="arrow.up.circle.fill"
              android_material_icon_name="arrow_circle_up"
              size={40}
              color={inputText.trim() ? colors.primary : colors.textSecondary}
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
  },
  fallbackContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  fallbackImage: {
    width: '100%',
    height: '100%',
  },
  fallbackOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  webView: {
    flex: 1,
    backgroundColor: '#000',
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
  },
  loadingText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  labelContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  labelText: {
    color: colors.card,
    fontSize: 14,
    fontWeight: '600',
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
