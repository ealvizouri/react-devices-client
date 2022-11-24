import { render, screen } from '@testing-library/react';
import FormItem from './FormItem';

const setup = ({ label, error = null }) => {
  return <FormItem
    id={label}
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

test('renders FormItem component and updates value', async () => {
  const label = 'address';
  const error = 'Field required';
  const { rerender } = render(setup({ label }));

  await screen.findByText(label);

  rerender(setup({ label, error }));

  const errorElement = await screen.findByText(error);
  expect(errorElement).toHaveClass('error');
});
