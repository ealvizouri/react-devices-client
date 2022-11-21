import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalBase from './ModalBase';

const CustomModal = ({ open, onClose }) => (<>
  <button data-testid="outside-modal">Outside modal</button>
  <ModalBase
    id="test-modal"
    open={open}
    close={onClose}
  >
    <span>Modal content</span>
  </ModalBase>
</>);

test('renders ModalBase component, opens it and closes it', async () => {
  let open = false;
  const onClose = () => open = false;
  const { rerender } = render(<CustomModal open={open} onClose={onClose} />);
  // ModalBase is closed
  let modalContent = screen.queryByText(/modal content/i);
  expect(modalContent).not.toBeInTheDocument();
  // Now it opens it
  open = true;
  rerender(<CustomModal open={open} onClose={onClose} />);
  modalContent = screen.queryByText(/modal content/i);
  expect(modalContent).toBeInTheDocument();
  // Then it clicks outside the modal to close it
  userEvent.click(screen.getByTestId('outside-modal'));
  await waitFor(() => {
    expect(open).toBe(false);
  });
  rerender(<CustomModal open={open} onClose={onClose} />);
  await waitFor(() => {
    modalContent = screen.queryByText(/modal content/i);
    expect(modalContent).not.toBeInTheDocument();
  });
});
