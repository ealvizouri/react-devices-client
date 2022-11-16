import { render, screen } from '@testing-library/react';
import FormItemContainer from './FormItemContainer';

test('renders FormItemContainer component', () => {
  render(<FormItemContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
