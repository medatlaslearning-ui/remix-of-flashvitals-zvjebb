
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
  Linking,
  Alert,
} from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { getAllGuidelineWebsites } from '@/data/allGuidelineWebsites';
import { getAllAcademicReferences, searchAcademicReferences, type AcademicReference } from '@/data/allAcademicReferences';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  websites?: Array<{
    name: string;
    url: string;
    description: string;
    system: string;
  }>;
  references?: AcademicReference[];
  diseaseDiscussion?: string;
}

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Medical Guidelines Chatbot. I can help you understand disease processes and provide evidence-based information from medical guidelines and academic references.\n\nAsk me about any medical topic, such as:\n• Disease processes (e.g., "Tell me about congestive heart failure")\n• Management strategies (e.g., "How is diabetes managed?")\n• Clinical guidelines (e.g., "What are the guidelines for stroke?")',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const findRelevantWebsites = (query: string) => {
    const allWebsites = getAllGuidelineWebsites();
    const lowerQuery = query.toLowerCase();
    
    // Keywords for different medical systems
    const keywords: { [key: string]: string[] } = {
      cardiology: ['heart', 'cardiac', 'cardio', 'arrhythmia', 'afib', 'valve', 'coronary', 'myocardial', 'hypertension', 'blood pressure', 'chf', 'congestive heart failure', 'heart failure'],
      pulmonary: ['lung', 'pulmonary', 'respiratory', 'asthma', 'copd', 'pneumonia', 'breathing', 'airway', 'bronch'],
      renal: ['kidney', 'renal', 'nephro', 'dialysis', 'urinary', 'glomerulo', 'proteinuria'],
      gastroenterology: ['stomach', 'gastro', 'intestin', 'liver', 'hepat', 'pancrea', 'esophag', 'colon', 'bowel', 'digestive', 'crohn', 'colitis', 'celiac'],
      endocrine: ['diabetes', 'thyroid', 'hormone', 'endocrine', 'pituitary', 'adrenal', 'insulin', 'glucose', 'metabolic'],
      hematology: ['blood', 'anemia', 'hemato', 'leukemia', 'lymphoma', 'coagulation', 'thrombosis', 'platelet'],
      neurology: ['brain', 'neuro', 'stroke', 'seizure', 'epilepsy', 'headache', 'migraine', 'dementia', 'alzheimer', 'parkinson', 'multiple sclerosis'],
      'emergency medicine': ['emergency', 'trauma', 'acute', 'critical', 'shock', 'resuscitation'],
      'infectious disease': ['infection', 'infectious', 'bacteria', 'virus', 'antibiotic', 'sepsis', 'fever'],
      urology: ['urolog', 'prostate', 'bladder', 'urinary tract'],
    };

    // Find matching systems
    const matchingSystems = new Set<string>();
    for (const [system, terms] of Object.entries(keywords)) {
      if (terms.some(term => lowerQuery.includes(term))) {
        matchingSystems.add(system);
      }
    }

    // If no specific system matches, search in all descriptions
    if (matchingSystems.size === 0) {
      return allWebsites.filter(website => 
        website.name.toLowerCase().includes(lowerQuery) ||
        website.description.toLowerCase().includes(lowerQuery)
      ).slice(0, 5);
    }

    // Return websites from matching systems
    const results = allWebsites.filter(website => 
      matchingSystems.has(website.system.toLowerCase())
    );

    return results.slice(0, 5);
  };

  const findRelevantReferences = (query: string): AcademicReference[] => {
    const lowerQuery = query.toLowerCase();
    const allReferences = getAllAcademicReferences();
    
    // Search through references
    const matchingRefs = allReferences.filter(ref => {
      const citationMatch = ref.citation.toLowerCase().includes(lowerQuery);
      const topicMatch = ref.topic.toLowerCase().includes(lowerQuery);
      const systemMatch = ref.system.toLowerCase().includes(lowerQuery);
      const appliesToMatch = ref.appliesTo && ref.appliesTo.toLowerCase().includes(lowerQuery);
      
      return citationMatch || topicMatch || systemMatch || appliesToMatch;
    });

    // Return top 5 most relevant references
    return matchingRefs.slice(0, 5);
  };

  const generateDiseaseDiscussion = (query: string, references: AcademicReference[]): string => {
    const lowerQuery = query.toLowerCase();
    
    // Detect if this is a disease process question
    const isDiseaseQuestion = 
      lowerQuery.includes('disease process') ||
      lowerQuery.includes('pathophysiology') ||
      lowerQuery.includes('tell me about') ||
      lowerQuery.includes('what is') ||
      lowerQuery.includes('explain') ||
      lowerQuery.includes('management') ||
      lowerQuery.includes('treatment');

    if (!isDiseaseQuestion || references.length === 0) {
      return '';
    }

    // Generate a discussion based on the query and available references
    let discussion = '';

    // Congestive Heart Failure
    if (lowerQuery.includes('heart failure') || lowerQuery.includes('chf') || lowerQuery.includes('congestive heart failure')) {
      discussion = `**Congestive Heart Failure (CHF): Disease Process & Management**

**Pathophysiology:**
Heart failure is a clinical syndrome resulting from structural or functional cardiac disorders that impair the ability of the ventricle to fill with or eject blood. It can be classified as heart failure with reduced ejection fraction (HFrEF) or preserved ejection fraction (HFpEF).

**Key Features:**
• Progressive condition affecting cardiac output
• Neurohormonal activation (RAAS, SNS)
• Fluid retention and congestion
• Reduced exercise tolerance

**Management Approach:**
1. **Pharmacologic Therapy:**
   - ACE inhibitors or ARBs
   - Beta-blockers
   - Mineralocorticoid receptor antagonists
   - SGLT2 inhibitors
   - Diuretics for volume management

2. **Device Therapy:**
   - ICD for sudden cardiac death prevention
   - CRT for selected patients

3. **Lifestyle Modifications:**
   - Sodium restriction
   - Fluid management
   - Regular exercise as tolerated
   - Weight monitoring

4. **Advanced Therapies:**
   - Mechanical circulatory support
   - Heart transplantation for end-stage disease

The references below provide evidence-based guidelines for comprehensive heart failure management.`;
    }
    // Diabetes
    else if (lowerQuery.includes('diabetes')) {
      discussion = `**Diabetes Mellitus: Disease Process & Management**

**Pathophysiology:**
Diabetes mellitus is characterized by chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both. Type 1 diabetes involves autoimmune destruction of pancreatic beta cells, while Type 2 diabetes involves insulin resistance and progressive beta-cell dysfunction.

**Key Features:**
• Hyperglycemia and metabolic dysregulation
• Microvascular complications (retinopathy, nephropathy, neuropathy)
• Macrovascular complications (cardiovascular disease)
• Increased infection risk

**Management Approach:**
1. **Glycemic Control:**
   - Target HbA1c typically <7% (individualized)
   - Metformin as first-line for Type 2
   - Insulin therapy for Type 1 and advanced Type 2
   - GLP-1 agonists and SGLT2 inhibitors

2. **Cardiovascular Risk Reduction:**
   - Blood pressure control
   - Lipid management with statins
   - Antiplatelet therapy when indicated

3. **Complication Screening:**
   - Annual eye exams
   - Kidney function monitoring
   - Foot examinations
   - Cardiovascular risk assessment

4. **Lifestyle Interventions:**
   - Medical nutrition therapy
   - Regular physical activity
   - Weight management
   - Diabetes self-management education

The references below provide comprehensive, evidence-based guidelines for diabetes care.`;
    }
    // Stroke
    else if (lowerQuery.includes('stroke')) {
      discussion = `**Stroke: Disease Process & Management**

**Pathophysiology:**
Stroke is caused by interruption of blood supply to the brain, either from ischemia (87% of cases) or hemorrhage (13%). Ischemic stroke results from thrombotic or embolic occlusion, while hemorrhagic stroke involves bleeding into brain tissue or subarachnoid space.

**Key Features:**
• Sudden onset of focal neurological deficits
• Time-sensitive emergency requiring rapid intervention
• Risk of permanent disability or death
• Preventable with risk factor modification

**Management Approach:**
1. **Acute Ischemic Stroke:**
   - IV thrombolysis (tPA) within 4.5 hours
   - Mechanical thrombectomy for large vessel occlusion
   - Blood pressure management
   - Antiplatelet therapy

2. **Hemorrhagic Stroke:**
   - Blood pressure control
   - Reversal of anticoagulation if applicable
   - Surgical intervention when indicated
   - ICP monitoring

3. **Secondary Prevention:**
   - Antiplatelet or anticoagulation therapy
   - Statin therapy
   - Blood pressure control
   - Lifestyle modifications

4. **Rehabilitation:**
   - Early mobilization
   - Physical, occupational, and speech therapy
   - Psychosocial support

The references below provide evidence-based guidelines for stroke management.`;
    }
    // Asthma
    else if (lowerQuery.includes('asthma')) {
      discussion = `**Asthma: Disease Process & Management**

**Pathophysiology:**
Asthma is a chronic inflammatory disorder of the airways characterized by variable airflow obstruction, bronchial hyperresponsiveness, and airway inflammation. It involves complex interactions between genetic and environmental factors.

**Key Features:**
• Reversible airway obstruction
• Bronchial hyperresponsiveness
• Chronic airway inflammation
• Episodic symptoms (wheezing, dyspnea, chest tightness, cough)

**Management Approach:**
1. **Controller Medications:**
   - Inhaled corticosteroids (first-line)
   - Long-acting beta-agonists (LABA)
   - Leukotriene modifiers
   - Biologics for severe asthma

2. **Reliever Medications:**
   - Short-acting beta-agonists (SABA)
   - Anticholinergics

3. **Asthma Action Plan:**
   - Symptom monitoring
   - Peak flow monitoring
   - Trigger avoidance
   - Step-up/step-down therapy

4. **Patient Education:**
   - Proper inhaler technique
   - Trigger identification and avoidance
   - Recognition of worsening symptoms
   - When to seek emergency care

The references below provide comprehensive asthma management guidelines.`;
    }
    // Generic response for other conditions
    else if (references.length > 0) {
      const systems = [...new Set(references.map(r => r.system))];
      const topics = [...new Set(references.map(r => r.topic))];
      
      discussion = `**Medical Information: ${topics.join(', ')}**

Based on your query, I found relevant information from ${systems.join(', ')} literature. 

**Key Points:**
• This condition requires comprehensive evaluation and management
• Evidence-based guidelines provide structured approaches to diagnosis and treatment
• Management should be individualized based on patient factors
• Regular monitoring and follow-up are essential

**Clinical Approach:**
The references below provide detailed, evidence-based information on:
- Pathophysiology and disease mechanisms
- Diagnostic criteria and evaluation
- Treatment strategies and management protocols
- Monitoring and follow-up recommendations

Please review the academic references and guideline websites below for comprehensive, evidence-based information.`;
    }

    return discussion;
  };

  const handleSend = () => {
    if (!inputText.trim()) {
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking and respond
    setTimeout(() => {
      const relevantWebsites = findRelevantWebsites(inputText);
      const relevantReferences = findRelevantReferences(inputText);
      const diseaseDiscussion = generateDiseaseDiscussion(inputText, relevantReferences);
      
      let botText = '';
      
      if (diseaseDiscussion) {
        botText = diseaseDiscussion;
      } else if (relevantWebsites.length > 0 || relevantReferences.length > 0) {
        botText = `I found relevant information for your query:`;
        
        if (relevantReferences.length > 0) {
          botText += `\n\n**Academic References:** ${relevantReferences.length} reference${relevantReferences.length > 1 ? 's' : ''} found`;
        }
        
        if (relevantWebsites.length > 0) {
          botText += `\n**Guideline Websites:** ${relevantWebsites.length} website${relevantWebsites.length > 1 ? 's' : ''} found`;
        }
      } else {
        botText = 'I couldn\'t find specific information for that query. Try asking about:\n\n• Specific diseases (e.g., "heart failure", "diabetes", "stroke")\n• Disease processes or pathophysiology\n• Management and treatment approaches\n• Clinical guidelines for specific conditions';
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        websites: relevantWebsites.length > 0 ? relevantWebsites : undefined,
        references: relevantReferences.length > 0 ? relevantReferences : undefined,
        diseaseDiscussion: diseaseDiscussion || undefined,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleWebsitePress = async (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening website:', url);
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the website');
    }
  };

  const handleReferencePress = async (link?: string) => {
    if (!link) {
      Alert.alert('Info', 'No direct link available for this reference');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Opening reference:', link);
    
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        Alert.alert('Error', `Cannot open URL: ${link}`);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      Alert.alert('Error', 'Failed to open the reference');
    }
  };

  const renderMessage = (message: Message) => {
    return (
      <View
        key={message.id}
        style={[
          styles.messageContainer,
          message.isBot ? styles.botMessageContainer : styles.userMessageContainer,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            message.isBot ? styles.botBubble : styles.userBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              message.isBot ? styles.botText : styles.userText,
            ]}
          >
            {message.text}
          </Text>
          
          {/* Academic References Section */}
          {message.references && message.references.length > 0 && (
            <View style={styles.referencesContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  name="book.fill"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.sectionTitle}>Academic References</Text>
              </View>
              {message.references.map((reference, index) => (
                <Pressable
                  key={index}
                  style={styles.referenceCard}
                  onPress={() => handleReferencePress(reference.link)}
                >
                  <View style={styles.referenceHeader}>
                    <Text style={styles.referenceSystem}>{reference.system}</Text>
                    {reference.year && (
                      <Text style={styles.referenceYear}>({reference.year})</Text>
                    )}
                  </View>
                  <Text style={styles.referenceTopic}>{reference.topic}</Text>
                  <Text style={styles.referenceCitation} numberOfLines={3}>
                    {reference.citation}
                  </Text>
                  {reference.appliesTo && (
                    <Text style={styles.referenceAppliesTo} numberOfLines={2}>
                      Applies to: {reference.appliesTo}
                    </Text>
                  )}
                  {reference.link && (
                    <View style={styles.linkIndicator}>
                      <IconSymbol
                        name="link"
                        size={14}
                        color={colors.primary}
                      />
                      <Text style={styles.linkText}>Tap to view full article</Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          )}

          {/* Guideline Websites Section */}
          {message.websites && message.websites.length > 0 && (
            <View style={styles.websitesContainer}>
              <View style={styles.sectionHeader}>
                <IconSymbol
                  name="globe"
                  size={18}
                  color={colors.primary}
                />
                <Text style={styles.sectionTitle}>Guideline Websites</Text>
              </View>
              {message.websites.map((website, index) => (
                <Pressable
                  key={index}
                  style={styles.websiteCard}
                  onPress={() => handleWebsitePress(website.url)}
                >
                  <View style={styles.websiteHeader}>
                    <Text style={styles.websiteSystem}>{website.system}</Text>
                  </View>
                  <Text style={styles.websiteName}>{website.name}</Text>
                  <Text style={styles.websiteDescription} numberOfLines={2}>
                    {website.description}
                  </Text>
                  <Text style={styles.websiteUrl} numberOfLines={1}>
                    {website.url}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
        <Text style={styles.timestamp}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Medical Guidelines Chatbot',
          headerLargeTitle: false,
        }}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map(renderMessage)}
          
          {isTyping && (
            <View style={[styles.messageContainer, styles.botMessageContainer]}>
              <View style={[styles.messageBubble, styles.botBubble]}>
                <ActivityIndicator size="small" color={colors.text} />
              </View>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask about disease processes, management..."
            placeholderTextColor={colors.textSecondary}
            multiline
            maxLength={500}
            returnKeyType="send"
            onSubmitEditing={handleSend}
            blurOnSubmit={false}
          />
          <Pressable
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <IconSymbol
              name="arrow.up.circle.fill"
              size={36}
              color={inputText.trim() ? colors.primary : colors.textSecondary}
            />
          </Pressable>
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
  messageContainer: {
    marginBottom: 16,
    maxWidth: '85%',
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 1,
  },
  botBubble: {
    backgroundColor: colors.card,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  botText: {
    color: colors.text,
  },
  userText: {
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    marginHorizontal: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
  },
  referencesContainer: {
    marginTop: 8,
  },
  referenceCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  referenceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  referenceSystem: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  referenceYear: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  referenceTopic: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },
  referenceCitation: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
    marginBottom: 6,
  },
  referenceAppliesTo: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  linkIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  linkText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
  },
  websitesContainer: {
    marginTop: 8,
  },
  websiteCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },
  websiteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  websiteSystem: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'capitalize',
  },
  websiteName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  websiteDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 6,
    lineHeight: 18,
  },
  websiteUrl: {
    fontSize: 12,
    color: colors.primary,
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 12,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.text,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
