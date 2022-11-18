import { useField } from 'formik';

import FormItem from '../FormItem';

const Select = ({ id, label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return <FormItem id={id} label={label} error={meta.touched && meta.error ? meta.error : null}>
    <select id={id} aria-label={id} {...field} {...props}>
      {options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
    </select>
  </FormItem>
}

export default Select;