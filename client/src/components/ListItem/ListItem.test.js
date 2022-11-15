import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders ListItem component', () => {
  render(<ul>
    <ListItem>
      First Item
    </ListItem>
    <ListItem>
      Second Item
    </ListItem>
  </ul>);
  const firstItemText = screen.getByText(/First Item/i);
  expect(firstItemText).not.toBeInTheDocument();
});
