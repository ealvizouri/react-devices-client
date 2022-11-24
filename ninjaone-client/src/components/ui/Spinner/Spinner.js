import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SpinnerContainer from './SpinnerContainer';

const colors = {
  primary: '#3BA1C4',
  secondary: '#8C8C8C',
  success: '#89C664',
  danger: '#DD3900',
  warning: '#F3AF33',
  info: '#25677D'
}

const Spinner = ({variant = 'primary', ...props}) => (
  <SpinnerContainer>
    <FontAwesomeIcon icon={faSpinner} color={colors[variant] ?? colors.clean} {...props} />
  </SpinnerContainer>
);

Spinner.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info'
  ])
};

export default Spinner;