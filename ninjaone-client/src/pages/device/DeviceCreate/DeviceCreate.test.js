import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import DeviceCreate from './DeviceCreate';

test('renders DeviceCreate page component', () => {
  render(<BrowserRouter>;
    <DeviceCreate />
  </BrowserRouter>);
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Create new device")).toBeInTheDocument();
  expect(screen.getByLabelText("system_name")).toBeInTheDocument();
  expect(screen.getByLabelText("type")).toBeInTheDocument();
  expect(screen.getByLabelText("hdd_capacity")).toBeInTheDocument();
});

