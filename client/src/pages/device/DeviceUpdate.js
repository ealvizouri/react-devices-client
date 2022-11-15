import { Link, useParams } from 'react-router-dom';

import { useApi } from '../../api/useApi';
import { getDevice, upsertDevice } from '../../api/Device';

import DeviceForm from './DeviceForm';
// import { getDevices, getDevice, upsertDevice, removeDevice } from './api/Device';

const DeviceUpdate = () => {
  const { id } = useParams();
  const [device, error] = useApi(`devices/${id}`, (o) => o, null);
  console.log(device);

  const onSubmit = (values) => {
    console.log(values);
    upsertDevice(values, id)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
      .finally(() => console.log('finally'));
  }

  return <div>
    <Link to={'/'}>Return to Dashboard</Link><br />
    Device Page
    {device ? <DeviceForm
      initialValues={{
        system_name: device.system_name,
        type: device.type,
        hdd_capacity: device.hdd_capacity
      }}
      onSubmit={onSubmit}
    /> : null}
  </div>;
}

export default DeviceUpdate;