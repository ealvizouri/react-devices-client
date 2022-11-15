import { render, screen } from '@testing-library/react';
import Select from './Select';

test('renders Select component', () => {
  render(<Select />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
