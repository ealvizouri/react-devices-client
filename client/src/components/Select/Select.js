import { useField } from 'formik';

import FormItem from '../FormItem';

const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return <FormItem label={label} error={meta.touched && meta.error ? meta.error : null}>
    <select {...field} {...props}>
      {options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
    </select>
  </FormItem>
}

export default Select;