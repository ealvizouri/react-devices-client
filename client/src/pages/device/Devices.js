import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../components/Dropdown';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import DeviceInfo from '../../components/DeviceInfo';
import { deviceTypes, getDevices, removeDevice } from '../../api/Device';
// import { getDevices, getDevice, upsertDevice, removeDevice } from './api/Device';

const sortFilters = [
  { text: 'System Name', value: 'system_name'},
  { text: 'HDD Capacity', value: 'hdd_capacity'}
]

const Devices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [filterBy, setFilterBy] = useState(deviceTypes[0]);
  const [sortBy, setSortBy] = useState(sortFilters[0]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    getDevices()
      .then(res => setDevices(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let _filteredDevices = filterBy.value !== 'ALL' ? devices.filter(item => item.type === filterBy.value) : devices;
    _filteredDevices.sort((a, b) => {
      if (a[sortBy.value] === b[sortBy.value]) return 0;
      return a[sortBy.value] > b[sortBy.value] ? 1 : -1;
    });
    setFilteredDevices(_filteredDevices);
  }, [filterBy, sortBy, devices]);

  const onActionClick = useCallback((action, deviceId) => {
    // console.log(action, deviceId);
    if (action === 'edit') {
      navigate(`/device/${deviceId}`);
    } else {
      removeDevice(deviceId).then(data => {
        getDevices()
          .then(res => setDevices(res))
          .catch(err => console.log(err));
      }).catch(err => console.log(err));
    }
  }, [navigate]);

  return (
    <div className="devices">
      <Dropdown
        id="device-filter-by"
        label="Device type"
        selected={filterBy}
        items={deviceTypes}
        click={(item) => setFilterBy(item)}
      />
      <Dropdown
        id="device-order-by"
        label="Order By"
        selected={sortBy}
        items={sortFilters}
        click={(item) => setSortBy(item)}
      />
      <List>
        {filteredDevices.map(item => <ListItem
          key={item.id}
          actions={[{
              action: 'edit',
              icon: <FontAwesomeIcon icon={faPencil} />
            },
            {
              action: 'remove',
              icon: <FontAwesomeIcon icon={faTrash} />
            }
          ]}
          onActionClick={(action) => onActionClick(action, item.id)}
        >
          <DeviceInfo systemName={item.system_name} type={item.type} hddCapacity={item.hdd_capacity} />
        </ListItem>)}
      </List>
    </div>
  );
}

export default Devices;
