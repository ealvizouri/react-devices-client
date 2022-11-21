import React from 'react';
import { Formik } from 'formik';
import '../../App.scss';
import Input from '../../components/form/Input';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Input',
  component: Input,
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
  },
};

const Template = (args) => <Container>
  <Formik initialValues={{ first_name: '' }} onSubmit={() => {}}>
    <Input {...args} />
  </Formik>
</Container>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 'first_name',
  name: 'first_name',
  label: 'First Name',
  type: 'text',
  required: true
};