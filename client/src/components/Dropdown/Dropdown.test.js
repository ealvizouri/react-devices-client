import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders Dropdown component', () => {
  render(<Dropdown />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
