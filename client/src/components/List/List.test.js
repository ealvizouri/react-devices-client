import { render, screen } from '@testing-library/react';
import List from './List';

test('renders List component', () => {
  render(<List />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
