import { useState, useEffect } from 'react';

const useDevices = (id = '') => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/devices/${id}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setError(err));
  }, []);
  return [data, error];
}

export default useDevices;