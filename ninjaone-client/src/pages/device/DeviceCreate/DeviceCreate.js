import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDevice } from '../../../api/Device';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import Spinner from '../../../components/ui/Spinner';
import DeviceForm from '../DeviceForm';

const crumbs = [
  {
    to: '/',
    text: 'Dashboard'
  },
  {
    text: 'Create new device'
  }
];

const DeviceCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = useCallback(async (values) => {
    setIsLoading(true);
    values.hdd_capacity = values.hdd_capacity.replaceAll(',', '');
    try {
      await createDevice(values);
      setIsLoading(false);
      navigate('/');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [navigate]);

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <section>
        {isLoading && <Spinner />}
        <DeviceForm onSubmit={onSubmit} />
      </section>
    </>
  );
}

export default DeviceCreate;