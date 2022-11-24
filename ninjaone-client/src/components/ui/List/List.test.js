import { render, screen } from '@testing-library/react';
import List from './List';

test('renders List component', async () => {
  render(<List>
    <li>
      First Item
    </li>
    <li>
      Second Item
    </li>
  </List>);
  await screen.findByText(/First Item/i);
  await screen.findByText(/Second Item/i);
});
