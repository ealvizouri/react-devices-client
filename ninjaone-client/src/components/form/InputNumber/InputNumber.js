import React from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import { useField } from 'formik';
import FormItem from '../FormItem';

const InputNumber = ({ id, label, required, ...props }) => {
  const [field, meta] = useField(props);
  return <FormItem
    id={id}
    label={label}
    error={meta.touched && meta.error ? meta.error : null}
    required={required}
  >
    <NumericFormat id={id} aria-label={id} {...field} {...props} />
  </FormItem>;
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default InputNumber;