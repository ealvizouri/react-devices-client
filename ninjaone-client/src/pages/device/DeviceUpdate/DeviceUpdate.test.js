import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import DeviceUpdate from './DeviceUpdate';

test('renders DeviceUpdate page component', async () => {
  render(<BrowserRouter>;
    <DeviceUpdate />
  </BrowserRouter>);
  expect(await screen.findByText("Dashboard")).toBeInTheDocument();
  expect(await screen.findByText("Update device")).toBeInTheDocument();
  expect(await screen.findByLabelText("system_name")).toBeInTheDocument();
  expect(await screen.findByLabelText("type")).toBeInTheDocument();
  expect(await screen.findByLabelText("hdd_capacity")).toBeInTheDocument();
});

