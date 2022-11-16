import { render, screen } from '@testing-library/react';
import FormItem from './FormItem';

test('renders FormItem component', () => {
  render(<FormItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
