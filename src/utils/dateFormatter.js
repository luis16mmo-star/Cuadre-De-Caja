import moment from 'moment';

/**
 * Formatea una fecha con formato personalizado
 * @param {Date|string} date - Fecha a formatear
 * @param {string} format - Formato deseado (default: 'DD/MM/YYYY HH:mm')
 * @returns {string} Fecha formateada
 */
export const formatDate = (date, format = 'DD/MM/YYYY HH:mm') => {
  if (!date) return '';
  return moment(date).format(format);
};

/**
 * Formatea solo la hora
 * @param {Date|string} date - Fecha/hora a formatear
 * @returns {string} Hora formateada (HH:mm)
 */
export const formatTime = (date) => {
  return formatDate(date, 'HH:mm');
};

/**
 * Formatea solo la fecha
 * @param {Date|string} date - Fecha a formatear
 * @returns {string} Fecha formateada (DD/MM/YYYY)
 */
export const formatDateOnly = (date) => {
  return formatDate(date, 'DD/MM/YYYY');
};

/**
 * Calcula la duración entre dos fechas
 * @param {Date|string} startDate - Fecha inicial
 * @param {Date|string} endDate - Fecha final
 * @returns {object} Objeto con horas y minutos
 */
export const calculateDuration = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);
  const duration = moment.duration(end.diff(start));
  
  return {
    hours: Math.floor(duration.asHours()),
    minutes: duration.minutes(),
    formatted: `${Math.floor(duration.asHours())}h ${duration.minutes()}m`,
  };
};

/**
 * Obtiene la fecha actual
 * @returns {Date} Fecha y hora actual
 */
export const getCurrentDateTime = () => {
  return new Date();
};

/**
 * Obtiene el inicio del día
 * @param {Date} date - Fecha base (default: hoy)
 * @returns {Date} Inicio del día
 */
export const getStartOfDay = (date = new Date()) => {
  return moment(date).startOf('day').toDate();
};

/**
 * Obtiene el final del día
 * @param {Date} date - Fecha base (default: hoy)
 * @returns {Date} Final del día
 */
export const getEndOfDay = (date = new Date()) => {
  return moment(date).endOf('day').toDate();
};
