
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { perpetualLearningEngine, type SystemHealth, type RepairAction } from '@/data/perpetualLearningEngine';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function SystemHealthMonitor() {
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isRepairing, setIsRepairing] = useState(false);
  const [showRepairHistory, setShowRepairHistory] = useState(false);

  useEffect(() => {
    loadHealth();
  }, []);

  const loadHealth = () => {
    const currentHealth = perpetualLearningEngine.getSystemHealth();
    setHealth(currentHealth);
  };

  const handleRefreshSystem = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    Alert.alert(
      'Refresh System Logic',
      'This will refresh the Perpetual Learning Engine, recalculate quality scores, and run stress tests. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Refresh',
          onPress: async () => {
            setIsRefreshing(true);
            
            try {
              await perpetualLearningEngine.refreshSystemLogic();
              loadHealth();
              
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              
              Alert.alert(
                'System Refreshed',
                'The Perpetual Learning Engine has been refreshed successfully. All quality scores have been recalculated and stress tests completed.'
              );
            } catch (error) {
              console.error('Error refreshing system:', error);
              Alert.alert('Error', 'Failed to refresh system logic');
            } finally {
              setIsRefreshing(false);
            }
          },
        },
      ]
    );
  };

  const handleRunRepairs = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    Alert.alert(
      'Run Internal Repairs',
      'This will run internal audits, system scrubbing, and fix any detected issues. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Run Repairs',
          style: 'destructive',
          onPress: async () => {
            setIsRepairing(true);
            
            try {
              const repairs = await perpetualLearningEngine.runInternalRepairs();
              loadHealth();
              
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              
              // Show repair results
              const repairSummary = repairs.map((r, i) => 
                `${i + 1}. ${r.action}\n   Result: ${r.result}`
              ).join('\n\n');
              
              Alert.alert(
                'Repairs Completed',
                `${repairs.length} repair action(s) completed:\n\n${repairSummary}`,
                [{ text: 'OK' }]
              );
            } catch (error) {
              console.error('Error running repairs:', error);
              Alert.alert('Error', 'Failed to run internal repairs');
            } finally {
              setIsRepairing(false);
            }
          },
        },
      ]
    );
  };

  const handleRunStressTest = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    setIsRefreshing(true);
    
    try {
      const results = await perpetualLearningEngine.runStressTest();
      loadHealth();
      
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      
      const issueText = results.issues.length > 0 
        ? `\n\nIssues Found:\n${results.issues.join('\n')}`
        : '\n\nNo issues detected!';
      
      Alert.alert(
        'Stress Test Complete',
        `Success Rate: ${results.successRate}%\nPassed: ${results.passed}\nFailed: ${results.failed}${issueText}`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Error running stress test:', error);
      Alert.alert('Error', 'Failed to run stress test');
    } finally {
      setIsRefreshing(false);
    }
  };

  if (!health) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading system health...</Text>
      </View>
    );
  }

  const feedbackTotal = health.positiveFeedback + health.negativeFeedback;
  const positiveRate = feedbackTotal > 0 
    ? Math.round((health.positiveFeedback / feedbackTotal) * 100)
    : 0;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <IconSymbol
          ios_icon_name="heart.text.square.fill"
          android_material_icon_name="favorite"
          size={32}
          color={health.needsRepair ? '#E74C3C' : '#27AE60'}
        />
        <Text style={styles.title}>Perpetual Learning Engine</Text>
        <Text style={styles.subtitle}>System Health Monitor</Text>
      </View>

      {/* System Status */}
      <View style={[
        styles.statusCard,
        health.needsRepair ? styles.statusCardWarning : styles.statusCardHealthy
      ]}>
        <View style={styles.statusHeader}>
          <IconSymbol
            ios_icon_name={health.needsRepair ? 'exclamationmark.triangle.fill' : 'checkmark.circle.fill'}
            android_material_icon_name={health.needsRepair ? 'warning' : 'check_circle'}
            size={24}
            color={health.needsRepair ? '#E74C3C' : '#27AE60'}
          />
          <Text style={[
            styles.statusText,
            health.needsRepair ? styles.statusTextWarning : styles.statusTextHealthy
          ]}>
            {health.needsRepair ? 'System Needs Attention' : 'System Healthy'}
          </Text>
        </View>
        {health.needsRepair && (
          <Text style={styles.statusDescription}>
            Excessive negative feedback detected. Run internal repairs to fix issues.
          </Text>
        )}
      </View>

      {/* Metrics Grid */}
      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <IconSymbol
            ios_icon_name="chart.bar.fill"
            android_material_icon_name="bar_chart"
            size={24}
            color={colors.primary}
          />
          <Text style={styles.metricValue}>{health.totalInteractions}</Text>
          <Text style={styles.metricLabel}>Total Interactions</Text>
        </View>

        <View style={styles.metricCard}>
          <IconSymbol
            ios_icon_name="hand.thumbsup.fill"
            android_material_icon_name="thumb_up"
            size={24}
            color="#27AE60"
          />
          <Text style={styles.metricValue}>{health.positiveFeedback}</Text>
          <Text style={styles.metricLabel}>Positive Feedback</Text>
        </View>

        <View style={styles.metricCard}>
          <IconSymbol
            ios_icon_name="hand.thumbsdown.fill"
            android_material_icon_name="thumb_down"
            size={24}
            color="#E74C3C"
          />
          <Text style={styles.metricValue}>{health.negativeFeedback}</Text>
          <Text style={styles.metricLabel}>Negative Feedback</Text>
        </View>

        <View style={styles.metricCard}>
          <IconSymbol
            ios_icon_name="star.fill"
            android_material_icon_name="star"
            size={24}
            color="#F39C12"
          />
          <Text style={styles.metricValue}>{health.averageQuality}</Text>
          <Text style={styles.metricLabel}>Avg Quality Score</Text>
        </View>

        <View style={styles.metricCard}>
          <IconSymbol
            ios_icon_name="percent"
            android_material_icon_name="percent"
            size={24}
            color={positiveRate >= 70 ? '#27AE60' : '#E74C3C'}
          />
          <Text style={styles.metricValue}>{positiveRate}%</Text>
          <Text style={styles.metricLabel}>Positive Rate</Text>
        </View>

        {health.stressTestResults && (
          <View style={styles.metricCard}>
            <IconSymbol
              ios_icon_name="checkmark.shield.fill"
              android_material_icon_name="verified"
              size={24}
              color={health.stressTestResults.successRate >= 95 ? '#27AE60' : '#E74C3C'}
            />
            <Text style={styles.metricValue}>{health.stressTestResults.successRate}%</Text>
            <Text style={styles.metricLabel}>Stress Test Success</Text>
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>System Actions</Text>

        <Pressable
          style={[styles.actionButton, styles.refreshButton]}
          onPress={handleRefreshSystem}
          disabled={isRefreshing}
        >
          <IconSymbol
            ios_icon_name="arrow.clockwise.circle.fill"
            android_material_icon_name="refresh"
            size={24}
            color="#FFFFFF"
          />
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonTitle}>
              {isRefreshing ? 'Refreshing...' : 'Refresh System Logic'}
            </Text>
            <Text style={styles.actionButtonDescription}>
              Recalculate quality scores and run stress tests
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.actionButton, styles.repairButton]}
          onPress={handleRunRepairs}
          disabled={isRepairing}
        >
          <IconSymbol
            ios_icon_name="wrench.and.screwdriver.fill"
            android_material_icon_name="build"
            size={24}
            color="#FFFFFF"
          />
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonTitle}>
              {isRepairing ? 'Running Repairs...' : 'Run Internal Repairs'}
            </Text>
            <Text style={styles.actionButtonDescription}>
              System scrubbing and automated issue fixes
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.actionButton, styles.stressTestButton]}
          onPress={handleRunStressTest}
          disabled={isRefreshing}
        >
          <IconSymbol
            ios_icon_name="bolt.shield.fill"
            android_material_icon_name="security"
            size={24}
            color="#FFFFFF"
          />
          <View style={styles.actionButtonContent}>
            <Text style={styles.actionButtonTitle}>Run Stress Test</Text>
            <Text style={styles.actionButtonDescription}>
              Test keyword matching and content bleeding prevention
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Repair History */}
      {health.repairHistory.length > 0 && (
        <View style={styles.historySection}>
          <Pressable
            style={styles.historyHeader}
            onPress={() => setShowRepairHistory(!showRepairHistory)}
          >
            <Text style={styles.sectionTitle}>Repair History ({health.repairHistory.length})</Text>
            <IconSymbol
              ios_icon_name={showRepairHistory ? 'chevron.up' : 'chevron.down'}
              android_material_icon_name={showRepairHistory ? 'expand_less' : 'expand_more'}
              size={20}
              color={colors.primary}
            />
          </Pressable>

          {showRepairHistory && (
            <View style={styles.historyList}>
              {health.repairHistory.slice().reverse().map((repair, index) => (
                <View key={repair.id} style={styles.repairCard}>
                  <View style={styles.repairHeader}>
                    <IconSymbol
                      ios_icon_name="checkmark.circle.fill"
                      android_material_icon_name="check_circle"
                      size={20}
                      color="#27AE60"
                    />
                    <Text style={styles.repairDate}>
                      {new Date(repair.timestamp).toLocaleString()}
                    </Text>
                  </View>
                  <Text style={styles.repairIssue}>Issue: {repair.issue}</Text>
                  <Text style={styles.repairAction}>Action: {repair.action}</Text>
                  <Text style={styles.repairResult}>Result: {repair.result}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      {/* Last Activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Last Activity</Text>
        {health.lastStressTest && (
          <View style={styles.activityItem}>
            <IconSymbol
              ios_icon_name="bolt.shield.fill"
              android_material_icon_name="security"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={styles.activityText}>
              Last Stress Test: {new Date(health.lastStressTest).toLocaleString()}
            </Text>
          </View>
        )}
        {health.lastRepair && (
          <View style={styles.activityItem}>
            <IconSymbol
              ios_icon_name="wrench.and.screwdriver.fill"
              android_material_icon_name="build"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={styles.activityText}>
              Last Repair: {new Date(health.lastRepair).toLocaleString()}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 40,
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
  statusCard: {
    margin: 20,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  statusCardHealthy: {
    backgroundColor: '#E8F8F0',
    borderColor: '#27AE60',
  },
  statusCardWarning: {
    backgroundColor: '#FFF5F5',
    borderColor: '#E74C3C',
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    fontSize: 18,
    fontWeight: '700',
  },
  statusTextHealthy: {
    color: '#27AE60',
  },
  statusTextWarning: {
    color: '#E74C3C',
  },
  statusDescription: {
    fontSize: 14,
    color: colors.text,
    marginTop: 8,
    marginLeft: 36,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  metricLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  actionsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  refreshButton: {
    backgroundColor: colors.primary,
  },
  repairButton: {
    backgroundColor: '#E74C3C',
  },
  stressTestButton: {
    backgroundColor: '#9B59B6',
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
  historySection: {
    padding: 20,
    paddingTop: 0,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyList: {
    gap: 12,
  },
  repairCard: {
    backgroundColor: colors.card,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  repairHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  repairDate: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  repairIssue: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  repairAction: {
    fontSize: 13,
    color: colors.text,
    marginBottom: 4,
  },
  repairResult: {
    fontSize: 13,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  activitySection: {
    padding: 20,
    paddingTop: 0,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  activityText: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
