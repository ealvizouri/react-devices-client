import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFecth from '../../../api/useFetch';
import { updateDevice } from '../../../api/Device';
import Spinner from '../../../components/ui/Spinner';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import DeviceForm from '../DeviceForm';

const DeviceUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: device, loading: deviceLoading } = useFecth(`devices/${id}`);
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
      {isLoading || deviceLoading ? <Spinner /> : null}
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