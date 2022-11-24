import { _fetch } from '../useFetch';

export const deviceTypes = [
  { text: 'All', value: 'ALL', isLabel: true },
  { text: 'Windows Workstation', value: 'WINDOWS_WORKSTATION'},
  { text: 'Windows Server', value: 'WINDOWS_SERVER'},
  { text: 'Mac', value: 'MAC'}
];

export const createDevice = async (body) => await _fetch(`devices/`, 'POST', body);

export const updateDevice = async (body, id) => await _fetch(`devices/${id}`, 'PUT', body);

export const deleteDevice = async (id) => await _fetch(
  `devices/${id}`,
  'DELETE'
);