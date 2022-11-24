import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import DeviceCreate from './DeviceCreate';

test('renders DeviceCreate page component', async () => {
  render(<BrowserRouter>;
    <DeviceCreate />
  </BrowserRouter>);
  await screen.findByText("Dashboard");
  await screen.findByText("Create new device");
  await screen.findByLabelText("system_name");
  await screen.findByLabelText("type");
  await screen.findByLabelText("hdd_capacity");
});

