import React from 'react';
import { Formik } from 'formik';
import '../../App.scss';
import InputNumber from '../../components/form/InputNumber';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/InputNumber',
  component: InputNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      name: 'id',
      required: true
    },
    name: {
      name: 'name',
      required: true
    },
    label: {
      name: 'label',
      required: true
    },
    type: {
      name: 'error',
      required: true
    },
    required: {
      name: 'required',
      required: false
    },
    allowNegative: {
      name: 'allowNegative',
      default: true,
      required: false,
    },
    thousandSeparator: {
      name: 'thousandSeparator',
      required: false,
      default: ''
    }
  },
};

const Template = (args) => <Container>
  <Formik initialValues={{ hdd_capacity: '1,200' }} onSubmit={() => {}}>
    <InputNumber {...args} />
  </Formik>
</Container>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 'hdd_capacity',
  name: 'hdd_capacity',
  label: 'HDD Capacity',
  required: true,
  allowNegative: false,
  thousandSeparator: ','
};