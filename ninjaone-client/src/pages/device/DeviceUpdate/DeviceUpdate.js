import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFecth from '../../../api/useFetch';
import { updateDevice } from '../../../api/Device';
import Spinner from '../../../components/ui/Spinner';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import DeviceForm from '../DeviceForm';

const crumbs = [
  {
    to: '/',
    text: 'Dashboard'
  },
  {
    text: 'Update device'
  }
];

const DeviceUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: device, loading: deviceLoading } = useFecth(`devices/${id}`);

  const onSubmit = useCallback(async (values) => {
    setIsLoading(true);
    values.hdd_capacity = values.hdd_capacity.replaceAll(',', '');
    const { err } = await updateDevice(values, id);
    setIsLoading(false);
    if (err) {
      console.log(err);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  return (<>
    <Breadcrumb crumbs={crumbs} />
    <section>
      {(isLoading || deviceLoading) && <Spinner />}
      {device ? <DeviceForm
        initialValues={{
          system_name: device.system_name,
          type: device.type,
          hdd_capacity: device.hdd_capacity
        }}
        onSubmit={onSubmit}
      /> : null}
    </section>
  </>);
}

export default DeviceUpdate;