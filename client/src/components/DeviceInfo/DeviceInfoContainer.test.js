import { render, screen } from '@testing-library/react';
import DeviceInfoContainer from './DeviceInfoContainer';

test('renders DeviceInfoContainer component', () => {
  render(<DeviceInfoContainer>MAC-MARIANO</DeviceInfoContainer>);
  const macMarianoElement = screen.getByText(/MAC-MARIANO/i);
  expect(macMarianoElement).toBeInTheDocument();
});
