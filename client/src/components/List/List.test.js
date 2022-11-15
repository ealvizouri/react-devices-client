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
  const firstItemText = screen.getByText(/First Item/i);
  expect(firstItemText).not.toBeInTheDocument();
});
