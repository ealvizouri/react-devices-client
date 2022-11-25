/**
 * 
 * @param {string} value The number as string
 * @returns {string} value formatted by commas $1,000,0000
 */
export const commaSeparated = (value) => Intl.NumberFormat('en-US').format(value);