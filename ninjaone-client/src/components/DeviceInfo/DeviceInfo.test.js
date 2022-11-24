import { render, screen } from '@testing-library/react';
import DeviceInfo from './DeviceInfo';

test('renders DeviceInfo component', async () => {
  render(<DeviceInfo systemName="MAC-MARIANO" type="MAC" hddCapacity={2048} />);
  await screen.findByText(/MAC-MARIANO/i);
});
