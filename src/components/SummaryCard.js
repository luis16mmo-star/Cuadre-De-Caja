import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { Spacing, BorderRadius } from '../styles/spacing';
import { TextStyles } from '../styles/typography';
import { formatCurrency } from '../utils/currencyFormatter';

const SummaryCard = ({ title, amount, subtitle, variant = 'default', style }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'success':
        return Colors.success;
      case 'danger':
        return Colors.danger;
      case 'warning':
        return Colors.warning;
      case 'info':
        return Colors.info;
      default:
        return Colors.primary;
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: getBackgroundColor() }, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{formatCurrency(amount)}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginVertical: Spacing.sm,
    alignItems: 'center',
  },
  title: {
    ...TextStyles.body2,
    color: Colors.textLight,
    marginBottom: Spacing.xs,
  },
  amount: {
    ...TextStyles.xxl,
    color: Colors.textLight,
    fontWeight: 'bold',
  },
  subtitle: {
    ...TextStyles.caption,
    color: Colors.textLight,
    marginTop: Spacing.xs,
    opacity: 0.8,
  },
});

export default SummaryCard;
