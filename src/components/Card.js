import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { Spacing, BorderRadius, Shadows } from '../styles/spacing';

const Card = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginVertical: Spacing.sm,
    ...Shadows.md,
  },
});

export default Card;
