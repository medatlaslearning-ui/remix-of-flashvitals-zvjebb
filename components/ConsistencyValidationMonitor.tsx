
/**
 * CONSISTENCY VALIDATION MONITOR
 * 
 * This component displays the status of GUARDRAIL #7: Consistency Validation Logic
 * 
 * It shows:
 * - Consistency assessment results
 * - Alignment level between guidelines and core knowledge
 * - Updated practice areas
 * - Validation score
 * - Warnings and violations
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';
import {
  verifyConsistencyValidationIntegration,
  runConsistencyValidationStressTest,
  CONSISTENCY_VALIDATION_SUMMARY,
  type ConsistencyValidationIntegrationCheck,
} from '@/data/consistencyValidationLogic';

export function ConsistencyValidationMonitor() {
  const [integrationCheck, setIntegrationCheck] = useState<ConsistencyValidationIntegrationCheck | null>(null);
  const [stressTestResults, setStressTestResults] = useState<any>(null);
  const [isRunningStressTest, setIsRunningStressTest] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    runIntegrationCheck();
  }, []);

  const runIntegrationCheck = () => {
    const check = verifyConsistencyValidationIntegration();
    setIntegrationCheck(check);
  };

  const runStressTest = async () => {
    setIsRunningStressTest(true);
    try {
      const results = await runConsistencyValidationStressTest();
      setStressTestResults(results);
    } catch (error) {
      console.error('Error running stress test:', error);
    } finally {
      setIsRunningStressTest(false);
    }
  };

  if (!integrationCheck) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.headerLeft}>
          <IconSymbol
            ios_icon_name={integrationCheck.isValid ? 'checkmark.shield.fill' : 'exclamationmark.shield.fill'}
            android_material_icon_name={integrationCheck.isValid ? 'verified_user' : 'warning'}
            size={24}
            color={integrationCheck.isValid ? '#27AE60' : '#E74C3C'}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Guardrail #7: Consistency Validation</Text>
            <Text style={[
              styles.status,
              integrationCheck.isValid ? styles.statusValid : styles.statusInvalid
            ]}>
              {integrationCheck.isValid ? '✓ Active' : '✗ Issues Detected'}
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
        <ScrollView style={styles.content}>
          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📋 Summary</Text>
            <Text style={styles.sectionText}>{CONSISTENCY_VALIDATION_SUMMARY.title}</Text>
            
            <View style={styles.subsection}>
              <Text style={styles.subsectionTitle}>Principles:</Text>
              {CONSISTENCY_VALIDATION_SUMMARY.principles.map((principle, index) => (
                <Text key={index} style={styles.listItem}>• {principle}</Text>
              ))}
            </View>

            <View style={styles.subsection}>
              <Text style={styles.subsectionTitle}>If Aligned:</Text>
              {CONSISTENCY_VALIDATION_SUMMARY.ifAligned.map((item, index) => (
                <Text key={index} style={styles.listItem}>• {item}</Text>
              ))}
            </View>

            <View style={styles.subsection}>
              <Text style={styles.subsectionTitle}>If Updated:</Text>
              {CONSISTENCY_VALIDATION_SUMMARY.ifUpdated.map((item, index) => (
                <Text key={index} style={styles.listItem}>• {item}</Text>
              ))}
            </View>

            <View style={styles.subsection}>
              <Text style={styles.subsectionTitle}>Framing:</Text>
              {CONSISTENCY_VALIDATION_SUMMARY.framing.map((item, index) => (
                <Text key={index} style={styles.listItem}>• {item}</Text>
              ))}
            </View>

            <View style={styles.subsection}>
              <Text style={styles.subsectionTitle}>Prohibited:</Text>
              {CONSISTENCY_VALIDATION_SUMMARY.prohibited.map((item, index) => (
                <Text key={index} style={styles.listItem}>• {item}</Text>
              ))}
            </View>
          </View>

          {/* Integration Status */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔧 Integration Status</Text>
            
            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Assessment Logic:</Text>
              <Text style={[
                styles.statusValue,
                integrationCheck.hasAssessmentLogic ? styles.statusGood : styles.statusBad
              ]}>
                {integrationCheck.hasAssessmentLogic ? '✓ Implemented' : '✗ Missing'}
              </Text>
            </View>

            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Validation Logic:</Text>
              <Text style={[
                styles.statusValue,
                integrationCheck.hasValidationLogic ? styles.statusGood : styles.statusBad
              ]}>
                {integrationCheck.hasValidationLogic ? '✓ Implemented' : '✗ Missing'}
              </Text>
            </View>

            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Statement Generation:</Text>
              <Text style={[
                styles.statusValue,
                integrationCheck.hasStatementGeneration ? styles.statusGood : styles.statusBad
              ]}>
                {integrationCheck.hasStatementGeneration ? '✓ Implemented' : '✗ Missing'}
              </Text>
            </View>

            <View style={styles.statusRow}>
              <Text style={styles.statusLabel}>Prohibited Framing Detection:</Text>
              <Text style={[
                styles.statusValue,
                integrationCheck.hasProhibitedFramingDetection ? styles.statusGood : styles.statusBad
              ]}>
                {integrationCheck.hasProhibitedFramingDetection ? '✓ Implemented' : '✗ Missing'}
              </Text>
            </View>
          </View>

          {/* Violations */}
          {integrationCheck.violations.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>⚠️ Violations</Text>
              {integrationCheck.violations.map((violation, index) => (
                <Text key={index} style={styles.violation}>• {violation}</Text>
              ))}
            </View>
          )}

          {/* Warnings */}
          {integrationCheck.warnings.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>⚡ Warnings</Text>
              {integrationCheck.warnings.map((warning, index) => (
                <Text key={index} style={styles.warning}>• {warning}</Text>
              ))}
            </View>
          )}

          {/* Recommendations */}
          {integrationCheck.recommendations.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>💡 Recommendations</Text>
              {integrationCheck.recommendations.map((rec, index) => (
                <Text key={index} style={styles.recommendation}>• {rec}</Text>
              ))}
            </View>
          )}

          {/* Stress Test */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🧪 Stress Test</Text>
            
            <Pressable
              style={[styles.button, isRunningStressTest && styles.buttonDisabled]}
              onPress={runStressTest}
              disabled={isRunningStressTest}
            >
              <Text style={styles.buttonText}>
                {isRunningStressTest ? 'Running Stress Test...' : 'Run Stress Test'}
              </Text>
            </Pressable>

            {stressTestResults && (
              <View style={styles.stressTestResults}>
                <View style={styles.statusRow}>
                  <Text style={styles.statusLabel}>Passed:</Text>
                  <Text style={styles.statusGood}>{stressTestResults.passed}</Text>
                </View>
                <View style={styles.statusRow}>
                  <Text style={styles.statusLabel}>Failed:</Text>
                  <Text style={styles.statusBad}>{stressTestResults.failed}</Text>
                </View>

                <Text style={styles.subsectionTitle}>Test Results:</Text>
                {stressTestResults.testResults.map((result: any, index: number) => (
                  <View key={index} style={styles.testResult}>
                    <Text style={[
                      styles.testResultName,
                      result.passed ? styles.statusGood : styles.statusBad
                    ]}>
                      {result.passed ? '✓' : '✗'} {result.testName}
                    </Text>
                    <Text style={styles.testResultScore}>Score: {result.score}%</Text>
                    {result.warnings.length > 0 && (
                      <Text style={styles.testResultWarnings}>
                        Warnings: {result.warnings.length}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Benefits */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>✨ Benefits</Text>
            {CONSISTENCY_VALIDATION_SUMMARY.benefits.map((benefit, index) => (
              <Text key={index} style={styles.listItem}>• {benefit}</Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
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
    maxHeight: 600,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  subsection: {
    marginTop: 12,
  },
  subsectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  statusValue: {
    fontSize: 13,
    fontWeight: '600',
  },
  statusGood: {
    color: '#27AE60',
  },
  statusBad: {
    color: '#E74C3C',
  },
  violation: {
    fontSize: 13,
    color: '#E74C3C',
    lineHeight: 20,
    marginBottom: 4,
  },
  warning: {
    fontSize: 13,
    color: '#F39C12',
    lineHeight: 20,
    marginBottom: 4,
  },
  recommendation: {
    fontSize: 13,
    color: '#3498DB',
    lineHeight: 20,
    marginBottom: 4,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  stressTestResults: {
    marginTop: 12,
  },
  testResult: {
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 8,
  },
  testResultName: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  testResultScore: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  testResultWarnings: {
    fontSize: 12,
    color: '#F39C12',
  },
});
