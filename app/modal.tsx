
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Stack } from 'expo-router';
import { colors } from '@/styles/commonStyles';

const DR_ELIAS_REED_INTRO = `Hello. I'm Dr. Elias Reed, Adjunct Faculty in Evidence Synthesis and Clinical Guidelines.

I support medical learners by synthesizing authoritative clinical references into clear, academically sound explanations. My role is to anchor discussions in verifiable evidence, professional consensus, and current standards of care, while leaving teaching style and learning strategies to instructional faculty.

**What I Do**

I help learners understand what the medical literature and guidelines actually say by providing:

• Clear definitions and clinical framing of medical conditions
• Pathophysiology and disease mechanisms
• Typical clinical presentation and diagnostic considerations
• Guideline-aligned management principles (educational context only)
• High-yield clinical insights and academic pearls
• Transparent citation of authoritative sources

**My Knowledge Sources**

I synthesize information from approved medical references, including:

• Professional medical reference texts (e.g., Merck Manual – Professional Edition)
• Peer-reviewed academic literature and review articles
• Clinical practice guidelines from recognized professional organizations
• Curated high-yield clinical flashcard databases

**How I Work (In Simple Terms)**

1. Understand the question (definition, mechanism, guideline approach, etc.)
2. Consult trusted sources only from approved references
3. Reason and synthesize— key facts, apply medical reasoning, and explain in an original academic language
4. Deliver an educational response with evidence-aligned context and references

When evidence is limited or evolving, I state that clearly.

**What I Do Not Do**

For transparency, I:

• Do not store or reproduce proprietary textbooks or articles
• Do not replace primary medical references
• Do not provide personal medical advice
• Do not invent, alter, or guess at medical knowledge
• Do not make clinical decisions

I support learning—I do not practice medicine.

**Example Questions You Can Ask**

"What is atrial fibrillation?"
"Explain the pathophysiology of pheochromocytoma."
"How do current guidelines approach sepsis management?"
"What are the key clinical features of COPD?"
"How is acute kidney injury classified and evaluated?"

**What "ELIAS REED" Means**

E.L.I.A.S. — Evidence-Linked Instructional Academic Synthesizer
R.E.E.D. — Referenced Evidence & Educational Distillation

In short: I look to trusted sources, synthesize responsibly, explain clearly with an original response, and always point back to the evidence.

**Academic Notice**
Responses are educational summaries synthesized from authoritative medical sources. Referenced materials remain the property of their respective publishers and organizations.`;

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatbotModal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: DR_ELIAS_REED_INTRO,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'This is a placeholder response. Integration with medical knowledge base coming soon.',
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Dr. Elias Reed - Medical Expert' }} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageBubble,
                message.isBot ? styles.botBubble : styles.userBubble,
              ]}
            >
              <Text style={[styles.messageText, message.isBot ? styles.botText : styles.userText]}>
                {message.text}
              </Text>
            </View>
          ))}
          {isLoading && (
            <View style={[styles.messageBubble, styles.botBubble]}>
              <ActivityIndicator color={colors.primary} />
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask Dr. Reed a medical question..."
            placeholderTextColor="#999"
            multiline
            maxLength={500}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e3f2fd',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  botText: {
    color: '#1a1a1a',
  },
  userText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    maxHeight: 100,
    fontSize: 15,
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
