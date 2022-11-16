import React from 'react';
import { useField } from 'formik';

import FormItem from '../FormItem';

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return <FormItem label={label} error={meta.touched && meta.error ? meta.error : null}>
      <input {...field} {...props} />
  </FormItem>;
}

export default Input;