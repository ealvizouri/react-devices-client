import PropTypes from 'prop-types';
import { useField } from 'formik';
import FormItem from '../FormItem';

const Select = ({ id, label, options, required, ...props }) => {
  const [field, meta] = useField(props);
  return <FormItem
    id={id}
    label={label}
    error={meta.touched && meta.error ? meta.error : null}
    required={required}
  >
    <select
      id={id}
      aria-label={id}
      {...field}
      {...props}
    >
      {options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
    </select>
  </FormItem>
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })).isRequired,
  required: PropTypes.bool
};

export default Select;