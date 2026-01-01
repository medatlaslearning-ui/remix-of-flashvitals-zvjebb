
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';
import * as Haptics from 'expo-haptics';
import {
  verifySystemArchitectureIntegrity,
  runSystemArchitectureTest,
  type SystemArchitectureIntegrityCheck,
} from '@/data/architectureGuardrails';

export default function ArchitectureGuardrailsMonitor() {
  const [integrityCheck, setIntegrityCheck] = useState<SystemArchitectureIntegrityCheck | null>(null);
  const [testResults, setTestResults] = useState<any>(null);
  const [stressTestResults, setStressTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedGuardrail1, setExpandedGuardrail1] = useState(false);
  const [expandedGuardrail2, setExpandedGuardrail2] = useState(false);
  const [expandedGuardrail3, setExpandedGuardrail3] = useState(false);

  useEffect(() => {
    runIntegrityCheck();
  }, []);

  const runIntegrityCheck = async () => {
    setIsLoading(true);
    try {
      const check = await verifySystemArchitectureIntegrity();
      setIntegrityCheck(check);
    } catch (error) {
      console.error('Error running integrity check:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runFullTest = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);
    try {
      const results = await runSystemArchitectureTest();
      setTestResults(results);
      
      // Also run synthesizer stress test
      const { synthesizerEngine } = await import('@/data/synthesizerEngine');
      const stressResults = await synthesizerEngine.runStressTest();
      setStressTestResults(stressResults);
      
      await runIntegrityCheck();
    } catch (error) {
      console.error('Error running full test:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleGuardrail1 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpandedGuardrail1(!expandedGuardrail1);
  };

  const toggleGuardrail2 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpandedGuardrail2(!expandedGuardrail2);
  };

  const toggleGuardrail3 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpandedGuardrail3(!expandedGuardrail3);
  };

  if (isLoading && !integrityCheck) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={styles.loadingText}>Checking architecture integrity...</Text>
      </View>
    );
  }

  if (!integrityCheck) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Overall Status */}
      <View style={styles.overallStatus}>
        <IconSymbol
          ios_icon_name={integrityCheck.isValid ? 'checkmark.shield.fill' : 'exclamationmark.shield.fill'}
          android_material_icon_name={integrityCheck.isValid ? 'verified_user' : 'warning'}
          size={32}
          color={integrityCheck.isValid ? '#27AE60' : '#E74C3C'}
        />
        <View style={styles.overallStatusText}>
          <Text style={styles.overallTitle}>Architecture Guardrails</Text>
          <Text style={[
            styles.overallStatusLabel,
            integrityCheck.isValid ? styles.statusValid : styles.statusInvalid
          ]}>
            {integrityCheck.isValid ? 'All Systems Valid' : 'Issues Detected'}
          </Text>
        </View>
      </View>

      {/* Guardrail #1: System Architecture Roles */}
      <View style={styles.guardrailCard}>
        <Pressable style={styles.guardrailHeader} onPress={toggleGuardrail1}>
          <View style={styles.guardrailHeaderLeft}>
            <IconSymbol
              ios_icon_name={integrityCheck.coreKnowledgeIntegrity.isValid && integrityCheck.guidelineCachingCheck.isValid ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrityCheck.coreKnowledgeIntegrity.isValid && integrityCheck.guidelineCachingCheck.isValid ? 'check_circle' : 'cancel'}
              size={20}
              color={integrityCheck.coreKnowledgeIntegrity.isValid && integrityCheck.guidelineCachingCheck.isValid ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.guardrailTitle}>Guardrail #1: System Architecture Roles</Text>
          </View>
          <IconSymbol
            ios_icon_name={expandedGuardrail1 ? 'chevron.up' : 'chevron.down'}
            android_material_icon_name={expandedGuardrail1 ? 'expand_less' : 'expand_more'}
            size={20}
            color={colors.textSecondary}
          />
        </Pressable>

        {expandedGuardrail1 && (
          <View style={styles.guardrailContent}>
            {/* Core Knowledge Engine */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🔒 Core Knowledge Engine</Text>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Status:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.coreKnowledgeIntegrity.isValid ? styles.metricGood : styles.metricBad
                ]}>
                  {integrityCheck.coreKnowledgeIntegrity.isValid ? 'Valid' : 'Invalid'}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Total Entries:</Text>
                <Text style={styles.metricValue}>
                  {integrityCheck.coreKnowledgeIntegrity.totalEntries}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Medical Systems:</Text>
                <Text style={styles.metricValue}>
                  {integrityCheck.coreKnowledgeIntegrity.systems.length}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Modified:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.coreKnowledgeIntegrity.hasBeenModified ? styles.metricBad : styles.metricGood
                ]}>
                  {integrityCheck.coreKnowledgeIntegrity.hasBeenModified ? 'Yes (CRITICAL!)' : 'No'}
                </Text>
              </View>
            </View>

            {/* Guideline Website Layer */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🌐 Guideline Website Layer</Text>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Status:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.guidelineCachingCheck.isValid ? styles.metricGood : styles.metricBad
                ]}>
                  {integrityCheck.guidelineCachingCheck.isValid ? 'Valid' : 'Invalid'}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Cached Guidelines:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.guidelineCachingCheck.hasCachedGuidelines ? styles.metricBad : styles.metricGood
                ]}>
                  {integrityCheck.guidelineCachingCheck.hasCachedGuidelines ? 'Yes (CRITICAL!)' : 'No'}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      {/* Guardrail #2: Guideline Consultation Triggers */}
      <View style={styles.guardrailCard}>
        <Pressable style={styles.guardrailHeader} onPress={toggleGuardrail2}>
          <View style={styles.guardrailHeaderLeft}>
            <IconSymbol
              ios_icon_name={integrityCheck.guidelineConsultationCheck?.isValid ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrityCheck.guidelineConsultationCheck?.isValid ? 'check_circle' : 'cancel'}
              size={20}
              color={integrityCheck.guidelineConsultationCheck?.isValid ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.guardrailTitle}>Guardrail #2: Guideline Consultation Triggers</Text>
          </View>
          <IconSymbol
            ios_icon_name={expandedGuardrail2 ? 'chevron.up' : 'chevron.down'}
            android_material_icon_name={expandedGuardrail2 ? 'expand_less' : 'expand_more'}
            size={20}
            color={colors.textSecondary}
          />
        </Pressable>

        {expandedGuardrail2 && integrityCheck.guidelineConsultationCheck && (
          <View style={styles.guardrailContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎯 Consultation Trigger Tests</Text>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Status:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.guidelineConsultationCheck.isValid ? styles.metricGood : styles.metricBad
                ]}>
                  {integrityCheck.guidelineConsultationCheck.isValid ? 'Valid' : 'Invalid'}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Tests Passed:</Text>
                <Text style={[styles.metricValue, styles.metricGood]}>
                  {integrityCheck.guidelineConsultationCheck.testsPassed}
                </Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Tests Failed:</Text>
                <Text style={[
                  styles.metricValue,
                  integrityCheck.guidelineConsultationCheck.testsFailed > 0 ? styles.metricBad : styles.metricGood
                ]}>
                  {integrityCheck.guidelineConsultationCheck.testsFailed}
                </Text>
              </View>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>✅ Consult Guidelines When:</Text>
              <Text style={styles.infoText}>- Treatment recommendations</Text>
              <Text style={styles.infoText}>- Management algorithms</Text>
              <Text style={styles.infoText}>- Diagnostic criteria thresholds</Text>
              <Text style={styles.infoText}>- First-line vs second-line therapy</Text>
              <Text style={styles.infoText}>- Updated practice standards</Text>
              <Text style={styles.infoText}>- &quot;Current&quot;, &quot;latest&quot;, or &quot;guideline&quot; phrasing</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>❌ Do NOT Consult Guidelines For:</Text>
              <Text style={styles.infoText}>- Basic definitions</Text>
              <Text style={styles.infoText}>- Fundamental pathophysiology</Text>
              <Text style={styles.infoText}>- Stable anatomy or physiology</Text>
              <Text style={styles.infoText}>- Flashcard recall questions</Text>
            </View>
          </View>
        )}
      </View>

      {/* Guardrail #3: Guideline Usage Rules */}
      <View style={styles.guardrailCard}>
        <Pressable style={styles.guardrailHeader} onPress={toggleGuardrail3}>
          <View style={styles.guardrailHeaderLeft}>
            <IconSymbol
              ios_icon_name={stressTestResults ? 'checkmark.circle.fill' : 'circle'}
              android_material_icon_name={stressTestResults ? 'check_circle' : 'circle'}
              size={20}
              color={stressTestResults ? '#27AE60' : colors.textSecondary}
            />
            <Text style={styles.guardrailTitle}>Guardrail #3: Guideline Usage Rules</Text>
          </View>
          <IconSymbol
            ios_icon_name={expandedGuardrail3 ? 'chevron.up' : 'chevron.down'}
            android_material_icon_name={expandedGuardrail3 ? 'expand_less' : 'expand_more'}
            size={20}
            color={colors.textSecondary}
          />
        </Pressable>

        {expandedGuardrail3 && (
          <View style={styles.guardrailContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>📋 Guideline Usage Principles</Text>
              <Text style={styles.infoText}>
                • Use guideline information to CONTEXTUALIZE, not overwrite
              </Text>
              <Text style={styles.infoText}>
                • Compare live guidance to core medical framework
              </Text>
              <Text style={styles.infoText}>
                • Validate consistency with known mechanisms
              </Text>
              <Text style={styles.infoText}>
                • If guidance differs from historical practice, explicitly state this
              </Text>
              <Text style={styles.infoText}>
                • Never claim &quot;absolute correctness&quot; or &quot;verification&quot;
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>✅ Required Phrasing:</Text>
              <Text style={styles.infoText}>- &quot;Based on current guidelines...&quot;</Text>
              <Text style={styles.infoText}>- &quot;This recommendation aligns with...&quot;</Text>
              <Text style={styles.infoText}>- &quot;Recent guidance now emphasizes...&quot;</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>❌ Prohibited Language:</Text>
              <Text style={styles.infoText}>- &quot;This confirms the information is correct&quot;</Text>
              <Text style={styles.infoText}>- &quot;The core engine verifies this as true&quot;</Text>
              <Text style={styles.infoText}>- &quot;This replaces previous knowledge&quot;</Text>
            </View>

            {stressTestResults && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>🧪 Stress Test Results</Text>
                <View style={styles.metric}>
                  <Text style={styles.metricLabel}>Tests Passed:</Text>
                  <Text style={[styles.metricValue, styles.metricGood]}>
                    {stressTestResults.passed}
                  </Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricLabel}>Tests Failed:</Text>
                  <Text style={[
                    styles.metricValue,
                    stressTestResults.failed > 0 ? styles.metricBad : styles.metricGood
                  ]}>
                    {stressTestResults.failed}
                  </Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricLabel}>Average Quality:</Text>
                  <Text style={[
                    styles.metricValue,
                    stressTestResults.averageQuality >= 80 ? styles.metricGood :
                    stressTestResults.averageQuality >= 60 ? styles.metricWarning :
                    styles.metricBad
                  ]}>
                    {Math.round(stressTestResults.averageQuality)}%
                  </Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricLabel}>Avg Guideline Usage Score:</Text>
                  <Text style={[
                    styles.metricValue,
                    stressTestResults.averageGuidelineUsageScore >= 80 ? styles.metricGood :
                    stressTestResults.averageGuidelineUsageScore >= 60 ? styles.metricWarning :
                    styles.metricBad
                  ]}>
                    {Math.round(stressTestResults.averageGuidelineUsageScore)}%
                  </Text>
                </View>
                <View style={styles.metric}>
                  <Text style={styles.metricLabel}>Avg Processing Time:</Text>
                  <Text style={styles.metricValue}>
                    {Math.round(stressTestResults.averageProcessingTime)}ms
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
      </View>

      {/* Warnings */}
      {integrityCheck.overallWarnings.length > 0 && (
        <View style={styles.warningsSection}>
          <Text style={styles.warningsTitle}>⚠️ Warnings:</Text>
          {integrityCheck.overallWarnings.map((warning, index) => (
            <Text key={index} style={styles.warningText}>
              • {warning}
            </Text>
          ))}
        </View>
      )}

      {/* Test Results */}
      {testResults && (
        <View style={styles.testResultsSection}>
          <Text style={styles.sectionTitle}>🧪 Comprehensive Test Results</Text>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Overall:</Text>
            <Text style={[
              styles.metricValue,
              testResults.passed ? styles.metricGood : styles.metricBad
            ]}>
              {testResults.passed ? 'Passed' : 'Failed'}
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Core Knowledge Engine:</Text>
            <Text style={[
              styles.metricValue,
              testResults.results.coreKnowledgeEngine.passed ? styles.metricGood : styles.metricBad
            ]}>
              {testResults.results.coreKnowledgeEngine.passed ? 'Passed' : 'Failed'}
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Guideline Website Layer:</Text>
            <Text style={[
              styles.metricValue,
              testResults.results.guidelineWebsiteLayer.passed ? styles.metricGood : styles.metricBad
            ]}>
              {testResults.results.guidelineWebsiteLayer.passed ? 'Passed' : 'Failed'}
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Guideline Consultation Triggers:</Text>
            <Text style={[
              styles.metricValue,
              testResults.results.guidelineConsultationTriggers.passed ? styles.metricGood : styles.metricBad
            ]}>
              {testResults.results.guidelineConsultationTriggers.passed ? 'Passed' : 'Failed'} ({testResults.results.guidelineConsultationTriggers.testsPassed}/{testResults.results.guidelineConsultationTriggers.testsPassed + testResults.results.guidelineConsultationTriggers.testsFailed})
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Synthesizer Engine:</Text>
            <Text style={[
              styles.metricValue,
              testResults.results.synthesizerEngine.passed ? styles.metricGood : styles.metricBad
            ]}>
              {testResults.results.synthesizerEngine.passed ? 'Passed' : 'Failed'}
            </Text>
          </View>
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={runIntegrityCheck}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <>
              <IconSymbol
                ios_icon_name="arrow.clockwise"
                android_material_icon_name="refresh"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.buttonText}>Refresh</Text>
            </>
          )}
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonSecondary]}
          onPress={runFullTest}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <>
              <IconSymbol
                ios_icon_name="play.circle.fill"
                android_material_icon_name="play_circle"
                size={18}
                color={colors.primary}
              />
              <Text style={styles.buttonTextSecondary}>Run Full Test</Text>
            </>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  loadingText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  overallStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  overallStatusText: {
    flex: 1,
  },
  overallTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  overallStatusLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusValid: {
    color: '#27AE60',
  },
  statusInvalid: {
    color: '#E74C3C',
  },
  guardrailCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  guardrailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  guardrailHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  guardrailTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  guardrailContent: {
    padding: 12,
    paddingTop: 0,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  metric: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  metricValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  metricGood: {
    color: '#27AE60',
  },
  metricWarning: {
    color: '#F39C12',
  },
  metricBad: {
    color: '#E74C3C',
  },
  infoBox: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 16,
  },
  warningsSection: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  warningsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E74C3C',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 16,
  },
  testResultsSection: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
