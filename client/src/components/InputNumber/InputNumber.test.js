import { render, screen } from '@testing-library/react';
import InputNumber from './InputNumber';

test('renders InputNumber component', () => {
  render(<InputNumber />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
