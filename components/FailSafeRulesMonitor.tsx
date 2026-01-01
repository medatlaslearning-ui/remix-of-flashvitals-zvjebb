
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import {
  verifyFailSafeIntegration,
  runFailSafeStressTest,
  checkSystemAvailability,
  FAIL_SAFE_RULES_SUMMARY,
  type FailSafeIntegrationCheck,
  type SystemAvailability,
} from '@/data/failSafeRules';

export function FailSafeRulesMonitor() {
  const [integrationCheck, setIntegrationCheck] = useState<FailSafeIntegrationCheck | null>(null);
  const [systemAvailability, setSystemAvailability] = useState<SystemAvailability | null>(null);
  const [stressTestResults, setStressTestResults] = useState<Awaited<ReturnType<typeof runFailSafeStressTest>> | null>(null);
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showStressTestDetails, setShowStressTestDetails] = useState(false);

  useEffect(() => {
    runIntegrationCheck();
    checkAvailability();
  }, []);

  const runIntegrationCheck = () => {
    console.log('[FAIL-SAFE MONITOR] Running integration check...');
    const check = verifyFailSafeIntegration();
    setIntegrationCheck(check);
  };

  const checkAvailability = async () => {
    console.log('[FAIL-SAFE MONITOR] Checking system availability...');
    const availability = await checkSystemAvailability();
    setSystemAvailability(availability);
  };

  const runStressTest = async () => {
    console.log('[FAIL-SAFE MONITOR] Running stress test...');
    setIsRunningTest(true);
    try {
      const results = await runFailSafeStressTest();
      setStressTestResults(results);
      console.log('[FAIL-SAFE MONITOR] Stress test complete:', results);
    } catch (error) {
      console.error('[FAIL-SAFE MONITOR] Stress test error:', error);
    } finally {
      setIsRunningTest(false);
    }
  };

  if (!integrationCheck || !systemAvailability) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading Fail-Safe Rules Monitor...</Text>
      </View>
    );
  }

  const successRate = stressTestResults
    ? Math.round((stressTestResults.passed / (stressTestResults.passed + stressTestResults.failed)) * 100)
    : 0;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fail-Safe Rules Monitor</Text>
        <Text style={styles.subtitle}>GUARDRAIL #8: System Reliability & Transparency</Text>
      </View>

      {/* Summary Card */}
      <View style={[styles.card, integrationCheck.isValid ? styles.cardSuccess : styles.cardError]}>
        <View style={styles.cardHeader}>
          <IconSymbol
            ios_icon_name={integrationCheck.isValid ? 'checkmark.shield.fill' : 'exclamationmark.shield.fill'}
            android_material_icon_name={integrationCheck.isValid ? 'verified_user' : 'error'}
            size={32}
            color={integrationCheck.isValid ? '#27AE60' : '#E74C3C'}
          />
          <View style={styles.cardHeaderText}>
            <Text style={styles.cardTitle}>
              {integrationCheck.isValid ? 'Fail-Safe Rules Active' : 'Integration Issues Detected'}
            </Text>
            <Text style={styles.cardSubtitle}>
              {integrationCheck.violations.length === 0
                ? 'All fail-safe mechanisms operational'
                : `${integrationCheck.violations.length} critical issue(s) detected`}
            </Text>
          </View>
        </View>
      </View>

      {/* System Availability */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>System Availability</Text>
        <View style={styles.availabilityGrid}>
          <View style={styles.availabilityItem}>
            <IconSymbol
              ios_icon_name={systemAvailability.internetAvailable ? 'wifi' : 'wifi.slash'}
              android_material_icon_name={systemAvailability.internetAvailable ? 'wifi' : 'wifi_off'}
              size={24}
              color={systemAvailability.internetAvailable ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.availabilityLabel}>Internet</Text>
            <Text style={[
              styles.availabilityStatus,
              systemAvailability.internetAvailable ? styles.statusAvailable : styles.statusUnavailable
            ]}>
              {systemAvailability.internetAvailable ? 'Available' : 'Unavailable'}
            </Text>
          </View>

          <View style={styles.availabilityItem}>
            <IconSymbol
              ios_icon_name={systemAvailability.guidelinesAccessible ? 'doc.text.fill' : 'doc.text'}
              android_material_icon_name={systemAvailability.guidelinesAccessible ? 'description' : 'description'}
              size={24}
              color={systemAvailability.guidelinesAccessible ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.availabilityLabel}>Guidelines</Text>
            <Text style={[
              styles.availabilityStatus,
              systemAvailability.guidelinesAccessible ? styles.statusAvailable : styles.statusUnavailable
            ]}>
              {systemAvailability.guidelinesAccessible ? 'Accessible' : 'Inaccessible'}
            </Text>
          </View>

          <View style={styles.availabilityItem}>
            <IconSymbol
              ios_icon_name={systemAvailability.coreKnowledgeAvailable ? 'book.fill' : 'book'}
              android_material_icon_name={systemAvailability.coreKnowledgeAvailable ? 'menu_book' : 'menu_book'}
              size={24}
              color={systemAvailability.coreKnowledgeAvailable ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.availabilityLabel}>Core Knowledge</Text>
            <Text style={[
              styles.availabilityStatus,
              systemAvailability.coreKnowledgeAvailable ? styles.statusAvailable : styles.statusUnavailable
            ]}>
              {systemAvailability.coreKnowledgeAvailable ? 'Available' : 'Unavailable'}
            </Text>
          </View>
        </View>
      </View>

      {/* Integration Status */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Integration Status</Text>
        <View style={styles.statusGrid}>
          <View style={styles.statusItem}>
            <IconSymbol
              ios_icon_name={integrationCheck.hasAvailabilityChecking ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrationCheck.hasAvailabilityChecking ? 'check_circle' : 'cancel'}
              size={20}
              color={integrationCheck.hasAvailabilityChecking ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.statusLabel}>Availability Checking</Text>
          </View>

          <View style={styles.statusItem}>
            <IconSymbol
              ios_icon_name={integrationCheck.hasEvidenceAssessment ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrationCheck.hasEvidenceAssessment ? 'check_circle' : 'cancel'}
              size={20}
              color={integrationCheck.hasEvidenceAssessment ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.statusLabel}>Evidence Assessment</Text>
          </View>

          <View style={styles.statusItem}>
            <IconSymbol
              ios_icon_name={integrationCheck.hasDecisionLogic ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrationCheck.hasDecisionLogic ? 'check_circle' : 'cancel'}
              size={20}
              color={integrationCheck.hasDecisionLogic ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.statusLabel}>Decision Logic</Text>
          </View>

          <View style={styles.statusItem}>
            <IconSymbol
              ios_icon_name={integrationCheck.hasValidation ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrationCheck.hasValidation ? 'check_circle' : 'cancel'}
              size={20}
              color={integrationCheck.hasValidation ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.statusLabel}>Validation</Text>
          </View>

          <View style={styles.statusItem}>
            <IconSymbol
              ios_icon_name={integrationCheck.hasResponseGeneration ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
              android_material_icon_name={integrationCheck.hasResponseGeneration ? 'check_circle' : 'cancel'}
              size={20}
              color={integrationCheck.hasResponseGeneration ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.statusLabel}>Response Generation</Text>
          </View>
        </View>
      </View>

      {/* Fail-Safe Principles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fail-Safe Principles</Text>
        <View style={styles.principlesCard}>
          {FAIL_SAFE_RULES_SUMMARY.principles.map((principle, index) => (
            <View key={index} style={styles.principleItem}>
              <IconSymbol
                ios_icon_name="checkmark.circle"
                android_material_icon_name="check_circle"
                size={16}
                color={colors.primary}
              />
              <Text style={styles.principleText}>{principle}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stress Test */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Stress Test</Text>
        <Pressable
          style={[styles.button, isRunningTest && styles.buttonDisabled]}
          onPress={runStressTest}
          disabled={isRunningTest}
        >
          {isRunningTest ? (
            <>
              <ActivityIndicator size="small" color="#FFFFFF" />
              <Text style={styles.buttonText}>Running Test...</Text>
            </>
          ) : (
            <>
              <IconSymbol
                ios_icon_name="play.circle.fill"
                android_material_icon_name="play_circle"
                size={20}
                color="#FFFFFF"
              />
              <Text style={styles.buttonText}>Run Stress Test</Text>
            </>
          )}
        </Pressable>

        {stressTestResults && (
          <View style={styles.testResults}>
            <View style={styles.testSummary}>
              <View style={styles.testSummaryItem}>
                <Text style={styles.testSummaryValue}>{successRate}%</Text>
                <Text style={styles.testSummaryLabel}>Success Rate</Text>
              </View>
              <View style={styles.testSummaryItem}>
                <Text style={[styles.testSummaryValue, { color: '#27AE60' }]}>
                  {stressTestResults.passed}
                </Text>
                <Text style={styles.testSummaryLabel}>Passed</Text>
              </View>
              <View style={styles.testSummaryItem}>
                <Text style={[styles.testSummaryValue, { color: '#E74C3C' }]}>
                  {stressTestResults.failed}
                </Text>
                <Text style={styles.testSummaryLabel}>Failed</Text>
              </View>
            </View>

            <Pressable
              style={styles.detailsToggle}
              onPress={() => setShowStressTestDetails(!showStressTestDetails)}
            >
              <Text style={styles.detailsToggleText}>
                {showStressTestDetails ? 'Hide' : 'Show'} Test Details
              </Text>
              <IconSymbol
                ios_icon_name={showStressTestDetails ? 'chevron.up' : 'chevron.down'}
                android_material_icon_name={showStressTestDetails ? 'expand_less' : 'expand_more'}
                size={20}
                color={colors.primary}
              />
            </Pressable>

            {showStressTestDetails && (
              <View style={styles.testDetails}>
                {stressTestResults.testResults.map((result, index) => (
                  <View
                    key={index}
                    style={[
                      styles.testCard,
                      result.passed ? styles.testCardPassed : styles.testCardFailed,
                    ]}
                  >
                    <View style={styles.testCardHeader}>
                      <IconSymbol
                        ios_icon_name={result.passed ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                        android_material_icon_name={result.passed ? 'check_circle' : 'cancel'}
                        size={20}
                        color={result.passed ? '#27AE60' : '#E74C3C'}
                      />
                      <Text style={styles.testCardTitle}>{result.testName}</Text>
                    </View>
                    <View style={styles.testCardContent}>
                      <Text style={styles.testCardLabel}>Mode:</Text>
                      <Text style={styles.testCardValue}>{result.decision.mode.toUpperCase()}</Text>
                    </View>
                    <View style={styles.testCardContent}>
                      <Text style={styles.testCardLabel}>Validation Score:</Text>
                      <Text style={styles.testCardValue}>{result.validation.score}/100</Text>
                    </View>
                    {result.validation.warnings.length > 0 && (
                      <View style={styles.warningsContainer}>
                        <Text style={styles.warningsTitle}>Warnings:</Text>
                        {result.validation.warnings.map((warning, wIndex) => (
                          <Text key={wIndex} style={styles.warningText}>• {warning}</Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </View>

      {/* Details Toggle */}
      <Pressable
        style={styles.detailsToggle}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Text style={styles.detailsToggleText}>
          {showDetails ? 'Hide' : 'Show'} Implementation Details
        </Text>
        <IconSymbol
          ios_icon_name={showDetails ? 'chevron.up' : 'chevron.down'}
          android_material_icon_name={showDetails ? 'expand_less' : 'expand_more'}
          size={20}
          color={colors.primary}
        />
      </Pressable>

      {showDetails && (
        <>
          {/* Violations */}
          {integrationCheck.violations.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: '#E74C3C' }]}>Critical Issues</Text>
              <View style={styles.violationsCard}>
                {integrationCheck.violations.map((violation, index) => (
                  <View key={index} style={styles.violationItem}>
                    <IconSymbol
                      ios_icon_name="exclamationmark.triangle.fill"
                      android_material_icon_name="warning"
                      size={16}
                      color="#E74C3C"
                    />
                    <Text style={styles.violationText}>{violation}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Recommendations */}
          {integrationCheck.recommendations.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recommendations</Text>
              <View style={styles.recommendationsCard}>
                {integrationCheck.recommendations.map((recommendation, index) => (
                  <View key={index} style={styles.recommendationItem}>
                    <IconSymbol
                      ios_icon_name="lightbulb.fill"
                      android_material_icon_name="lightbulb"
                      size={16}
                      color={colors.primary}
                    />
                    <Text style={styles.recommendationText}>{recommendation}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Operating Modes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Operating Modes</Text>
            <View style={styles.modesCard}>
              {FAIL_SAFE_RULES_SUMMARY.modes.map((mode, index) => (
                <View key={index} style={styles.modeItem}>
                  <Text style={styles.modeText}>{mode}</Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  cardSuccess: {
    borderColor: '#27AE60',
  },
  cardError: {
    borderColor: '#E74C3C',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  availabilityGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  availabilityItem: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  availabilityLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  availabilityStatus: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  statusAvailable: {
    color: '#27AE60',
  },
  statusUnavailable: {
    color: '#E74C3C',
  },
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 12,
    minWidth: '45%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statusLabel: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  principlesCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    gap: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  principleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  principleText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  testResults: {
    marginTop: 16,
  },
  testSummary: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  testSummaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  testSummaryValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  testSummaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  detailsToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  detailsToggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  testDetails: {
    gap: 12,
  },
  testCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  testCardPassed: {
    borderColor: '#27AE60',
  },
  testCardFailed: {
    borderColor: '#E74C3C',
  },
  testCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  testCardTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  testCardContent: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  testCardLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    width: 120,
  },
  testCardValue: {
    flex: 1,
    fontSize: 13,
    color: colors.text,
  },
  warningsContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#FFF5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFE0E0',
  },
  warningsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E74C3C',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 12,
    color: '#E74C3C',
    marginBottom: 4,
  },
  violationsCard: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#FFE0E0',
  },
  violationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  violationText: {
    flex: 1,
    fontSize: 14,
    color: '#E74C3C',
    lineHeight: 20,
  },
  recommendationsCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    gap: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  modesCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  modeItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modeText: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 18,
  },
});
