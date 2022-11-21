import PropTypes from 'prop-types';
import ModalBase from '../ModalBase';
import ModalConfirmContainer from './ModalConfirmContainer';
import Button from '../../Button';

const ModalConfirm = ({ id, open, onConfirm, onCancel, size = 'sm', sizeExact, children }) => {
  return <ModalBase id={id} open={open} size={size} sizeExact={sizeExact} close={onCancel}>
    <ModalConfirmContainer>
      <div className="content">
      {children}
      </div>
      <div className="buttons">
        <Button variant="danger" onClick={onConfirm}>Confirm</Button>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
      </div>
    </ModalConfirmContainer>
  </ModalBase>
}

ModalConfirm.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ModalConfirm;