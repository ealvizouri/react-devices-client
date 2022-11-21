import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useField } from 'formik';
import FormItem from '../FormItem';

const InputNumber = ({ id, label, name, required, ...props }) => {
  const [field, meta] = useField(name);
  return <FormItem
    id={id}
    label={label}
    error={meta.touched && meta.error ? meta.error : null}
    required={required}
  >
    <NumericFormat id={id} aria-label={id} {...field} {...props} />
  </FormItem>;
}

export default InputNumber;