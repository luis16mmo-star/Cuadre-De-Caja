import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';
import { Spacing, BorderRadius } from '../styles/spacing';
import { TextStyles } from '../styles/typography';
import { formatCurrency } from '../utils/currencyFormatter';
import { formatTime } from '../utils/dateFormatter';

const TransactionItem = ({ transaction, onPress, onDelete, type = 'income' }) => {
  const isIncome = type === 'income';
  const amountColor = isIncome ? Colors.success : Colors.danger;
  const amountPrefix = isIncome ? '+' : '-';

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.description}>{transaction.description}</Text>
          <View style={styles.details}>
            <Text style={styles.type}>{transaction.type}</Text>
            <Text style={styles.time}>{formatTime(transaction.createdAt)}</Text>
          </View>
        </View>
        <Text style={[styles.amount, { color: amountColor }]}>
          {amountPrefix} {formatCurrency(transaction.amount)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  content: {
    flex: 1,
    marginRight: Spacing.md,
  },
  description: {
    ...TextStyles.body1,
    color: Colors.text,
    fontWeight: '600',
  },
  details: {
    flexDirection: 'row',
    marginTop: Spacing.xs,
  },
  type: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
    marginRight: Spacing.md,
  },
  time: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  amount: {
    ...TextStyles.body1,
    fontWeight: 'bold',
  },
});

export default TransactionItem;
