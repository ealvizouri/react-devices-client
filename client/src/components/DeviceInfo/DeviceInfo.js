import styled from 'styled-components';
import { format } from '../../util';
import { deviceTypes } from '../../api/Device';
console.log(deviceTypes);

const DeviceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    &.system-name {
      color: var(--color-text-primary);
    }
    &.type {
      color: var(--color-info);
    }
    &.hdd-capacity {
      color: var(--color-text-secondary);
    }
  }
`;

const DeviceInfo = ({ systemName, type, hddCapacity }) => {
  const typeName = deviceTypes.find(item => item.value === type)?.text;
  return <DeviceInfoContainer>
    <p className="system-name">{systemName}</p>
    <p className="type">{typeName}</p>
    <p className="hdd-capacity">{format.commaSeparated(hddCapacity)} GB</p>
  </DeviceInfoContainer>;
}

export default DeviceInfo;