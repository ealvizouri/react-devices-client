import { render, screen } from '@testing-library/react';
import List from '../List';
import ListItem from './ListItem';

test('renders 2 ListItem components', async () => {
  render(<List>
    <ListItem label="first-item">
      First Item
    </ListItem>
    <ListItem label="second-item">
      Second Item
    </ListItem>
  </List>);
  await screen.findByText(/First Item/i);
  await screen.findByText(/Second Item/i);
});
