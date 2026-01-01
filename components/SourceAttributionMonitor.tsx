
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';
import * as Haptics from 'expo-haptics';
import {
  verifySourceAttributionIntegration,
  runSourceAttributionStressTest,
  SOURCE_ATTRIBUTION_RULES_SUMMARY,
  type SourceAttributionIntegrationCheck,
} from '@/data/sourceAttributionRules';

export default function SourceAttributionMonitor() {
  const [integrationCheck, setIntegrationCheck] = useState<SourceAttributionIntegrationCheck | null>(null);
  const [stressTestResults, setStressTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    runIntegrationCheck();
  }, []);

  const runIntegrationCheck = () => {
    setIsLoading(true);
    try {
      const check = verifySourceAttributionIntegration();
      setIntegrationCheck(check);
    } catch (error) {
      console.error('Error running integration check:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runStressTest = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);
    try {
      const results = await runSourceAttributionStressTest();
      setStressTestResults(results);
      runIntegrationCheck();
    } catch (error) {
      console.error('Error running stress test:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleExpanded = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpanded(!expanded);
  };

  if (isLoading && !integrationCheck) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.primary} />
        <Text style={styles.loadingText}>Checking source attribution...</Text>
      </View>
    );
  }

  if (!integrationCheck) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Pressable style={styles.header} onPress={toggleExpanded}>
        <View style={styles.headerLeft}>
          <IconSymbol
            ios_icon_name={integrationCheck.isValid ? 'checkmark.shield.fill' : 'exclamationmark.shield.fill'}
            android_material_icon_name={integrationCheck.isValid ? 'verified_user' : 'warning'}
            size={28}
            color={integrationCheck.isValid ? '#27AE60' : '#E74C3C'}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>Guardrail #6: Source Attribution</Text>
            <Text style={[
              styles.statusLabel,
              integrationCheck.isValid ? styles.statusValid : styles.statusInvalid
            ]}>
              {integrationCheck.isValid ? 'Valid' : 'Issues Detected'}
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
          {/* Integration Status */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📋 Integration Status</Text>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Attribution Templates:</Text>
              <Text style={[
                styles.metricValue,
                integrationCheck.hasAttributionTemplates ? styles.metricGood : styles.metricBad
              ]}>
                {integrationCheck.hasAttributionTemplates ? 'Present' : 'Missing'}
              </Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Consultation Phrases:</Text>
              <Text style={[
                styles.metricValue,
                integrationCheck.hasConsultationPhrases ? styles.metricGood : styles.metricBad
              ]}>
                {integrationCheck.hasConsultationPhrases ? 'Present' : 'Missing'}
              </Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Global Footer:</Text>
              <Text style={[
                styles.metricValue,
                integrationCheck.hasGlobalFooter ? styles.metricGood : styles.metricBad
              ]}>
                {integrationCheck.hasGlobalFooter ? 'Present' : 'Missing'}
              </Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricLabel}>Proprietary Text Detection:</Text>
              <Text style={[
                styles.metricValue,
                integrationCheck.hasProprietaryTextDetection ? styles.metricGood : styles.metricBad
              ]}>
                {integrationCheck.hasProprietaryTextDetection ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
          </View>

          {/* Requirements */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>✅ Attribution Requirements:</Text>
            {SOURCE_ATTRIBUTION_RULES_SUMMARY.requirements.map((req, index) => (
              <Text key={index} style={styles.infoText}>- {req}</Text>
            ))}
          </View>

          {/* Attribution Phrases */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>📝 Attribution Phrases:</Text>
            {SOURCE_ATTRIBUTION_RULES_SUMMARY.attributionPhrases.map((phrase, index) => (
              <Text key={index} style={styles.infoText}>- {phrase}</Text>
            ))}
          </View>

          {/* Prohibited Practices */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>❌ Prohibited Practices:</Text>
            {SOURCE_ATTRIBUTION_RULES_SUMMARY.prohibited.map((item, index) => (
              <Text key={index} style={styles.infoText}>- {item}</Text>
            ))}
          </View>

          {/* Global Footer */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>🔖 Global Footer:</Text>
            <Text style={styles.infoTextItalic}>
              {SOURCE_ATTRIBUTION_RULES_SUMMARY.globalFooter.trim()}
            </Text>
          </View>

          {/* Benefits */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>💡 Benefits:</Text>
            {SOURCE_ATTRIBUTION_RULES_SUMMARY.benefits.map((benefit, index) => (
              <Text key={index} style={styles.infoText}>- {benefit}</Text>
            ))}
          </View>

          {/* Stress Test Results */}
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
                <Text style={styles.metricLabel}>Success Rate:</Text>
                <Text style={[
                  styles.metricValue,
                  stressTestResults.passed / (stressTestResults.passed + stressTestResults.failed) >= 0.8 ? styles.metricGood : styles.metricBad
                ]}>
                  {Math.round((stressTestResults.passed / (stressTestResults.passed + stressTestResults.failed)) * 100)}%
                </Text>
              </View>
            </View>
          )}

          {/* Violations */}
          {integrationCheck.violations.length > 0 && (
            <View style={styles.warningsSection}>
              <Text style={styles.warningsTitle}>⚠️ Violations:</Text>
              {integrationCheck.violations.map((violation, index) => (
                <Text key={index} style={styles.warningText}>
                  • {violation}
                </Text>
              ))}
            </View>
          )}

          {/* Recommendations */}
          {integrationCheck.recommendations.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>💡 Recommendations:</Text>
              {integrationCheck.recommendations.map((rec, index) => (
                <Text key={index} style={styles.infoText}>
                  {rec}
                </Text>
              ))}
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.actions}>
            <Pressable
              style={styles.button}
              onPress={runIntegrationCheck}
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
              onPress={runStressTest}
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
                  <Text style={styles.buttonTextSecondary}>Run Stress Test</Text>
                </>
              )}
            </Pressable>
          </View>
        </View>
      )}
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
  statusLabel: {
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
  infoBox: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 18,
  },
  infoTextItalic: {
    fontSize: 11,
    color: colors.textSecondary,
    fontStyle: 'italic',
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
