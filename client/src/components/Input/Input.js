import React from 'react';
import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return <div>
    <label>
      {label}
      <input {...field} {...props} />
    </label>
    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
  </div>
}

export default Input;