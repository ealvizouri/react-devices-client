import { useState, useEffect } from 'react';

export const useApi = (_fetch, mapFn = (res) => res) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    _fetch()
      .then(res => setData(mapFn(res)))
      .catch(err => setError(err));
  }, []);
  return [data, error];
};

export const _fetch = (endpoint, method = 'GET', body) => {
  return async () => {
    const url = `http://localhost:3000/${endpoint}`;
    const res = await fetch(url, {
      method,
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      ...(body ? { body: JSON.stringify(body) } : {})
    });
      return res.json();
  };
}