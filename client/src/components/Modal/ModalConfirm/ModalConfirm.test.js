import { render, screen } from '@testing-library/react';
import ModalConfirm from './ModalConfirm';

test('renders ModalConfirm component', () => {
  render(<ModalConfirm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
