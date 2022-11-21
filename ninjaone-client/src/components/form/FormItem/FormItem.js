import FormItemContainer from './FormItemContainer';
import PropTypes from 'prop-types';

const FormItem = ({ id, label, error, required, children }) => {
  return <FormItemContainer required={required}>
    <label htmlFor={id}>
      <span>{label}</span>
      {children}
    </label>
    {error ? <div className="error">{error}</div> : null}
    </FormItemContainer>;
}

FormItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FormItem;