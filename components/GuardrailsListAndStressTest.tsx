
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { verifySystemArchitectureIntegrity } from '@/data/architectureGuardrails';
import { runSourceAttributionStressTest } from '@/data/sourceAttributionRules';
import { runConsistencyValidationStressTest } from '@/data/consistencyValidationLogic';
import { runFailSafeStressTest } from '@/data/failSafeRules';
import { runSupabaseUsageRulesStressTest } from '@/data/supabaseUsageRules';
import { synthesizerEngine } from '@/data/synthesizerEngine';

interface GuardrailInfo {
  id: number;
  name: string;
  description: string;
  rules: string[];
  status: 'active' | 'testing' | 'passed' | 'failed';
  icon: string;
  color: string;
}

interface StressTestResult {
  guardrailId: number;
  passed: number;
  failed: number;
  totalTests: number;
  successRate: number;
  warnings: string[];
  timestamp: Date;
}

export default function GuardrailsListAndStressTest() {
  const [guardrails, setGuardrails] = useState<GuardrailInfo[]>([
    {
      id: 1,
      name: 'System Architecture Roles',
      description: 'Enforces strict separation between Core Knowledge Engine, Guideline Website Layer, and Synthesizer Engine',
      rules: [
        'Core Knowledge Engine is READ-ONLY',
        'Guidelines consulted at runtime (NOT cached)',
        'Synthesizer generates original educational responses',
        'No auto-updating of medical facts',
      ],
      status: 'active',
      icon: 'building.2.fill',
      color: '#3498DB',
    },
    {
      id: 2,
      name: 'Guideline Consultation Triggers',
      description: 'Intelligent decision-making about when to consult guidelines vs. use core knowledge',
      rules: [
        'Consult for treatment recommendations',
        'Consult for management algorithms',
        'Consult for diagnostic criteria',
        'Do NOT consult for basic definitions',
        'Do NOT consult for pathophysiology',
      ],
      status: 'active',
      icon: 'doc.text.magnifyingglass',
      color: '#9B59B6',
    },
    {
      id: 3,
      name: 'Guideline Usage Rules',
      description: 'Ensures guidelines are used as context, not as replacement for core knowledge',
      rules: [
        'Guidelines provide context, not replacement',
        'Prohibited: "This confirms information is correct"',
        'Prohibited: "This replaces previous knowledge"',
        'Required: "Based on current guidelines"',
        'Required: "This aligns with..."',
      ],
      status: 'active',
      icon: 'checkmark.shield.fill',
      color: '#E67E22',
    },
    {
      id: 4,
      name: 'Synthesis Requirements',
      description: 'Ensures responses are original, educational, and handle uncertainty properly',
      rules: [
        'Must use original language (no direct copying)',
        'No table/algorithm reproduction',
        'No figure reproduction',
        'Must handle uncertainty explicitly',
        'No speculation when evidence insufficient',
      ],
      status: 'active',
      icon: 'text.badge.checkmark',
      color: '#16A085',
    },
    {
      id: 5,
      name: 'Supabase Usage Rules',
      description: 'Strict rules about what data can and cannot be stored in Supabase',
      rules: [
        'MAY store: User identity, subscriptions, feedback',
        'MAY store: Learning preferences, audit metadata',
        'MUST NOT store: Medical facts',
        'MUST NOT store: Guideline text',
        'MUST NOT store: Flashcard content',
      ],
      status: 'active',
      icon: 'cylinder.fill',
      color: '#27AE60',
    },
    {
      id: 6,
      name: 'Source Attribution Rules',
      description: 'Proper attribution of medical sources with direct links',
      rules: [
        'Attribute sources using proper phrasing',
        'Provide direct links to original sources',
        'Do NOT embed proprietary text',
        'Encourage users to consult original references',
        'Include global footer (recommended)',
      ],
      status: 'active',
      icon: 'link.circle.fill',
      color: '#F39C12',
    },
    {
      id: 7,
      name: 'Consistency Validation Logic',
      description: 'Compares guideline recommendations to core medical framework',
      rules: [
        'Compare recommendations to core framework',
        'Assess alignment with known physiology',
        'Identify updated practice areas',
        'State alignment clearly if aligned',
        'Note evolution and provide context if updated',
      ],
      status: 'active',
      icon: 'arrow.triangle.2.circlepath',
      color: '#8E44AD',
    },
    {
      id: 8,
      name: 'Fail-Safe Rules',
      description: 'Graceful degradation when external resources unavailable',
      rules: [
        'Fall back to core knowledge when internet unavailable',
        'State limitations transparently',
        'Avoid definitive treatment claims in degraded mode',
        'Use conservative phrasing when uncertain',
        'Prioritize safety over completeness',
      ],
      status: 'active',
      icon: 'shield.lefthalf.filled',
      color: '#E74C3C',
    },
  ]);

  const [isRunningStressTest, setIsRunningStressTest] = useState(false);
  const [stressTestResults, setStressTestResults] = useState<StressTestResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expandedGuardrail, setExpandedGuardrail] = useState<number | null>(null);

  const handleRunStressTest = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    Alert.alert(
      'Run System Stress Test',
      'This will run comprehensive stress tests on all guardrails. This may take a few moments. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Run Tests',
          onPress: async () => {
            setIsRunningStressTest(true);
            setStressTestResults([]);
            
            try {
              const results: StressTestResult[] = [];

              // Guardrail #1 & #2: System Architecture
              console.log('[STRESS TEST] Testing Guardrail #1 & #2: System Architecture...');
              const architectureCheck = await verifySystemArchitectureIntegrity();
              results.push({
                guardrailId: 1,
                passed: architectureCheck.isValid ? 1 : 0,
                failed: architectureCheck.isValid ? 0 : 1,
                totalTests: 1,
                successRate: architectureCheck.isValid ? 100 : 0,
                warnings: architectureCheck.overallWarnings,
                timestamp: new Date(),
              });

              // Guardrail #3, #4, #6, #7, #8: Synthesizer Engine
              console.log('[STRESS TEST] Testing Guardrails #3, #4, #6, #7, #8: Synthesizer Engine...');
              const synthesizerResults = await synthesizerEngine.runStressTest();
              
              // Guardrail #3: Guideline Usage
              const guidelineUsageTests = synthesizerResults.results.filter(r => r.guidelineUsageValidation);
              const guidelineUsagePassed = guidelineUsageTests.filter(r => r.guidelineUsageValid).length;
              results.push({
                guardrailId: 3,
                passed: guidelineUsagePassed,
                failed: guidelineUsageTests.length - guidelineUsagePassed,
                totalTests: guidelineUsageTests.length,
                successRate: guidelineUsageTests.length > 0 
                  ? Math.round((guidelineUsagePassed / guidelineUsageTests.length) * 100)
                  : 100,
                warnings: synthesizerResults.results
                  .filter(r => !r.guidelineUsageValid)
                  .map(r => `Query: "${r.query}" - Guideline usage validation failed`),
                timestamp: new Date(),
              });

              // Guardrail #4: Synthesis Requirements
              const synthesisTests = synthesizerResults.results.filter(r => r.synthesisRequirementsValidation);
              const synthesisPassed = synthesisTests.filter(r => r.synthesisRequirementsValid).length;
              results.push({
                guardrailId: 4,
                passed: synthesisPassed,
                failed: synthesisTests.length - synthesisPassed,
                totalTests: synthesisTests.length,
                successRate: synthesisTests.length > 0
                  ? Math.round((synthesisPassed / synthesisTests.length) * 100)
                  : 100,
                warnings: synthesizerResults.results
                  .filter(r => !r.synthesisRequirementsValid)
                  .map(r => `Query: "${r.query}" - Synthesis requirements validation failed`),
                timestamp: new Date(),
              });

              // Guardrail #5: Supabase Usage Rules
              console.log('[STRESS TEST] Testing Guardrail #5: Supabase Usage Rules...');
              const supabaseResults = await runSupabaseUsageRulesStressTest();
              results.push({
                guardrailId: 5,
                passed: supabaseResults.passed,
                failed: supabaseResults.failed,
                totalTests: supabaseResults.passed + supabaseResults.failed,
                successRate: Math.round((supabaseResults.passed / (supabaseResults.passed + supabaseResults.failed)) * 100),
                warnings: supabaseResults.testResults
                  .filter(r => !r.passed)
                  .map(r => `Test: "${r.testName}" - ${r.violations.join(', ')}`),
                timestamp: new Date(),
              });

              // Guardrail #6: Source Attribution
              console.log('[STRESS TEST] Testing Guardrail #6: Source Attribution...');
              const attributionResults = await runSourceAttributionStressTest();
              results.push({
                guardrailId: 6,
                passed: attributionResults.passed,
                failed: attributionResults.failed,
                totalTests: attributionResults.passed + attributionResults.failed,
                successRate: Math.round((attributionResults.passed / (attributionResults.passed + attributionResults.failed)) * 100),
                warnings: attributionResults.testResults
                  .filter(r => !r.passed)
                  .map(r => `Test: "${r.testName}" - ${r.warnings.join(', ')}`),
                timestamp: new Date(),
              });

              // Guardrail #7: Consistency Validation
              console.log('[STRESS TEST] Testing Guardrail #7: Consistency Validation...');
              const consistencyResults = await runConsistencyValidationStressTest();
              results.push({
                guardrailId: 7,
                passed: consistencyResults.passed,
                failed: consistencyResults.failed,
                totalTests: consistencyResults.passed + consistencyResults.failed,
                successRate: Math.round((consistencyResults.passed / (consistencyResults.passed + consistencyResults.failed)) * 100),
                warnings: consistencyResults.testResults
                  .filter(r => !r.passed)
                  .map(r => `Test: "${r.testName}" - ${r.warnings.join(', ')}`),
                timestamp: new Date(),
              });

              // Guardrail #8: Fail-Safe Rules
              console.log('[STRESS TEST] Testing Guardrail #8: Fail-Safe Rules...');
              const failSafeResults = await runFailSafeStressTest();
              results.push({
                guardrailId: 8,
                passed: failSafeResults.passed,
                failed: failSafeResults.failed,
                totalTests: failSafeResults.passed + failSafeResults.failed,
                successRate: Math.round((failSafeResults.passed / (failSafeResults.passed + failSafeResults.failed)) * 100),
                warnings: failSafeResults.testResults
                  .filter(r => !r.passed)
                  .map(r => `Test: "${r.testName}" - Validation failed`),
                timestamp: new Date(),
              });

              setStressTestResults(results);
              setShowResults(true);

              // Update guardrail statuses
              setGuardrails(prev => prev.map(g => {
                const result = results.find(r => r.guardrailId === g.id);
                if (result) {
                  return {
                    ...g,
                    status: result.successRate >= 95 ? 'passed' : 'failed',
                  };
                }
                return g;
              }));

              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

              const totalPassed = results.reduce((sum, r) => sum + r.passed, 0);
              const totalTests = results.reduce((sum, r) => sum + r.totalTests, 0);
              const overallSuccessRate = Math.round((totalPassed / totalTests) * 100);

              Alert.alert(
                'Stress Test Complete',
                `Overall Success Rate: ${overallSuccessRate}%\n\nTotal Tests: ${totalTests}\nPassed: ${totalPassed}\nFailed: ${totalTests - totalPassed}\n\nView detailed results below.`,
                [{ text: 'OK' }]
              );
            } catch (error) {
              console.error('[STRESS TEST] Error running stress tests:', error);
              Alert.alert('Error', 'Failed to run stress tests. Check console for details.');
            } finally {
              setIsRunningStressTest(false);
            }
          },
        },
      ]
    );
  };

  const handleCheckIntegrity = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    try {
      const integrityCheck = await verifySystemArchitectureIntegrity();
      
      if (integrityCheck.isValid) {
        Alert.alert(
          'System Integrity Check',
          '✓ All systems operational\n\n' +
          `Core Knowledge: ${integrityCheck.coreKnowledgeIntegrity.totalEntries} entries\n` +
          `Systems: ${integrityCheck.coreKnowledgeIntegrity.systems.length}\n` +
          `Guidelines Cached: ${integrityCheck.guidelineCachingCheck.hasCachedGuidelines ? 'Yes (WARNING)' : 'No (Good)'}\n\n` +
          'No integrity violations detected.',
          [{ text: 'OK' }]
        );
      } else {
        Alert.alert(
          'System Integrity Issues',
          `⚠️ Integrity check failed\n\n${integrityCheck.overallWarnings.join('\n\n')}`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('[INTEGRITY CHECK] Error:', error);
      Alert.alert('Error', 'Failed to check system integrity');
    }
  };

  const toggleGuardrail = (id: number) => {
    setExpandedGuardrail(expandedGuardrail === id ? null : id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return '#27AE60';
      case 'failed': return '#E74C3C';
      case 'testing': return '#F39C12';
      default: return colors.primary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return 'checkmark.circle.fill';
      case 'failed': return 'xmark.circle.fill';
      case 'testing': return 'clock.fill';
      default: return 'circle.fill';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <IconSymbol
          ios_icon_name="shield.checkered"
          android_material_icon_name="security"
          size={32}
          color={colors.primary}
        />
        <Text style={styles.title}>System Guardrails</Text>
        <Text style={styles.subtitle}>Architecture Integrity & Validation</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsSection}>
        <Pressable
          style={[styles.actionButton, styles.stressTestButton]}
          onPress={handleRunStressTest}
          disabled={isRunningStressTest}
        >
          {isRunningStressTest ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <IconSymbol
              ios_icon_name="bolt.shield.fill"
              android_material_icon_name="security"
              size={24}
              color="#FFFFFF"
            />
          )}
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonTitle}>
              {isRunningStressTest ? 'Running Stress Tests...' : 'Run System Stress Test'}
            </Text>
            <Text style={styles.actionButtonDescription}>
              Test all guardrails for consistency and bottlenecks
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.actionButton, styles.integrityButton]}
          onPress={handleCheckIntegrity}
        >
          <IconSymbol
            ios_icon_name="checkmark.shield.fill"
            android_material_icon_name="verified"
            size={24}
            color="#FFFFFF"
          />
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonTitle}>Check System Integrity</Text>
            <Text style={styles.actionButtonDescription}>
              Verify architecture roles and data flow
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Guardrails List */}
      <View style={styles.guardrailsSection}>
        <Text style={styles.sectionTitle}>Active Guardrails ({guardrails.length})</Text>
        
        {guardrails.map((guardrail) => (
          <View key={guardrail.id} style={styles.guardrailCard}>
            <Pressable
              style={styles.guardrailHeader}
              onPress={() => toggleGuardrail(guardrail.id)}
            >
              <View style={styles.guardrailHeaderLeft}>
                <View style={[styles.iconContainer, { backgroundColor: guardrail.color }]}>
                  <IconSymbol
                    ios_icon_name={guardrail.icon}
                    android_material_icon_name="security"
                    size={20}
                    color="#FFFFFF"
                  />
                </View>
                <View style={styles.guardrailInfo}>
                  <Text style={styles.guardrailName}>
                    #{guardrail.id} {guardrail.name}
                  </Text>
                  <Text style={styles.guardrailDescription} numberOfLines={1}>
                    {guardrail.description}
                  </Text>
                </View>
              </View>
              <View style={styles.guardrailHeaderRight}>
                <IconSymbol
                  ios_icon_name={getStatusIcon(guardrail.status)}
                  android_material_icon_name={
                    guardrail.status === 'passed' ? 'check_circle' :
                    guardrail.status === 'failed' ? 'cancel' :
                    guardrail.status === 'testing' ? 'schedule' : 'circle'
                  }
                  size={20}
                  color={getStatusColor(guardrail.status)}
                />
                <IconSymbol
                  ios_icon_name={expandedGuardrail === guardrail.id ? 'chevron.up' : 'chevron.down'}
                  android_material_icon_name={expandedGuardrail === guardrail.id ? 'expand_less' : 'expand_more'}
                  size={20}
                  color={colors.textSecondary}
                />
              </View>
            </Pressable>

            {expandedGuardrail === guardrail.id && (
              <View style={styles.guardrailDetails}>
                <Text style={styles.rulesTitle}>Rules:</Text>
                {guardrail.rules.map((rule, index) => (
                  <View key={index} style={styles.ruleItem}>
                    <Text style={styles.ruleBullet}>•</Text>
                    <Text style={styles.ruleText}>{rule}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Stress Test Results */}
      {showResults && stressTestResults.length > 0 && (
        <View style={styles.resultsSection}>
          <Text style={styles.sectionTitle}>Stress Test Results</Text>
          
          {stressTestResults.map((result) => {
            const guardrail = guardrails.find(g => g.id === result.guardrailId);
            if (!guardrail) return null;

            return (
              <View key={result.guardrailId} style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: guardrail.color }]}>
                    <IconSymbol
                      ios_icon_name={guardrail.icon}
                      android_material_icon_name="security"
                      size={16}
                      color="#FFFFFF"
                    />
                  </View>
                  <Text style={styles.resultTitle}>
                    #{guardrail.id} {guardrail.name}
                  </Text>
                </View>

                <View style={styles.resultStats}>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{result.successRate}%</Text>
                    <Text style={styles.statLabel}>Success Rate</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={[styles.statValue, { color: '#27AE60' }]}>{result.passed}</Text>
                    <Text style={styles.statLabel}>Passed</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={[styles.statValue, { color: '#E74C3C' }]}>{result.failed}</Text>
                    <Text style={styles.statLabel}>Failed</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{result.totalTests}</Text>
                    <Text style={styles.statLabel}>Total</Text>
                  </View>
                </View>

                {result.warnings.length > 0 && (
                  <View style={styles.warningsContainer}>
                    <Text style={styles.warningsTitle}>Warnings ({result.warnings.length}):</Text>
                    {result.warnings.slice(0, 3).map((warning, index) => (
                      <Text key={index} style={styles.warningText} numberOfLines={2}>
                        • {warning}
                      </Text>
                    ))}
                    {result.warnings.length > 3 && (
                      <Text style={styles.moreWarnings}>
                        +{result.warnings.length - 3} more warnings
                      </Text>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  actionsSection: {
    padding: 20,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  stressTestButton: {
    backgroundColor: '#9B59B6',
  },
  integrityButton: {
    backgroundColor: '#3498DB',
  },
  actionButtonContent: {
    flex: 1,
  },
  actionButtonTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  actionButtonDescription: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  guardrailsSection: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  guardrailCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  guardrailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  guardrailHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guardrailInfo: {
    flex: 1,
  },
  guardrailName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  guardrailDescription: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  guardrailHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  guardrailDetails: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  rulesTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  ruleItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  ruleBullet: {
    fontSize: 14,
    color: colors.primary,
    marginRight: 8,
    fontWeight: '700',
  },
  ruleText: {
    fontSize: 13,
    color: colors.text,
    flex: 1,
  },
  resultsSection: {
    padding: 20,
    paddingTop: 0,
  },
  resultCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  resultStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  warningsContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  warningsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#E74C3C',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 4,
  },
  moreWarnings: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 4,
  },
});
