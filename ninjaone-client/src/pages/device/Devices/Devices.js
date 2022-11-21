import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import DevicesContainer from './DevicesContainer';
import { ModalConfirm } from '../../../components/ui/Modal';
import Spinner from '../../../components/ui/Spinner';
import Button from '../../../components/ui/Button';
import Dropdown from '../../../components/ui/Dropdown';
import List from '../../../components/ui/List';
import ListItem from '../../../components/ui/ListItem';
import DeviceInfo from '../../../components/DeviceInfo';
import { deviceTypes, getDevices, deleteDevice } from '../../../api/Device';
import useFetch from '../../../api/useFetch';

const sortFilters = [
  { text: 'System Name', value: 'system_name'},
  { text: 'HDD Capacity', value: 'hdd_capacity'}
]

const Devices = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const { data: devices, loading } = useFetch(`devices?r=${refresh}`);
  const [deviceIdToRemove, setDeviceIdToRemove] = useState(null);
  const [filterBy, setFilterBy] = useState(deviceTypes[0]);
  const [sortBy, setSortBy] = useState(sortFilters[0]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    let _filteredDevices = filterBy.value !== 'ALL' ? devices.filter(item => item.type === filterBy.value) : devices;
    if (_filteredDevices) {
      _filteredDevices.sort((a, b) => {
        if (a[sortBy.value] === b[sortBy.value]) return 0;
        return a[sortBy.value] > b[sortBy.value] ? 1 : -1;
      });
      setFilteredDevices(_filteredDevices);
    }
  }, [filterBy, sortBy, devices]);

  const removeDevice = useCallback(() => {
    deleteDevice(deviceIdToRemove).then(data => {
      getDevices()
        .then(res => {
          setRefresh(r => r + 1);
          setDeviceIdToRemove(null);
        })
        .catch(err => {
          console.log(err)
          setDeviceIdToRemove(null);
        });
    }).catch(err => console.log(err));
  }, [deviceIdToRemove]);
  return (<section>
    {loading ? <Spinner /> : null}
    <ModalConfirm
      id={`remove-modal-${deviceIdToRemove}`}
      open={deviceIdToRemove !== null}
      onConfirm={removeDevice}
      onCancel={() => setDeviceIdToRemove(null)}
      sizeExact={{
        md: [22, 11],
        lg: [33, 22],
      }}
    >
      {deviceIdToRemove ?
      `You are about to remove ${filteredDevices.find(item => item.id === deviceIdToRemove)?.system_name} device`
      : null}
    </ModalConfirm>
    <DevicesContainer>
      <div className="menu">
        <div className="controls">
          <Dropdown
            id="device-filter-by"
            label="Device type"
            defaultValue={filterBy}
            items={deviceTypes}
            click={(item) => setFilterBy(item)}
          />
          <Dropdown
            id="device-order-by"
            label="Order By"
            defaultValue={sortBy}
            items={sortFilters}
            click={(item) => setSortBy(item)}
          />
        </div>
        <Button id="new-device" variant="success" onClick={() => navigate('/device')}>
          <span>New</span>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>

      <List id="list-devices">
        {filteredDevices.map(item => <ListItem
          key={item.id}
          label={item.system_name}
          actions={[{
              action: 'edit',
              icon: <FontAwesomeIcon icon={faPencil} />,
              onClick: () => navigate(`/device/${item.id}`)
            },
            {
              action: 'remove',
              icon: <FontAwesomeIcon icon={faTrash} />,
              onClick: () => setDeviceIdToRemove(item.id),
              'data-modal-button': item.id,
              variant: 'danger'
            }
          ]}
        >
          <DeviceInfo systemName={item.system_name} type={item.type} hddCapacity={item.hdd_capacity} />
        </ListItem>)}
      </List>
    </DevicesContainer>
  </section>);
}

export default Devices;