
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
  const [isLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
      await runIntegrityCheck();
    } catch (error) {
      console.error('Error running full test:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleExpanded = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded(!expanded);
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
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={toggleExpanded}>
        <View style={styles.headerLeft}>
          <IconSymbol
            ios_icon_name={integrityCheck.isValid ? 'checkmark.shield.fill' : 'exclamationmark.shield.fill'}
            android_material_icon_name={integrityCheck.isValid ? 'verified_user' : 'warning'}
            size={24}
            color={integrityCheck.isValid ? '#27AE60' : '#E74C3C'}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Guardrail #1: System Architecture</Text>
            <Text style={[
              styles.status,
              integrityCheck.isValid ? styles.statusValid : styles.statusInvalid
            ]}>
              {integrityCheck.isValid ? 'Valid' : 'Invalid'}
            </Text>
          </View>
        </View>
        <IconSymbol
          ios_icon_name={expanded ? 'chevron.up' : 'chevron.down'}
          android_material_icon_name={expanded ? 'expand_less' : 'expand_more'}
          size={20}
          color={colors.textSecondary}
        />
      </Pressable>

      {expanded && (
        <View style={styles.content}>
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
              <Text style={styles.sectionTitle}>🧪 Test Results</Text>
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
        </View>
      )}
    </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
  },
  statusValid: {
    color: '#27AE60',
  },
  statusInvalid: {
    color: '#E74C3C',
  },
  content: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
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
    fontSize: 13,
    color: colors.textSecondary,
  },
  metricValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  metricGood: {
    color: '#27AE60',
  },
  metricBad: {
    color: '#E74C3C',
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
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 18,
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
