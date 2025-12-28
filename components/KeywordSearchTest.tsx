
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { runKeywordStressTest } from '@/data/merckManualKnowledge';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

export default function KeywordSearchTest() {
  const [testResults, setTestResults] = useState<ReturnType<typeof runKeywordStressTest> | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const runTests = () => {
    console.log('Running keyword search stress tests...');
    const results = runKeywordStressTest();
    setTestResults(results);
    console.log('Test results:', results);
  };

  const getSystemColor = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('kidney') || lowerQuery.includes('renal') || lowerQuery.includes('nephro') || 
        lowerQuery.includes('acidosis') || lowerQuery.includes('sodium') || lowerQuery.includes('potassium')) {
      return '#4A90E2'; // Blue for Renal
    }
    if (lowerQuery.includes('heart') || lowerQuery.includes('cardiac') || lowerQuery.includes('atrial') || 
        lowerQuery.includes('ventricular') || lowerQuery.includes('hypertension')) {
      return '#E74C3C'; // Red for Cardiology
    }
    if (lowerQuery.includes('lung') || lowerQuery.includes('pulmonary') || lowerQuery.includes('pneumo') || 
        lowerQuery.includes('respiratory') || lowerQuery.includes('asthma') || lowerQuery.includes('copd')) {
      return '#27AE60'; // Green for Pulmonary
    }
    if (lowerQuery.includes('stroke') || lowerQuery.includes('seizure') || lowerQuery.includes('epilep') || 
        lowerQuery.includes('parkinson') || lowerQuery.includes('alzheimer') || lowerQuery.includes('dementia') ||
        lowerQuery.includes('tremor') || lowerQuery.includes('sclerosis') || lowerQuery.includes('migraine') ||
        lowerQuery.includes('neuropathy') || lowerQuery.includes('myasthenia') || lowerQuery.includes('meningitis') ||
        lowerQuery.includes('encephalitis') || lowerQuery.includes('bell') || lowerQuery.includes('trigeminal') ||
        lowerQuery.includes('als') || lowerQuery.includes('hydrocephalus') || lowerQuery.includes('vertigo')) {
      return '#9B59B6'; // Purple for Neurology
    }
    if (lowerQuery.includes('diabetes') || lowerQuery.includes('thyroid') || lowerQuery.includes('adrenal') ||
        lowerQuery.includes('pituitary') || lowerQuery.includes('cushing') || lowerQuery.includes('addison')) {
      return '#F39C12'; // Orange for Endocrine
    }
    if (lowerQuery.includes('anemia') || lowerQuery.includes('leukemia') || lowerQuery.includes('lymphoma') ||
        lowerQuery.includes('myeloma') || lowerQuery.includes('thrombocyt') || lowerQuery.includes('hemophilia') ||
        lowerQuery.includes('sickle') || lowerQuery.includes('thalassemia')) {
      return '#E91E63'; // Pink for Hematology
    }
    return colors.textSecondary;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Keyword Search Stress Test</Text>
        <Text style={styles.subtitle}>
          Tests precision of keyword matching to prevent content bleeding between similar diseases
        </Text>
      </View>

      <Pressable style={styles.runButton} onPress={runTests}>
        <IconSymbol
          ios_icon_name="play.circle.fill"
          android_material_icon_name="play_circle"
          size={24}
          color="#FFFFFF"
        />
        <Text style={styles.runButtonText}>Run Stress Tests</Text>
      </Pressable>

      {testResults && (
        <View style={styles.resultsContainer}>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <IconSymbol
                  ios_icon_name="checkmark.circle.fill"
                  android_material_icon_name="check_circle"
                  size={32}
                  color="#27AE60"
                />
                <Text style={styles.summaryNumber}>{testResults.passed}</Text>
                <Text style={styles.summaryLabel}>Passed</Text>
              </View>
              <View style={styles.summaryItem}>
                <IconSymbol
                  ios_icon_name="xmark.circle.fill"
                  android_material_icon_name="cancel"
                  size={32}
                  color="#E74C3C"
                />
                <Text style={styles.summaryNumber}>{testResults.failed}</Text>
                <Text style={styles.summaryLabel}>Failed</Text>
              </View>
              <View style={styles.summaryItem}>
                <IconSymbol
                  ios_icon_name="chart.bar.fill"
                  android_material_icon_name="bar_chart"
                  size={32}
                  color={colors.primary}
                />
                <Text style={styles.summaryNumber}>
                  {Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)}%
                </Text>
                <Text style={styles.summaryLabel}>Success Rate</Text>
              </View>
            </View>
          </View>

          <Pressable
            style={styles.detailsToggle}
            onPress={() => setShowDetails(!showDetails)}
          >
            <Text style={styles.detailsToggleText}>
              {showDetails ? 'Hide' : 'Show'} Detailed Results
            </Text>
            <IconSymbol
              ios_icon_name={showDetails ? 'chevron.up' : 'chevron.down'}
              android_material_icon_name={showDetails ? 'expand_less' : 'expand_more'}
              size={20}
              color={colors.primary}
            />
          </Pressable>

          {showDetails && (
            <ScrollView style={styles.detailsScroll}>
              {testResults.results.map((result, index) => (
                <View
                  key={index}
                  style={[
                    styles.testCard,
                    result.passed ? styles.testCardPassed : styles.testCardFailed,
                  ]}
                >
                  <View style={styles.testHeader}>
                    <IconSymbol
                      ios_icon_name={result.passed ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                      android_material_icon_name={result.passed ? 'check_circle' : 'cancel'}
                      size={20}
                      color={result.passed ? '#27AE60' : '#E74C3C'}
                    />
                    <Text style={[styles.testQuery, { color: getSystemColor(result.query) }]}>
                      "{result.query}"
                    </Text>
                  </View>
                  <View style={styles.testDetails}>
                    <Text style={styles.testLabel}>Expected:</Text>
                    <Text style={styles.testValue}>{result.expectedTopic}</Text>
                  </View>
                  <View style={styles.testDetails}>
                    <Text style={styles.testLabel}>Actual:</Text>
                    <Text style={[
                      styles.testValue,
                      !result.passed && styles.testValueError
                    ]}>
                      {result.actualTopic || 'No match found'}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}

          {testResults.failed > 0 && (
            <View style={styles.failedSection}>
              <Text style={styles.failedTitle}>Failed Tests Summary:</Text>
              {testResults.results
                .filter(r => !r.passed)
                .map((result, index) => (
                  <View key={index} style={styles.failedItem}>
                    <Text style={styles.failedQuery}>• "{result.query}"</Text>
                    <Text style={styles.failedDetail}>
                      Expected: {result.expectedTopic}
                    </Text>
                    <Text style={styles.failedDetail}>
                      Got: {result.actualTopic || 'No match'}
                    </Text>
                  </View>
                ))}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  runButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },
  runButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  resultsContainer: {
    flex: 1,
    padding: 20,
  },
  summaryCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
    gap: 8,
  },
  summaryNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  detailsToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsToggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  detailsScroll: {
    flex: 1,
  },
  testCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
  },
  testCardPassed: {
    borderColor: '#27AE60',
  },
  testCardFailed: {
    borderColor: '#E74C3C',
  },
  testHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  testQuery: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  testDetails: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  testLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    width: 80,
  },
  testValue: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  testValueError: {
    color: '#E74C3C',
    fontWeight: '600',
  },
  failedSection: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E74C3C',
  },
  failedTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E74C3C',
    marginBottom: 12,
  },
  failedItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE0E0',
  },
  failedQuery: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  failedDetail: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 16,
  },
});
