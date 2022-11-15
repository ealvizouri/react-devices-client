import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { deviceTypes } from '../../api/Device';

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
    >
      <Form>
        <Input label="System Name" type="text" name="system_name" />
        <Select label="Type" type="text" name="type" options={deviceTypes} />
        <Input label="HDD Capacity" type="number" name="hdd_capacity" />
        <Button type="submit">Save</Button>
        <Button type="button" onClick={() => navigate('/')}>Cancel</Button>
      </Form>
  </Formik>;
};

export default DeviceForm;