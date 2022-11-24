import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import NotFound from './NotFound';

test('renders NotFound page component', async () => {
  render(<BrowserRouter>;
    <NotFound />
  </BrowserRouter>);
  await screen.findByText("404");
});