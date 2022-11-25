import { _fetch } from '../useFetch';

export const deviceTypes = [
  { text: 'All', value: 'ALL', isLabel: true },
  { text: 'Windows Workstation', value: 'WINDOWS_WORKSTATION'},
  { text: 'Windows Server', value: 'WINDOWS_SERVER'},
  { text: 'Mac', value: 'MAC'}
];

/**
 * Creates a new Device
 * 
 * @param {object} body The object to send along with the HTTP request
 * @returns An object in the form of { data, error }
 */
export const createDevice = async (body) => await _fetch(`devices/`, 'POST', body);

/**
 * Updates an existing Device
 * 
 * @param {object} body The object to send along with the HTTP request
 * @param {string} id The Device's identifier
 * @returns An object in the form of { data, error }
 */
export const updateDevice = async (body, id) => await _fetch(`devices/${id}`, 'PUT', body);

/**
 * Deletes a Device
 * 
 * @param {string} id The Device's identifier
 * @returns An object in the form of { data, error }
 */
export const deleteDevice = async (id) => await _fetch(
  `devices/${id}`,
  'DELETE'
);