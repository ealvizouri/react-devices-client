// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import replaceAllInserter from 'string.prototype.replaceall';
import './nock/setupNock';

replaceAllInserter.shim(); // Adds polyfill in case replaceAll string method doesn't exist
