// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import replaceAllInserter from 'string.prototype.replaceall';
import nock from 'nock';

replaceAllInserter.shim(); // Adds polyfill in case replaceAll string method doesn't exist

const devicesResponse = [
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
  }
];

nock('http://localhost:3000')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true' 
    })
    .persist()
    .get(/devices\/?.*/)
    .reply(200, devicesResponse)
    .get(/devices\/[a-zA-Z0-9]+/)
    .reply(200, devicesResponse[0]);