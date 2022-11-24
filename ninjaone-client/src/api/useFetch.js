import { useState, useEffect } from 'react';

function useFetch(endpoint, method = 'GET', body, refresh, callback) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true);
      setData(null);
      setError(null);
      const abortController = new AbortController();
      const signal = abortController.signal;
      const callFetch = async () => {
        const { res, err } = await _fetch(endpoint, method, body, signal);
        setLoading(false);
        if (err) {
          setError('An error occurred. Awkward..');
        } else {
          setData(
            callback ? callback(res) : res
          );
        }
      }
      callFetch();
      return () => {
        abortController.abort();
      }
  }, [endpoint, method, body, refresh, callback]);
  return { data, loading, error };
}

export const _fetch = async (endpoint, method = 'GET', body, signal) => {
  try {
    const res = await fetch(`http://localhost:3000/${endpoint}`, {
      method,
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      ...(signal ? { signal } : {}),
      ...(body ? { body: JSON.stringify(body) } : {})
    });
    return { res: await res.json(), err: null };
  } catch (e) {
    return { res: null, err: e};
  }
}

export default useFetch;
