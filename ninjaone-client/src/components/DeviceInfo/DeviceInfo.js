import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format } from '../../util';
import { deviceTypes } from '../../api/Device';
import DeviceInfoContainer from './DeviceInfoContainer';

const DeviceInfo = ({ systemName, type, hddCapacity }) => {
  const typeName = useMemo(
    () => deviceTypes.find(item => item.value === type)?.text,
    [type]
  );
  return (
    <DeviceInfoContainer>
    <p className="system-name">{systemName}</p>
    <p className="type">{typeName}</p>
    <p className="hdd-capacity">{format.commaSeparated(hddCapacity)} GB</p>
  </DeviceInfoContainer>
  );
}

DeviceInfo.propTypes = {
  systemName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hddCapacity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};

export default DeviceInfo;