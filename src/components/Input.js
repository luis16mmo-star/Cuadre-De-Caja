import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { Spacing, BorderRadius } from '../styles/spacing';
import { TextStyles } from '../styles/typography';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  keyboardType = 'default',
  editable = true,
  multiline = false,
  numberOfLines = 1,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          !editable && styles.inputDisabled,
          style,
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.sm,
  },
  label: {
    ...TextStyles.body2,
    color: Colors.text,
    marginBottom: Spacing.sm,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.base,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    ...TextStyles.body1,
    color: Colors.text,
  },
  inputError: {
    borderColor: Colors.danger,
  },
  inputDisabled: {
    backgroundColor: Colors.background,
    color: Colors.textSecondary,
  },
  error: {
    color: Colors.danger,
    ...TextStyles.caption,
    marginTop: Spacing.xs,
  },
});

export default Input;
