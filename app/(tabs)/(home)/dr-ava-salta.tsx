
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, ActivityIndicator, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { WebView } from 'react-native-webview';

const D_ID_API_KEY = 'cGF0cmlja3NoZXJsb2NrNDExQGdtYWlsLmNvbQ:yuPvdNJE9EcynkqSQeuco';
const D_ID_API_URL = 'https://api.d-id.com';

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
  const scrollViewRef = useRef<ScrollView>(null);

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
        await pollTalkStatus(data.id);
      }
    } catch (error) {
      console.error('Error creating D-ID talk:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error generating the video. Please try again.',
      }]);
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
        }
      } catch (error) {
        console.error('Error polling talk status:', error);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, the video generation took too long. Please try again.',
        }]);
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

  const handleClearVideo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setVideoUrl(null);
  };

  const handleClearChat = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMessages([]);
    setVideoUrl(null);
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
        {/* Video Section */}
        {videoUrl && (
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: videoUrl }}
              style={styles.video}
              allowsFullscreenVideo
              mediaPlaybackRequiresUserAction={false}
            />
            <Pressable style={styles.closeVideoButton} onPress={handleClearVideo}>
              <IconSymbol name="xmark.circle.fill" size={32} color={colors.card} />
            </Pressable>
          </View>
        )}

        {/* Chat Section */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
        >
          {messages.length === 0 && (
            <View style={styles.emptyState}>
              <IconSymbol name="person.circle.fill" size={80} color={colors.primary} />
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
              <Text style={styles.messageText}>{message.content}</Text>
            </View>
          ))}

          {isLoading && (
            <View style={[styles.messageContainer, styles.assistantMessage]}>
              <ActivityIndicator color={colors.primary} />
              <Text style={styles.loadingText}>Dr. Ava is thinking...</Text>
            </View>
          )}

          {isGeneratingVideo && (
            <View style={[styles.messageContainer, styles.assistantMessage]}>
              <ActivityIndicator color={colors.primary} />
              <Text style={styles.loadingText}>Generating video response...</Text>
            </View>
          )}
        </ScrollView>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          {messages.length > 0 && (
            <Pressable style={styles.clearButton} onPress={handleClearChat}>
              <IconSymbol name="trash" size={20} color={colors.error} />
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
              name="arrow.up.circle.fill"
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
  videoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: colors.card,
    position: 'relative',
  },
  video: {
    flex: 1,
  },
  closeVideoButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
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
  },
  loadingText: {
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
