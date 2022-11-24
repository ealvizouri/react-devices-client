import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import DeviceUpdate from './DeviceUpdate';

test('renders DeviceUpdate page component', async () => {
  render(<BrowserRouter>;
    <DeviceUpdate />
  </BrowserRouter>);
  await screen.findByText("Dashboard");
  await screen.findByText("Update device");
  await screen.findByLabelText("system_name");
  await screen.findByLabelText("type");
  await screen.findByLabelText("hdd_capacity");
});

