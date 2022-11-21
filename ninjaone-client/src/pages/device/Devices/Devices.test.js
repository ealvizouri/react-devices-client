import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import { deviceTypes } from '../../../api/Device';
import Devices from './Devices';
import { nockDevicesResponse } from '../../../nock/nockReplies';

test('renders Devices component', async () => {
  const macTypeValue = 'MAC';
  const allType = deviceTypes.find(item => item.value === 'ALL');
  const macType = deviceTypes.find(item => item.value === macTypeValue);
  const nonMacDevice = nockDevicesResponse.find(item => item.type !== macTypeValue);
  render(<BrowserRouter>;
    <Devices />
  </BrowserRouter>);
  // Expects to find a non MAC device listed
  expect(await screen.findByText(nonMacDevice.system_name)).toBeInTheDocument();
  // Finds and opens the device filter dropdown
  const dropdownFilter = await screen.findByTestId(`dropdown-device-filter-by`);
  userEvent.click(dropdownFilter);
  // Finds and clicks the MAC device type filter
  const macTypeButton = await screen.findByTestId(`dropdown-item-${macType.value}`);
  userEvent.click(macTypeButton);
  // Expects NOT to find a non MAC device listed, since is filtered by MAC device
  expect(screen.queryByText(nonMacDevice.system_name)).not.toBeInTheDocument();
  // Opens the device filter dropdown
  userEvent.click(dropdownFilter);
  // Finds and clicks the ALL device type filter
  const allTypeButton = await screen.findByTestId(`dropdown-item-${allType.value}`);
  userEvent.click(allTypeButton);
  // Expects to find X number of devices listed. X = nockDevicesResponse.length
  expect(screen.queryAllByTestId('list-item-default').length).toBe(nockDevicesResponse.length);
});
