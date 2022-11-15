import { _fetch } from '../useApi';

export const getDevices = () => _fetch('devices/');

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