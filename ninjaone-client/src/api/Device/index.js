import { _fetch } from '../useFetch';

export const deviceTypes = [
  { text: 'All', value: 'ALL'},
  { text: 'Windows Workstation', value: 'WINDOWS_WORKSTATION'},
  { text: 'Windows Server', value: 'WINDOWS_SERVER'},
  { text: 'Mac', value: 'MAC'}
];

export const getDevices = () => _fetch('devices/').then(res => res.map(item => ({ ...item, hdd_capacity: parseInt(item.hdd_capacity)})));

export const getDevice = (id) => _fetch(`devices/${id}`);

export const createDevice = (body) => _fetch(`devices/`, 'POST', body);

export const updateDevice = (body, id) => _fetch(`devices/${id}`, 'PUT', body);

export const deleteDevice = (id) => _fetch(
  `devices/${id}`,
  'DELETE'
);