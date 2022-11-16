import { render, screen } from '@testing-library/react';
import DropdownContainer from './DropdownContainer';

test('renders DropdownContainer component', () => {
  render(<DropdownContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
