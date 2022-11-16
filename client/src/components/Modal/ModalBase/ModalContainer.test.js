import { render, screen } from '@testing-library/react';
import ModalContainer from './ModalContainer';

test('renders ModalContainer component', () => {
  render(<ModalContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
