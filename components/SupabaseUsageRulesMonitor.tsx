
/**
 * Supabase Usage Rules Monitor Component
 * 
 * Displays the status of GUARDRAIL #5: SUPABASE USAGE RULES
 * Shows what data can and cannot be stored in Supabase
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '@/styles/commonStyles';
import {
  verifySupabaseIntegration,
  runSupabaseUsageRulesStressTest,
  SUPABASE_USAGE_RULES_SUMMARY,
  type SupabaseIntegrationCheck,
} from '@/data/supabaseUsageRules';

export default function SupabaseUsageRulesMonitor() {
  const [integrationCheck, setIntegrationCheck] = useState<SupabaseIntegrationCheck | null>(null);
  const [stressTestResults, setStressTestResults] = useState<any>(null);
  const [isRunningStressTest, setIsRunningStressTest] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    runIntegrationCheck();
  }, []);

  const runIntegrationCheck = () => {
    console.log('Running Supabase integration check...');
    
    // Get current tables from the app
    const currentTables = [
      'profiles',
      'subscriptions',
      'response_feedback',
      'follow_up_selections',
      'user_preferences',
      'guideline_sources',
      'topic_source_mappings',
      'response_audit_log',
    ];
    
    const check = verifySupabaseIntegration(currentTables);
    setIntegrationCheck(check);
  };

  const runStressTest = async () => {
    console.log('Running Supabase usage rules stress test...');
    setIsRunningStressTest(true);
    
    try {
      const results = await runSupabaseUsageRulesStressTest();
      setStressTestResults(results);
    } catch (error) {
      console.error('Stress test error:', error);
    } finally {
      setIsRunningStressTest(false);
    }
  };

  const getStatusColor = (isValid: boolean) => {
    return isValid ? '#4CAF50' : '#F44336';
  };

  const getStatusText = (isValid: boolean) => {
    return isValid ? '✓ VALID' : '✗ INVALID';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GUARDRAIL #5: SUPABASE USAGE RULES</Text>
        <Text style={styles.subtitle}>{SUPABASE_USAGE_RULES_SUMMARY.principle}</Text>
      </View>

      {/* Integration Status */}
      {integrationCheck && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Integration Status</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(integrationCheck.isValid) }]}>
              <Text style={styles.statusText}>{getStatusText(integrationCheck.isValid)}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Current Tables</Text>
            {integrationCheck.currentTables.map((table, index) => (
              <Text key={index} style={styles.listItem}>• {table}</Text>
            ))}
          </View>

          {integrationCheck.violations.length > 0 && (
            <View style={[styles.card, styles.errorCard]}>
              <Text style={styles.cardTitle}>⚠️ Violations</Text>
              {integrationCheck.violations.map((violation, index) => (
                <Text key={index} style={styles.errorText}>{violation}</Text>
              ))}
            </View>
          )}

          {integrationCheck.recommendations.length > 0 && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Recommendations</Text>
              {integrationCheck.recommendations.map((rec, index) => (
                <Text key={index} style={styles.listItem}>{rec}</Text>
              ))}
            </View>
          )}
        </View>
      )}

      {/* Allowed Data Types */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✓ Allowed Data Types</Text>
        <View style={[styles.card, styles.successCard]}>
          {SUPABASE_USAGE_RULES_SUMMARY.allowed.map((item, index) => (
            <Text key={index} style={styles.successText}>• {item}</Text>
          ))}
        </View>
      </View>

      {/* Prohibited Data Types */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✗ Prohibited Data Types</Text>
        <View style={[styles.card, styles.errorCard]}>
          {SUPABASE_USAGE_RULES_SUMMARY.prohibited.map((item, index) => (
            <Text key={index} style={styles.errorText}>• {item}</Text>
          ))}
        </View>
      </View>

      {/* Benefits */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefits</Text>
        <View style={styles.card}>
          {SUPABASE_USAGE_RULES_SUMMARY.benefits.map((benefit, index) => (
            <Text key={index} style={styles.listItem}>• {benefit}</Text>
          ))}
        </View>
      </View>

      {/* Stress Test */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Stress Test</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={runStressTest}
            disabled={isRunningStressTest}
          >
            {isRunningStressTest ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.buttonText}>Run Test</Text>
            )}
          </TouchableOpacity>
        </View>

        {stressTestResults && (
          <View style={styles.card}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{stressTestResults.passed}</Text>
                <Text style={styles.statLabel}>Passed</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, styles.errorValue]}>{stressTestResults.failed}</Text>
                <Text style={styles.statLabel}>Failed</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{stressTestResults.testResults.length}</Text>
                <Text style={styles.statLabel}>Total</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => setShowDetails(!showDetails)}
            >
              <Text style={styles.detailsButtonText}>
                {showDetails ? 'Hide Details' : 'Show Details'}
              </Text>
            </TouchableOpacity>

            {showDetails && (
              <View style={styles.detailsContainer}>
                {stressTestResults.testResults.map((result: any, index: number) => (
                  <View
                    key={index}
                    style={[
                      styles.testResultCard,
                      { borderLeftColor: result.passed ? '#4CAF50' : '#F44336' }
                    ]}
                  >
                    <Text style={styles.testName}>{result.testName}</Text>
                    <Text style={styles.testDataType}>Type: {result.dataType}</Text>
                    <View style={styles.testStatus}>
                      <Text style={[
                        styles.testStatusText,
                        { color: result.passed ? '#4CAF50' : '#F44336' }
                      ]}>
                        {result.passed ? '✓ PASSED' : '✗ FAILED'}
                      </Text>
                    </View>
                    {result.violations.length > 0 && (
                      <View style={styles.violationsContainer}>
                        <Text style={styles.violationsTitle}>Violations:</Text>
                        {result.violations.map((violation: string, vIndex: number) => (
                          <Text key={vIndex} style={styles.violationText}>• {violation}</Text>
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

      {/* Refresh Button */}
      <TouchableOpacity
        style={[styles.button, styles.refreshButton]}
        onPress={runIntegrationCheck}
      >
        <Text style={styles.buttonText}>Refresh Integration Check</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    fontStyle: 'italic',
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  successCard: {
    backgroundColor: '#E8F5E9',
  },
  errorCard: {
    backgroundColor: '#FFEBEE',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
    lineHeight: 20,
  },
  successText: {
    fontSize: 14,
    color: '#2E7D32',
    marginBottom: 4,
    lineHeight: 20,
  },
  errorText: {
    fontSize: 14,
    color: '#C62828',
    marginBottom: 4,
    lineHeight: 20,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  refreshButton: {
    margin: 16,
    marginTop: 0,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  errorValue: {
    color: '#F44336',
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  detailsButton: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  detailsContainer: {
    marginTop: 16,
  },
  testResultCard: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
  },
  testName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  testDataType: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  testStatus: {
    marginBottom: 8,
  },
  testStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  violationsContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  violationsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 4,
  },
  violationText: {
    fontSize: 11,
    color: '#C62828',
    marginBottom: 2,
  },
});
