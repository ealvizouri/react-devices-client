import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik';
import InputNumber from './InputNumber';
import { commaSeparated } from '../../util/format';

const UserForm = ({ handleSubmit }) => {
  return <Formik
    initialValues={{
      hddCapacity: ''
    }}
    onSubmit={(data) => handleSubmit(data)}
  >
    <Form>
      <InputNumber id="hddCapacity" label="HDD Capacity" name="hddCapacity" allowNegative={false} thousandSeparator="," />
      <button type="submit" name="submit">Submit</button>
    </Form>
  </Formik>;
}

test('renders InputNumber component and updates its value', async () => {
  const handleSubmit = jest.fn();
  const hddCapacity = '120300';
  render(<UserForm handleSubmit={handleSubmit} />);
  userEvent.type(screen.getByLabelText("hddCapacity"), hddCapacity);
  userEvent.click(screen.getByRole('button', {name: /submit/i}))
  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({ hddCapacity: commaSeparated(hddCapacity) });
  });
});
