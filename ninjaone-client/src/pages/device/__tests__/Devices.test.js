import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import {BrowserRouter} from 'react-router-dom';
import { deviceTypes } from '../../../api/Device';
import Devices from '../Devices';

test('renders Devices component', async () => {
  const dropdownFilterId = 'device-filter-by';
  const dropdownOrderId = 'device-order-by';
  // const firstType = deviceTypes.find(item => item.value === 'ALL').value;
  const handleSubmit = jest.fn();
  // console.log(nock.activeMocks());


  render(<BrowserRouter>;
    <Devices />
  </BrowserRouter>);
  const dropdownFilter = await screen.findByTestId(`dropdown-${dropdownFilterId}`);
  const dropdownOrder = await screen.findByTestId(`dropdown-${dropdownOrderId}`);
  userEvent.click(dropdownFilter);

  expect(await screen.findByText('ARMANDO-SERVER')).toBeInTheDocument()
});