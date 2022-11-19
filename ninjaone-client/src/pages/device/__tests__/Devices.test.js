import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import nock from 'nock';
import {BrowserRouter} from 'react-router-dom';
import { deviceTypes } from '../../../api/Device';
import Devices from '../Devices';

const devices = [
  {
    id: "e8okoP2l5",
    system_name: "DESKTOP-SMART",
    type: "WINDOWS_WORKSTATION",
    hdd_capacity: "10"
  },
  {
    id: "Th3ngERn9",
    system_name: "MAC-LEADER",
    type: "MAC",
    hdd_capacity: "2048"
  },
  {
    id: "Q1JdBnE12",
    system_name: "ARMANDO-SERVER",
    type: "WINDOWS_SERVER",
    hdd_capacity: "256"
  },
  {
    id: "e7ocoQ2n3",
    system_name: "MIGUEL-PC",
    type: "WINDOWS_WORKSTATION",
    hdd_capacity: "500"
  },
  {
    id: "Jj5bn3G2H",
    system_name: "FIRST-MAC",
    type: "MAC",
    hdd_capacity: "180"
  },
  {
    id: "GT556QGnk",
    system_name: "GOOD-MAC",
    type: "MAC",
    hdd_capacity: "500"
  },
  {
    id: "R5LdSnQhY",
    system_name: "SERVER-ONE",
    type: "WINDOWS_SERVER",
    hdd_capacity: "50"
  },
  {
    id: "ab1coL2n9",
    system_name: "GILBERT-COMPUTER",
    type: "WINDOWS_WORKSTATION",
    hdd_capacity: "750"
  },
  {
    id: "LM5dBnJ2G",
    system_name: "MOON-SMART",
    type: "WINDOWS_SERVER",
    hdd_capacity: "256"
  },
  {
    id: "Up5bcEQp4",
    system_name: "JULIO-MAC-LOCAL",
    type: "MAC",
    hdd_capacity: "512"
  }
];

test('renders Devices component', async () => {
  // const firstType = deviceTypes.find(item => item.value === 'ALL').value;
  const handleSubmit = jest.fn();
  nock('http://localhost:3000')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true' 
    })
    // .persist()
    .get(/.*/)
    // .get('/devices/')
    .reply(200, devices);
  render(<BrowserRouter>;
    <Devices />
  </BrowserRouter>);
  expect(await screen.findByText('ARMANDO-SERVER')).toBeInTheDocument()
});