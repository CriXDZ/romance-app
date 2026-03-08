/**
 * Formatea una fecha según los requisitos del proyecto (es-ES).
 * @param {Date} date - La fecha a formatear.
 * @returns {string} - Fecha formateada (ej. "8 de marzo de 2026").
 */
export const formatDateLong = (date) => {
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
