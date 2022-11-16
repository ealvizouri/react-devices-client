import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import InputNumber from '../../components/InputNumber';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { deviceTypes } from '../../api/Device';
import deviceValidationSchema from './deviceValidationSchema';

const DeviceForm = ({
  initialValues,
  onSubmit
}) => {
  const navigate = useNavigate();
  return <Formik
      initialValues={initialValues ?? {
        system_name: '',
        type: '',
        hdd_capacity: ''
      }}
      onSubmit={onSubmit}
      validationSchema={deviceValidationSchema}
    >
      {props => {
        // console.log('ALV', props);
        return <Form>
        <Input label="System Name" type="text" name="system_name" />
        <Select label="Type" type="text" name="type" options={deviceTypes} />
        <InputNumber label="HDD Capacity" name="hdd_capacity" allowNegative={false} thousandSeparator="," />
        <Button type="submit" disabled={!props.isValid || props.isValidating || !props.dirty}>Save</Button>
        <Button type="button" variant="secondary" onClick={() => navigate('/')}>Cancel</Button>
      </Form>
      }}
  </Formik>;
};

export default DeviceForm;