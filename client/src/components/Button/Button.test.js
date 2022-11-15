import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  render(<Button />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
