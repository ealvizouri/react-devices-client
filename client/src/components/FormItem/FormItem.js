import FormItemContainer from './FormItemContainer';

const FormItem = ({ id, label, error, required, children }) => {
  return <FormItemContainer required>
    <label htmlFor={id}>
      <span>{label}</span>
      {children}
    </label>
    {error ? <div className="error">{error}</div> : null}
    </FormItemContainer>;
}

export default FormItem;