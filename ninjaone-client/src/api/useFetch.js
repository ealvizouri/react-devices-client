import { useState, useEffect } from 'react';

/**
 * A custom hook to call and endpoint when the endpoint or refresh have changed
 * 
 * @param {string} endpoint The url to fetch from
 * @param {string} method The HTTP request method
 * @param {object} body The object to send along with the HTTP request
 * @param {number} refresh It's just a number to enforce a sideeffect
 * @param {function} callback a function to process the response from server
 * @returns an object with data, loading state and an error if there is one
 */
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

/**
 * Fetches and HTTP endpoint
 * 
 * @param {string} endpoint The url to fetch from
 * @param {string} method The HTTP request method
 * @param {object} body  The object to send along with the HTTP request
 * @param {AbortSignal} signal The signal from AbortController
 * @returns An object with the data from the request and an error if there is one
 */
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
