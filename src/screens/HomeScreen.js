import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../components/Button';
import Card from '../components/Card';
import SummaryCard from '../components/SummaryCard';
import { Colors } from '../styles/colors';
import { Spacing } from '../styles/spacing';
import { TextStyles } from '../styles/typography';
import { getShifts } from '../services/storageService';
import Text from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [shifts, setShifts] = useState([]);
  const [activeShift, setActiveShift] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      loadShifts();
    }, [])
  );

  const loadShifts = async () => {
    try {
      const data = await getShifts();
      setShifts(data);
      const active = data.find((s) => !s.endTime);
      setActiveShift(active);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar los turnos');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {activeShift ? (
        <>
          <Card>
            <Text.Text style={styles.title}>Turno Activo</Text.Text>
            <SummaryCard
              title="Caja Inicial"
              amount={activeShift.initialAmount}
              variant="info"
              style={{ marginVertical: Spacing.md }}
            />
            <Button
              title="Ver Detalles"
              onPress={() => navigation.navigate('ShiftDetails', { shiftId: activeShift.id })}
              style={{ marginTop: Spacing.md }}
            />
          </Card>
        </>
      ) : (
        <Card>
          <Text.Text style={styles.title}>No hay turno activo</Text.Text>
          <Button
            title="Iniciar Nuevo Turno"
            onPress={() => navigation.navigate('StartShift')}
            style={{ marginTop: Spacing.md }}
          />
        </Card>
      )}

      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Turno"
          onPress={() => navigation.navigate('StartShift')}
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
    ...TextStyles.h3,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  buttonContainer: {
    marginTop: Spacing.xl,
  },
});

export default HomeScreen;
