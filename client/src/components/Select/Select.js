import { useField } from 'formik';

const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return <div>
    <label>
      {label}
      <select {...field} {...props}>
        {options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
      </select>
    </label>
    {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
  </div>
}

export default Select;