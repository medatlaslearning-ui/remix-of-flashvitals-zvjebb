
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useAudioRecorder, RecordingPresets, setAudioModeAsync } from 'expo-audio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { medicalReferences, getReferenceByNumber } from '@/data/medicalReferences';

const OPENAI_API_KEY_STORAGE = '@openai_api_key';
const CHAT_HISTORY_STORAGE = '@chat_history';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  references?: string[];
  timestamp: Date;
}

export default function AskExpertScreen() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  // Load API key and chat history
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedKey = await AsyncStorage.getItem(OPENAI_API_KEY_STORAGE);
        if (storedKey) {
          setApiKey(storedKey);
          console.log('Loaded OpenAI API key from storage');
        }
        
        const storedHistory = await AsyncStorage.getItem(CHAT_HISTORY_STORAGE);
        if (storedHistory) {
          const parsed = JSON.parse(storedHistory);
          setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
          console.log('Loaded chat history:', parsed.length, 'messages');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  // Save chat history
  const saveChatHistory = async (msgs: Message[]) => {
    try {
      await AsyncStorage.setItem(CHAT_HISTORY_STORAGE, JSON.stringify(msgs));
      console.log('Saved chat history');
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  };

  // Save API key
  const saveApiKey = async (key: string) => {
    try {
      await AsyncStorage.setItem(OPENAI_API_KEY_STORAGE, key);
      setApiKey(key);
      setShowApiKeyInput(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert('Success', 'API key saved successfully');
      console.log('Saved OpenAI API key');
    } catch (error) {
      console.error('Error saving API key:', error);
      Alert.alert('Error', 'Failed to save API key');
    }
  };

  // Build knowledge base context from references
  const buildKnowledgeBase = () => {
    const knowledgeBase = medicalReferences.map(ref => ({
      id: ref.id,
      refNumber: ref.refNumber,
      citation: ref.citation,
      year: ref.year,
      category: ref.category,
      subcategory: ref.subcategory,
      appliesTo: ref.appliesTo,
      link: ref.link,
    }));

    return `You are a medical expert assistant with access to the following evidence-based clinical practice guidelines and references. You MUST ONLY answer questions based on these references. If you cannot find relevant information in these references, you MUST respond with: "I cannot answer that question based on my learning architecture."

When answering questions:
1. ONLY use information from the references provided below
2. ALWAYS cite the reference number (e.g., REF-CARD-001) when providing information
3. Provide clear, concise answers suitable for medical learners
4. Include the full citation at the end of your response
5. If multiple references are relevant, cite all of them
6. If no references support the answer, respond with: "I cannot answer that question based on my learning architecture."

Available References (${knowledgeBase.length} total):
${knowledgeBase.map(ref => `
[${ref.refNumber}] (${ref.year})
Category: ${ref.category} - ${ref.subcategory}
Citation: ${ref.citation}
Applies to: ${ref.appliesTo}
Link: ${ref.link}
`).join('\n')}

Remember: You can ONLY answer questions about topics covered in these references. Do not use any external knowledge. Be helpful and educational while staying within the bounds of the provided references.`;
  };

  // Send message to OpenAI
  const sendMessage = async (text: string) => {
    if (!text.trim()) {
      return;
    }

    if (!apiKey) {
      Alert.alert(
        'API Key Required',
        'Please set your OpenAI API key to use this feature.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Set API Key', onPress: () => setShowApiKeyInput(true) }
        ]
      );
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    try {
      console.log('Sending message to OpenAI:', text);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: buildKnowledgeBase(),
            },
            ...updatedMessages.map(m => ({
              role: m.role,
              content: m.content,
            })),
          ],
          temperature: 0.3,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
      }

      const data = await response.json();
      const assistantContent = data.choices[0]?.message?.content || 'No response received';

      // Extract reference numbers from the response (matches REF-XXX-XXX or REF-XXX-XXX-XXX format)
      const refMatches = assistantContent.match(/REF-[A-Z]+-[A-Z]+-\d{3}|REF-[A-Z]+-\d{3}/g) || [];
      const uniqueRefs = Array.from(new Set(refMatches));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
        references: uniqueRefs,
        timestamp: new Date(),
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      await saveChatHistory(finalMessages);

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      console.log('Received response from OpenAI');

      // Scroll to bottom
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } catch (error: any) {
      console.error('Error sending message:', error);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', error.message || 'Failed to send message. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Start voice recording
  const startRecording = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      console.log('Starting voice recording...');

      await setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });

      await audioRecorder.prepareToRecordAsync();
      audioRecorder.record();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      Alert.alert('Error', 'Failed to start recording. Please check microphone permissions.');
    }
  };

  // Stop voice recording
  const stopRecording = async () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      console.log('Stopping voice recording...');

      await audioRecorder.stop();
      setIsRecording(false);

      Alert.alert(
        'Voice Recording',
        'Voice-to-text transcription requires additional setup. For now, please type your question.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Error stopping recording:', error);
      Alert.alert('Error', 'Failed to stop recording.');
    }
  };

  // Clear chat history
  const clearHistory = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      'Clear Chat History',
      'Are you sure you want to clear all messages?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: async () => {
            setMessages([]);
            await AsyncStorage.removeItem(CHAT_HISTORY_STORAGE);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            console.log('Cleared chat history');
          },
        },
      ]
    );
  };

  // Open reference link
  const openReference = (refNumber: string) => {
    const ref = getReferenceByNumber(refNumber);
    if (ref) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      Linking.openURL(ref.link);
      console.log('Opening reference:', refNumber);
    }
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Ask an Expert',
            headerRight: () => (
              <Pressable onPress={clearHistory} style={{ marginRight: 8 }}>
                <IconSymbol name="trash" size={20} color={colors.error} />
              </Pressable>
            ),
          }}
        />
      )}
      <KeyboardAvoidingView
        style={commonStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.container}>
          {/* Messages */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
            onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          >
            {messages.length === 0 && (
              <View style={styles.emptyState}>
                <IconSymbol name="brain.head.profile" size={64} color={colors.textSecondary} />
                <Text style={styles.emptyTitle}>Ask the Medical Expert</Text>
                <Text style={styles.emptyDescription}>
                  Ask questions about medical topics covered in our evidence-based reference library.
                  All answers are based on current guidelines and research.
                </Text>
                {!apiKey && (
                  <Pressable
                    style={styles.setupButton}
                    onPress={() => setShowApiKeyInput(true)}
                  >
                    <IconSymbol name="key.fill" size={20} color={colors.background} />
                    <Text style={styles.setupButtonText}>Setup API Key</Text>
                  </Pressable>
                )}
              </View>
            )}

            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageBubble,
                  message.role === 'user' ? styles.userBubble : styles.assistantBubble,
                ]}
              >
                <View style={styles.messageHeader}>
                  <IconSymbol
                    name={message.role === 'user' ? 'person.fill' : 'brain.head.profile'}
                    size={20}
                    color={message.role === 'user' ? colors.primary : colors.secondary}
                  />
                  <Text style={styles.messageRole}>
                    {message.role === 'user' ? 'You' : 'Medical Expert'}
                  </Text>
                </View>
                <Text style={styles.messageContent}>{message.content}</Text>
                {message.references && message.references.length > 0 && (
                  <View style={styles.referencesContainer}>
                    <Text style={styles.referencesTitle}>References:</Text>
                    {message.references.map((ref, index) => (
                      <Pressable
                        key={index}
                        style={styles.referenceChip}
                        onPress={() => openReference(ref)}
                      >
                        <IconSymbol name="book.fill" size={12} color={colors.primary} />
                        <Text style={styles.referenceText}>{ref}</Text>
                        <IconSymbol name="arrow.up.right" size={10} color={colors.primary} />
                      </Pressable>
                    ))}
                  </View>
                )}
                <Text style={styles.messageTime}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </View>
            ))}

            {isLoading && (
              <View style={[styles.messageBubble, styles.assistantBubble]}>
                <ActivityIndicator size="small" color={colors.primary} />
                <Text style={styles.loadingText}>Thinking...</Text>
              </View>
            )}
          </ScrollView>

          {/* Input Area */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ask a medical question..."
                placeholderTextColor={colors.textSecondary}
                multiline
                maxLength={500}
                editable={!isLoading}
              />
              <Pressable
                style={[styles.voiceButton, isRecording && styles.voiceButtonActive]}
                onPress={isRecording ? stopRecording : startRecording}
                disabled={isLoading}
              >
                <IconSymbol
                  name={isRecording ? 'stop.circle.fill' : 'mic.fill'}
                  size={24}
                  color={isRecording ? colors.error : colors.primary}
                />
              </Pressable>
            </View>
            <Pressable
              style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.sendButtonDisabled]}
              onPress={() => sendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
            >
              <IconSymbol name="arrow.up.circle.fill" size={32} color={colors.background} />
            </Pressable>
          </View>

          {/* API Key Setup Modal */}
          {showApiKeyInput && (
            <View style={styles.apiKeyOverlay}>
              <View style={styles.apiKeyModal}>
                <Text style={styles.apiKeyTitle}>OpenAI API Key</Text>
                <Text style={styles.apiKeyDescription}>
                  Enter your OpenAI API key to enable the medical expert assistant.
                  Your key is stored securely on your device.
                </Text>
                <TextInput
                  style={styles.apiKeyInput}
                  placeholder="sk-..."
                  placeholderTextColor={colors.textSecondary}
                  value={apiKey}
                  onChangeText={setApiKey}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                />
                <View style={styles.apiKeyButtons}>
                  <Pressable
                    style={[styles.apiKeyButton, styles.apiKeyCancelButton]}
                    onPress={() => setShowApiKeyInput(false)}
                  >
                    <Text style={styles.apiKeyCancelText}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.apiKeyButton, styles.apiKeySaveButton]}
                    onPress={() => saveApiKey(apiKey)}
                  >
                    <Text style={styles.apiKeySaveText}>Save</Text>
                  </Pressable>
                </View>
                <Pressable
                  style={styles.apiKeyLink}
                  onPress={() => Linking.openURL('https://platform.openai.com/api-keys')}
                >
                  <Text style={styles.apiKeyLinkText}>Get API Key from OpenAI</Text>
                  <IconSymbol name="arrow.up.right" size={12} color={colors.primary} />
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 8,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  setupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    elevation: 4,
  },
  setupButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
  },
  messageBubble: {
    maxWidth: '85%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  assistantBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.card,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  messageRole: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  messageContent: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  referencesContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
  },
  referencesTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 6,
  },
  referenceChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.highlight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  referenceText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  messageTime: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 6,
    textAlign: 'right',
  },
  loadingText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
    gap: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.background,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    maxHeight: 100,
    paddingVertical: 8,
  },
  voiceButton: {
    padding: 8,
  },
  voiceButtonActive: {
    backgroundColor: colors.highlight,
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    padding: 4,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    elevation: 3,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  apiKeyOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  apiKeyModal: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    elevation: 5,
  },
  apiKeyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  apiKeyDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  apiKeyInput: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.highlight,
  },
  apiKeyButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  apiKeyButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  apiKeyCancelButton: {
    backgroundColor: colors.card,
  },
  apiKeySaveButton: {
    backgroundColor: colors.primary,
  },
  apiKeyCancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  apiKeySaveText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
  },
  apiKeyLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 16,
  },
  apiKeyLinkText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
