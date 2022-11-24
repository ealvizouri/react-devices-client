import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import { deviceTypes } from '../../../api/Device';
import DeviceForm from './DeviceForm';

test('renders DeviceForm component', async () => {
  const firstType = deviceTypes.find(item => item.value === 'ALL').value;
  const handleSubmit = jest.fn();
  const expectedSubmitValues = {
    system_name: 'MARIANO-MAC',
    type: deviceTypes[deviceTypes.length - 1].value,
    hdd_capacity: '1,200',
  };
  render(<BrowserRouter>;
    <DeviceForm
      initialValues={{
        type: firstType
      }}
      onSubmit={(data) => handleSubmit(data)}
    />
  </BrowserRouter>);
  const inputSystemName = await screen.findByLabelText('system_name');

  const selectType = await screen.findByLabelText('type');
  expect(selectType.value).toBe(firstType);

  const inputHddCapacity = await screen.findByLabelText('hdd_capacity');

  // Update form data
  fireEvent.change(selectType, {
    target: { value: expectedSubmitValues.type }
  });
  userEvent.type(inputSystemName, expectedSubmitValues.system_name);
  userEvent.type(inputHddCapacity, expectedSubmitValues.hdd_capacity.replace(',', ''));

  await waitFor(async () => {
    await screen.findByDisplayValue(expectedSubmitValues.system_name)
  });
  await waitFor(async () => {
    await screen.findByDisplayValue(expectedSubmitValues.hdd_capacity);
  });
  await waitFor(() => {
    expect(selectType.value).toBe(expectedSubmitValues.type);
  });

  await waitFor(
    () => expect(screen.getByRole('button', { name: /save/i })).not.toBeDisabled(),
    {
      timeout: 1000,
    }
  );
  
  const saveButton = await screen.findByRole('button', { name: /save/i });
  userEvent.click(saveButton);

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith(expectedSubmitValues);
  });
});