import { useState, useEffect } from 'react';

export const useApi = (endpoint, mapFn = (res) => res, initVal = [], refresh) => {
  const [data, setData] = useState(initVal);
  const [error, setError] = useState(null);
  useEffect(() => {
    _fetch(endpoint)
      .then(res => setData(mapFn(res)))
      .catch(err => setError(err));
  }, [endpoint]);
  return [data, error];
};

export const _fetch = (endpoint, method = 'GET', body) => {
  return fetch(`http://localhost:3000/${endpoint}`, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    ...(body ? { body: JSON.stringify(body) } : {})
  })
  .then(res => res.json());
}