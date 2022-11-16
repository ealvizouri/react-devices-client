import ModalBase from '../ModalBase';
import ModalConfirmContainer from './ModalConfirmContainer';
import Button from '../../Button';

const ModalConfirm = ({ id, onConfirm, onCancel, open, size = 'sm', sizeExact, children }) => {
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

export default ModalConfirm;