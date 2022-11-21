import { useState, useEffect } from 'react';

function useFetch(endpoint, method = 'GET', body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(null);
      const abortController = new AbortController();
      const signal = abortController.signal;

      _fetch(endpoint, method, body, signal)
      .then(res => {
        setLoading(false);
        res && setData(res);
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
      return () => {
        abortController.abort();
      }
  }, [endpoint, method, body])

  return { data, loading, error }
}

export const _fetch = (endpoint, method = 'GET', body, signal) => {
  return fetch(`http://localhost:3000/${endpoint}`, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    ...(signal ? { signal } : {}),
    ...(body ? { body: JSON.stringify(body) } : {})
  })
  .then(res => res.json());
}

export default useFetch;
