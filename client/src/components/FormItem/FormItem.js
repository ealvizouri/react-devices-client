import FormItemContainer from './FormItemContainer';

const FormItem = ({ label, error, required, children }) => {
  return <FormItemContainer required>
    <label>
      <span>{label}</span>
      {children}
    </label>
    {error ? <div className="error">{error}</div> : null}
    </FormItemContainer>;
}

export default FormItem;