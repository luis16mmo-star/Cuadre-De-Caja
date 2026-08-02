import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../styles/colors';
import { Spacing, BorderRadius, Shadows } from '../styles/spacing';
import { TextStyles } from '../styles/typography';

const Button = ({
  onPress,
  title,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: Colors.primary };
      case 'secondary':
        return { backgroundColor: Colors.secondary };
      case 'danger':
        return { backgroundColor: Colors.danger };
      case 'success':
        return { backgroundColor: Colors.success };
      case 'outline':
        return { backgroundColor: 'transparent', borderWidth: 2, borderColor: Colors.primary };
      default:
        return { backgroundColor: Colors.primary };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return { paddingVertical: Spacing.sm, paddingHorizontal: Spacing.md };
      case 'lg':
        return { paddingVertical: Spacing.lg, paddingHorizontal: Spacing.xxl };
      default:
        return { paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={Colors.textLight} />
      ) : (
        <Text style={[styles.text, variant === 'outline' && { color: Colors.primary }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BorderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.md,
  },
  text: {
    color: Colors.textLight,
    ...TextStyles.button,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
