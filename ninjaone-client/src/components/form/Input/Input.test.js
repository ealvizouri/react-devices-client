import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik';
import Input from './Input';

const UserForm = ({ handleSubmit }) => {
  return <Formik
    initialValues={{
      firstName: ''
    }}
    onSubmit={(data) => handleSubmit(data)}
  >
    <Form>
      <Input id="firstName" label="First Name" type="text" name="firstName" />
      <button type="submit" name="submit">Submit</button>
    </Form>
  </Formik>;
}

test('renders Input component and updates its value', async () => {
  const handleSubmit = jest.fn();
  const firstName = 'Mariano';
  render(<UserForm handleSubmit={handleSubmit} />);
  userEvent.type(screen.getByLabelText("firstName"), firstName);
  userEvent.click(screen.getByRole('button', {name: /submit/i}))
  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({ firstName });
  });
});
