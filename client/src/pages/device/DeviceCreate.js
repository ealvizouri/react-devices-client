import { Link } from 'react-router-dom';
import { upsertDevice } from '../../api/Device';

import DeviceForm from './DeviceForm';
// import { getDevices, getDevice, upsertDevice, removeDevice } from './api/Device';

const DeviceCreate = () => {

  const onSubmit = (values) => {
    upsertDevice(values);
  }

  return <div>
    <Link to={'/'}>Return to Dashboard</Link><br />
    Device Page
    <DeviceForm onSubmit={onSubmit} />
  </div>;
}

export default DeviceCreate;