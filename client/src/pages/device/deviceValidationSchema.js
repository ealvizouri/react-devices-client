import * as Yup from 'yup';
import { deviceTypes } from '../../api/Device';

const allowedDeviceTypes = deviceTypes.filter(item => item.value !== 'ALL');
const deviceValidationSchema = Yup.object().shape({
  system_name: Yup.string().matches(/^[A-Z]+([A-Z+][-]?[A-Z]+)*[A-Z]+$/, 'Wrong format, it must be: UPPERCASE-NO-SPACES').min(5, 'Too Short!').max(50, 'Too Long!').required(),
  type: Yup.string().oneOf(allowedDeviceTypes.map(type => type.value), `Select only one of ${allowedDeviceTypes.map(item => item.text).join(', ')}`).required(),
  hdd_capacity: Yup.string().transform(currentValue => currentValue.replaceAll(',', '')).matches(/^[1-9]+[0-9]*$/, 'Only comma separated numbers are allowed').required()
});

export default deviceValidationSchema;