import { _fetch } from '../useApi';

export const deviceTypes = [
  { text: 'All', value: 'ALL'},
  { text: 'Windows Workstation', value: 'WINDOWS_WORKSTATION'},
  { text: 'Windows Server', value: 'WINDOWS_SERVER'},
  { text: 'Mac', value: 'MAC'}
];

export const getDevices = () => _fetch('devices/').then(res => res.map(item => ({ ...item, hdd_capacity: parseInt(item.hdd_capacity)})));

export const getDevice = (id) => _fetch(`devices/${id}`);

export const upsertDevice = (body, id = '') => _fetch(
  `devices/${id}`,
  id ? 'PUT' : 'POST',
  body
);

export const removeDevice = (id) => _fetch(
  `devices/${id}`,
  'DELETE'
);