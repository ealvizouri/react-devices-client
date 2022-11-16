import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders Modal component', () => {
  render(<Modal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
