import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const ninjaOneText = screen.getByText(/devices/i);
  expect(ninjaOneText).toBeInTheDocument();
});
