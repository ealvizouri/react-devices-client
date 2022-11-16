import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../api/useApi';
import { updateDevice } from '../../api/Device';
import Spinner from '../../components/Spinner';
import Breadcrumb from '../../components/Breadcrumb';
import DeviceForm from './DeviceForm';

const DeviceUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [device] = useApi(`devices/${id}`, (o) => o, null);
  const crumbs = [
    {
      to: '/',
      text: 'Dashboard'
    },
    {
      text: 'Update device'
    }
  ];

  const onSubmit = useCallback((values) => {
    setIsLoading(true);
    values.hdd_capacity = values.hdd_capacity.replaceAll(',', '');
    updateDevice(values, id)
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return <>
    <Breadcrumb crumbs={crumbs} />
    <section>
      {isLoading ? <Spinner /> : null}
      {device ? <DeviceForm
        initialValues={{
          system_name: device.system_name,
          type: device.type,
          hdd_capacity: device.hdd_capacity
        }}
        onSubmit={onSubmit}
      /> : null}
    </section>
  </>;
}

export default DeviceUpdate;