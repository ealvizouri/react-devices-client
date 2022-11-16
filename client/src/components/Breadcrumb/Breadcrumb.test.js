import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

test('renders Breadcrumb component', () => {
  render(<Breadcrumb />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
