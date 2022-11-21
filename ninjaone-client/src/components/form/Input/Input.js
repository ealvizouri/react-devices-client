import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import FormItem from '../FormItem';

const Input = ({ id, label, required, ...props }) => {
  const [field, meta] = useField(props);
  return <FormItem
    id={id}
    label={label}
    error={meta.touched && meta.error ? meta.error : null}
    required={required}
  >
    <input id={id} aria-label={id} {...field} {...props} />
  </FormItem>;
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Input;