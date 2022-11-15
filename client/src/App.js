import './App.scss';
import { useApi } from './api/useApi';
import { getDevices, getDevice, upsertDevice, removeDevice } from './api/Device';
// import useDevice from './api/useDevice';

function App() {
  const [devices, devicesError] = useApi(
    getDevices(),
    (res) => res.map(item => ({ ...item, hdd_capacity: parseInt(item.hdd_capacity)}))
  );
  console.log(devices, devicesError);

  // const [device, error] = useApi(getDevice('e8okoP2l5'));
  // console.log(device, error);

  // const [device, deviceUpsertError] = useApi(
  //   upsertDevice(
  //     {
  //       hdd_capacity: "1000",
  //       system_name: "DESKTOP-MARIANO-ALVIZOURI",
  //       type: "WINDOWS_WORKSTATION"
  //     },
  //     "3eLoxOgIth" // id
  //   )
  // );
  // console.log(device, deviceUpsertError);

  const [device, removeDeviceError] = useApi(removeDevice("3eLoxOgIth"));
  console.log(device, removeDeviceError);

  return (
    <div className="App">
      <header className="App-header">
        Ninja Devices Client Test
      </header>
    </div>
  );
}

export default App;
