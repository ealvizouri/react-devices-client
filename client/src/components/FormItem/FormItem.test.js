import { render, screen } from '@testing-library/react';
import FormItem from './FormItem';

const setup = ({ label, error = null }) => {
  return <FormItem
    label={label}
    error={error}
  >
    <input
      type="text"
      name="address"
      value="52 street"
      onChange={() => {}}
    />
  </FormItem>;
}

test('renders FormItem component and updates value', () => {
  const label = 'address';
  const error = 'Field required';
  const { rerender } = render(setup({ label }));

  const labelElement = screen.getByText(label);
  expect(labelElement).toBeInTheDocument();

  rerender(setup({ label, error }));

  const errorElement = screen.getByText(error);
  expect(errorElement).toBeInTheDocument();
  expect(errorElement).toHaveClass('error');
});
