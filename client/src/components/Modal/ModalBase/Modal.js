import { useEffect } from 'react';
import ModalContainer from './ModalContainer';

const Modal = ({ id, open, size, sizeExact, children, close }) => {
  useEffect(() => {
    const findClosest = (e) => {
      if (!e.target.closest(`#${id}, button[data-modal-button]`)) {
        close();
      }
    }
    
    document.addEventListener('click', findClosest);
    return () => {
      document.removeEventListener('click', findClosest);
    }
  }, []);
  return <ModalContainer open={open} size={size} sizeExact={sizeExact}>
    {open ?<div id={id} className="modal">
      {children}
    </div> : null}
  </ModalContainer>;
}

export default Modal;