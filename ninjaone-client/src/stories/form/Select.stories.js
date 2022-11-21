import React from 'react';
import { Formik } from 'formik';
import '../../App.scss';
import Select from '../../components/form/Select';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Select',
  component: Select,
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
    options: {
      name: 'options',
      required: true
    }
  },
};

const Template = (args) => <Container>
  <Formik initialValues={{ options: '' }} onSubmit={() => {}}>
    <Select {...args} />
  </Formik>
</Container>;

export const Default = Template.bind({});

Default.args = {
  id: 'os',
  name: 'os',
  label: 'Operating System',
  required: true,
  options: [
    {
      text: 'Select OS',
      value: ''
    },
    {
      text: 'macOS Ventura',
      value: 'macos'
    },
    {
      text: 'Windows 11',
      value: 'windows_11'
    },
    {
      text: 'Linux Ubuntu 22',
      value: 'linux_ubuntu_22'
    }
  ]
};