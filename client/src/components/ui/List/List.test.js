import { render, screen } from '@testing-library/react';
import List from './List';

test('renders List component', () => {
  render(<List>
    <li>
      First Item
    </li>
    <li>
      Second Item
    </li>
  </List>);
  expect(screen.getByText(/First Item/i)).toBeInTheDocument();
  expect(screen.getByText(/Second Item/i)).toBeInTheDocument();
});
