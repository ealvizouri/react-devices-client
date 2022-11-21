import { render, screen } from '@testing-library/react';
import List from '../List';
import ListItem from './ListItem';

test('renders 2 ListItem components', () => {
  render(<List>
    <ListItem label="first-item">
      First Item
    </ListItem>
    <ListItem label="second-item">
      Second Item
    </ListItem>
  </List>);
  expect(screen.getByText(/First Item/i)).toBeInTheDocument();
  expect(screen.getByText(/Second Item/i)).toBeInTheDocument();
});
