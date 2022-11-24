import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalBaseContainer from './ModalBaseContainer';

const ModalBase = ({ id, open, size, sizeExact, close, children }) => {
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
  }, [id, close]);
  return (
    <ModalBaseContainer open={open} size={size} sizeExact={sizeExact}>
      {open ?<div id={id} className="modal">
        {children}
      </div> : null}
    </ModalBaseContainer>
  );
}

ModalBase.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  sizeExact: PropTypes.shape({
    sm: PropTypes.arrayOf(PropTypes.number),
    md: PropTypes.arrayOf(PropTypes.number),
    lg: PropTypes.arrayOf(PropTypes.number),
  }),
  close: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ModalBase;