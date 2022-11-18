import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalConfirm from './ModalConfirm';

const CustomModalConfirm = ({ open, onConfirm, onCancel, content }) => (<>
  <button data-testid="outside-modal">Outside modal</button>
  <ModalConfirm
    id="test-modal"
    open={open}
    onConfirm={onConfirm}
    onCancel={onCancel}
  >
    <span>{content}</span>
  </ModalConfirm>
</>);

test('renders ModalConfirm component, opens it and closes it', async () => {
  let open = false;
  const content = "This is a confirmation modal";
  const close = () => open = false;
  const { rerender } = render(<CustomModalConfirm open={open} onConfirm={close} onCancel={close} content={content} />);
  // ModalConfirm is closed
  let modalContent = screen.queryByText(content);
  expect(modalContent).not.toBeInTheDocument();
  // Now it opens it
  open = true;
  rerender(<CustomModalConfirm open={open} onConfirm={close} onCancel={close} content={content} />);
  modalContent = screen.queryByText(content);
  expect(modalContent).toBeInTheDocument();
  // Then it clicks outside the ModalConfirm to close it
  userEvent.click(screen.getByTestId('outside-modal'));
  await waitFor(() => {
    expect(open).toBe(false);
  });
  rerender(<CustomModalConfirm open={open} onConfirm={close} onCancel={close} content={content} />);
  await waitFor(() => {
    modalContent = screen.queryByText(content);
    expect(modalContent).not.toBeInTheDocument();
  });
});
