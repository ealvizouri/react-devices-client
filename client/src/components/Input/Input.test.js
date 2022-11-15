import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders Input component', () => {
  render(<Input />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
