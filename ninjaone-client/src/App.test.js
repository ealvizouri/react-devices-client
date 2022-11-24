import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', async () => {
  render(<App />);
  await screen.findByText(/devices/i);
});
