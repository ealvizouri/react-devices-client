import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import { deviceTypes } from '../../../api/Device';
import DeviceForm from '../DeviceForm';

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
  const inputSystemName = screen.getByLabelText('system_name');
  expect(inputSystemName).toBeInTheDocument();

  const selectType = screen.getByLabelText('type');
  expect(selectType).toBeInTheDocument();
  expect(selectType.value).toBe(firstType);

  const inputHddCapacity = screen.getByLabelText('hdd_capacity');
  expect(inputHddCapacity).toBeInTheDocument();

  // Update form data
  fireEvent.change(selectType, {
    target: { value: expectedSubmitValues.type }
  });
  userEvent.type(inputSystemName, expectedSubmitValues.system_name);
  userEvent.type(inputHddCapacity, expectedSubmitValues.hdd_capacity.replace(',', ''));

  await waitFor(() => {
    expect(screen.getByDisplayValue(expectedSubmitValues.system_name)).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByDisplayValue(expectedSubmitValues.hdd_capacity)).toBeInTheDocument();
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
  
  const saveButton = screen.getByRole('button', { name: /save/i });
  expect(saveButton).toBeInTheDocument();
  userEvent.click(saveButton);

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith(expectedSubmitValues);
  });
});