import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SpinnerContainer from './SpinnerContainer';

const Spinner = (props) => (<SpinnerContainer>
  <FontAwesomeIcon icon={faSpinner} {...props} />
</SpinnerContainer>);

export default Spinner;