import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik';
import Select from './Select';
import { deviceTypes } from '../../../api/Device';

const UserForm = ({ initialValues, handleSubmit }) => {
  return <Formik
    initialValues={initialValues}
    onSubmit={(data) => handleSubmit(data)}
  >
    <Form>
      <Select id="type" label="Type" type="text" name="type" options={deviceTypes} />
      <button type="submit" name="submit">Submit</button>
    </Form>
  </Formik>;
}

test('renders Select component and updates its value', async () => {
  const handleSubmit = jest.fn();
  const firstType = deviceTypes.find(item => item.value === 'ALL');
  const newType = deviceTypes[deviceTypes.length - 1];
  render(<UserForm
    initialValues={{
      type: firstType.value
    }}
    handleSubmit={handleSubmit}
  />);
  const selectType = screen.getByLabelText("type");
  expect(selectType.value).toBe(firstType.value);
  fireEvent.change(selectType, {
    target: { value: newType.value },
  });
  userEvent.click(screen.getByRole('button', {name: /submit/i}))
  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({ type: newType.value });
  });
});
