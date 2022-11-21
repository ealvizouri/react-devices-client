import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import DeviceFormContainer from './DeviceFormContainer';
import Input from '../../../components/form/Input';
import InputNumber from '../../../components/form/InputNumber';
import Select from '../../../components/form/Select';
import Button from '../../../components/ui/Button';
import { deviceTypes } from '../../../api/Device';
import deviceValidationSchema from './deviceValidationSchema';

const DeviceForm = ({
  initialValues,
  onSubmit
}) => {
  const navigate = useNavigate();
  return <DeviceFormContainer>
      <Formik
        initialValues={{
          system_name: '',
          type: '',
          hdd_capacity: '',
          ...initialValues
        }}
        onSubmit={onSubmit}
        validationSchema={deviceValidationSchema}
      >
        {props => {
          return <Form>
          <Input id="system_name" label="System Name" type="text" name="system_name" />
          <Select id="type" label="Type" type="text" name="type" options={deviceTypes} />
          <InputNumber id="hdd_capacity" label="HDD Capacity" name="hdd_capacity" allowNegative={false} thousandSeparator="," />
          <div className="buttons">
            <Button type="submit" disabled={!props.isValid || !props.dirty}>Save</Button>
            <Button type="button" variant="danger" onClick={() => navigate('/')}>Cancel</Button>
          </div>
        </Form>
        }}
    </Formik>
  </DeviceFormContainer>;
};

DeviceForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default DeviceForm;