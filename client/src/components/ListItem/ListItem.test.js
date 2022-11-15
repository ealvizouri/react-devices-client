import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders ListItem component', () => {
  render(<ListItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
