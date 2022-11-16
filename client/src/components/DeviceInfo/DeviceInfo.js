import { format } from '../../util';
import { deviceTypes } from '../../api/Device';
import DeviceInfoContainer from './DeviceInfoContainer';

const DeviceInfo = ({ systemName, type, hddCapacity }) => {
  const typeName = deviceTypes.find(item => item.value === type)?.text;
  return <DeviceInfoContainer>
    <p className="system-name">{systemName}</p>
    <p className="type">{typeName}</p>
    <p className="hdd-capacity">{format.commaSeparated(hddCapacity)} GB</p>
  </DeviceInfoContainer>;
}

export default DeviceInfo;