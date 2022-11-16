import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

test('renders Spinner component', () => {
  render(<Spinner />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
