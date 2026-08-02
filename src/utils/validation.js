/**
 * Valida que un valor sea un número positivo
 * @param {number|string} value - Valor a validar
 * @returns {boolean} True si es válido
 */
export const isValidAmount = (value) => {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
};

/**
 * Valida que un campo no esté vacío
 * @param {string} value - Valor a validar
 * @returns {boolean} True si no está vacío
 */
export const isNotEmpty = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida un teléfono
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} True si es válido
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
  return phoneRegex.test(phone);
};

/**
 * Obtiene errores de validación
 * @param {object} data - Datos a validar
 * @param {object} rules - Reglas de validación
 * @returns {object} Objeto con errores
 */
export const getValidationErrors = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = data[field];
    
    if (rule.required && !isNotEmpty(String(value))) {
      errors[field] = 'Este campo es requerido';
    } else if (rule.type === 'amount' && !isValidAmount(value)) {
      errors[field] = 'Ingresa un monto válido';
    } else if (rule.type === 'email' && value && !isValidEmail(value)) {
      errors[field] = 'Email inválido';
    } else if (rule.type === 'phone' && value && !isValidPhone(value)) {
      errors[field] = 'Teléfono inválido';
    } else if (rule.minLength && String(value).length < rule.minLength) {
      errors[field] = `Mínimo ${rule.minLength} caracteres`;
    } else if (rule.maxLength && String(value).length > rule.maxLength) {
      errors[field] = `Máximo ${rule.maxLength} caracteres`;
    }
  });
  
  return errors;
};
