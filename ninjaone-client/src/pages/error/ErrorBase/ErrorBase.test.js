import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import ErrorBase from './ErrorBase';

test('renders ErrorBase page component', () => {
  render(<BrowserRouter>;
    <ErrorBase code={404} title="Not Found" />
  </BrowserRouter>);
  expect(screen.getByText("404")).toBeInTheDocument();
});