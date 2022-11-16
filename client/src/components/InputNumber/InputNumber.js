import React from 'react';
import { NumericFormat } from 'react-number-format';

import { useField } from 'formik';

import FormItem from '../FormItem';

const InputNumber = ({ label, name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return <FormItem label={label} error={meta.touched && meta.error ? meta.error : null}>
      <NumericFormat {...field} {...props} />
  </FormItem>;
}

export default InputNumber;