/**
 * Formatea un número como moneda
 * @param {number} value - Valor a formatear
 * @param {string} currency - Código de moneda (default: 'USD')
 * @param {string} locale - Locale para formateo (default: 'es-ES')
 * @returns {string} Valor formateado
 */
export const formatCurrency = (value, currency = 'USD', locale = 'es-ES') => {
  if (value === null || value === undefined) return '$0.00';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Convierte una cadena de moneda a número
 * @param {string} value - Valor formateado como moneda
 * @returns {number} Valor como número
 */
export const parseCurrency = (value) => {
  if (!value) return 0;
  return parseFloat(value.replace(/[^\d.-]/g, ''));
};

/**
 * Formatea un número como porcentaje
 * @param {number} value - Valor a formatear
 * @param {number} decimals - Decimales (default: 2)
 * @returns {string} Valor formateado como porcentaje
 */
export const formatPercentage = (value, decimals = 2) => {
  if (value === null || value === undefined) return '0%';
  return `${parseFloat(value).toFixed(decimals)}%`;
};

/**
 * Calcula el porcentaje de diferencia
 * @param {number} expected - Valor esperado
 * @param {number} actual - Valor actual
 * @returns {number} Porcentaje de diferencia
 */
export const calculateDifference = (expected, actual) => {
  if (expected === 0) return 0;
  return ((actual - expected) / expected) * 100;
};
