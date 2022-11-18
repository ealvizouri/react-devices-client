import { render, screen } from '@testing-library/react';
import DeviceInfo from './DeviceInfo';

test('renders DeviceInfo component', () => {
  render(<DeviceInfo systemName="MAC-MARIANO" type="MAC" hddCapacity={2048} />);
  const macMarianoElement = screen.getByText(/MAC-MARIANO/i);
  expect(macMarianoElement).toBeInTheDocument();
});
