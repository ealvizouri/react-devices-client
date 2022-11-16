import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDevice } from '../../api/Device';
import Breadcrumb from '../../components/Breadcrumb';
import Spinner from '../../components/Spinner';

import DeviceForm from './DeviceForm';

const DeviceCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = useCallback((values) => {
    setIsLoading(true);
    createDevice(values)
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  const crumbs = [
    {
      to: '/',
      text: 'Dashboard'
    },
    {
      text: 'Create new device'
    }
  ];

  return <>
    <Breadcrumb crumbs={crumbs} />
    <section>
      {isLoading ? <Spinner /> : null}
      <DeviceForm onSubmit={onSubmit} />
    </section>
  </>;
}

export default DeviceCreate;