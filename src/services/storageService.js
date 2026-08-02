import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const SHIFTS_KEY = 'shifts_key';
const TRANSACTIONS_KEY = 'transactions_key';

/**
 * Guarda un turno
 * @param {object} shift - Datos del turno
 * @returns {Promise<object>} Turno guardado con ID
 */
export const saveShift = async (shift) => {
  try {
    const shiftData = {
      id: uuidv4(),
      ...shift,
      createdAt: new Date().toISOString(),
    };
    
    const shifts = await getShifts();
    const updatedShifts = [...shifts, shiftData];
    
    await AsyncStorage.setItem(SHIFTS_KEY, JSON.stringify(updatedShifts));
    return shiftData;
  } catch (error) {
    console.error('Error saving shift:', error);
    throw error;
  }
};

/**
 * Obtiene todos los turnos
 * @returns {Promise<Array>} Lista de turnos
 */
export const getShifts = async () => {
  try {
    const data = await AsyncStorage.getItem(SHIFTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting shifts:', error);
    return [];
  }
};

/**
 * Obtiene un turno por ID
 * @param {string} shiftId - ID del turno
 * @returns {Promise<object>} Datos del turno
 */
export const getShiftById = async (shiftId) => {
  try {
    const shifts = await getShifts();
    return shifts.find(shift => shift.id === shiftId);
  } catch (error) {
    console.error('Error getting shift:', error);
    return null;
  }
};

/**
 * Actualiza un turno
 * @param {string} shiftId - ID del turno
 * @param {object} updates - Datos a actualizar
 * @returns {Promise<object>} Turno actualizado
 */
export const updateShift = async (shiftId, updates) => {
  try {
    const shifts = await getShifts();
    const updatedShifts = shifts.map(shift =>
      shift.id === shiftId ? { ...shift, ...updates, updatedAt: new Date().toISOString() } : shift
    );
    
    await AsyncStorage.setItem(SHIFTS_KEY, JSON.stringify(updatedShifts));
    return updatedShifts.find(shift => shift.id === shiftId);
  } catch (error) {
    console.error('Error updating shift:', error);
    throw error;
  }
};

/**
 * Elimina un turno
 * @param {string} shiftId - ID del turno
 * @returns {Promise<boolean>} True si se eliminó
 */
export const deleteShift = async (shiftId) => {
  try {
    const shifts = await getShifts();
    const filteredShifts = shifts.filter(shift => shift.id !== shiftId);
    await AsyncStorage.setItem(SHIFTS_KEY, JSON.stringify(filteredShifts));
    return true;
  } catch (error) {
    console.error('Error deleting shift:', error);
    throw error;
  }
};

/**
 * Guarda una transacción
 * @param {object} transaction - Datos de la transacción
 * @returns {Promise<object>} Transacción guardada
 */
export const saveTransaction = async (transaction) => {
  try {
    const transactionData = {
      id: uuidv4(),
      ...transaction,
      createdAt: new Date().toISOString(),
    };
    
    const transactions = await getTransactions();
    const updatedTransactions = [...transactions, transactionData];
    
    await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(updatedTransactions));
    return transactionData;
  } catch (error) {
    console.error('Error saving transaction:', error);
    throw error;
  }
};

/**
 * Obtiene todas las transacciones
 * @returns {Promise<Array>} Lista de transacciones
 */
export const getTransactions = async () => {
  try {
    const data = await AsyncStorage.getItem(TRANSACTIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting transactions:', error);
    return [];
  }
};

/**
 * Obtiene transacciones de un turno
 * @param {string} shiftId - ID del turno
 * @returns {Promise<Array>} Transacciones del turno
 */
export const getTransactionsByShift = async (shiftId) => {
  try {
    const transactions = await getTransactions();
    return transactions.filter(t => t.shiftId === shiftId);
  } catch (error) {
    console.error('Error getting transactions by shift:', error);
    return [];
  }
};

/**
 * Elimina una transacción
 * @param {string} transactionId - ID de la transacción
 * @returns {Promise<boolean>} True si se eliminó
 */
export const deleteTransaction = async (transactionId) => {
  try {
    const transactions = await getTransactions();
    const filteredTransactions = transactions.filter(t => t.id !== transactionId);
    await AsyncStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(filteredTransactions));
    return true;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

/**
 * Limpia todos los datos
 * @returns {Promise<boolean>} True si se limpió
 */
export const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove([SHIFTS_KEY, TRANSACTIONS_KEY]);
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    throw error;
  }
};
