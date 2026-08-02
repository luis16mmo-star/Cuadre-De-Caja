import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
const storageService = require('../services/storageService');
import { Colors } from '../styles/colors';
import { Spacing } from '../styles/spacing';
import { TextStyles } from '../styles/typography';
import { isValidAmount } from '../utils/validation';
import { formatDate } from '../utils/dateFormatter';

const StartShiftScreen = ({ navigation }) => {
  const [initialAmount, setInitialAmount] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!isValidAmount(initialAmount)) {
      newErrors.initialAmount = 'Ingresa un monto válido';
    }

    if (!employeeName.trim()) {
      newErrors.employeeName = 'El nombre es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStartShift = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const shiftData = {
        initialAmount: parseFloat(initialAmount),
        employeeName,
        startTime: new Date(),
        endTime: null,
        transactions: [],
      };

      const shift = await storageService.saveShift(shiftData);
      Alert.alert('Éxito', 'Turno iniciado correctamente', [
        { text: 'OK', onPress: () => navigation.navigate('ShiftDetails', { shiftId: shift.id }) },
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo iniciar el turno');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Iniciar Nuevo Turno</Text>
      <Text style={styles.subtitle}>{formatDate(new Date())}</Text>

      <Input
        label="Nombre del Empleado"
        placeholder="Ej: Juan García"
        value={employeeName}
        onChangeText={setEmployeeName}
        error={errors.employeeName}
      />

      <Input
        label="Monto Inicial de Caja"
        placeholder="0.00"
        value={initialAmount}
        onChangeText={setInitialAmount}
        keyboardType="decimal-pad"
        error={errors.initialAmount}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Turno"
          onPress={handleStartShift}
          loading={loading}
          size="lg"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    ...TextStyles.h2,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...TextStyles.body2,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
  },
  buttonContainer: {
    marginTop: Spacing.xl,
  },
});

export default StartShiftScreen;
