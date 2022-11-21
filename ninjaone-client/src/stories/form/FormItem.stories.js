import React from 'react';
import '../../App.scss';
import FormItem from '../../components/form/FormItem';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/FormItem',
  component: FormItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      name: 'id',
      required: true
    },
    label: {
      name: 'label',
      required: true
    },
    error: {
      name: 'error',
      required: true
    },
    required: {
      name: 'required',
      default: false,
      required: false
    },
  },
};

const Template = (args) => <Container>
  <FormItem {...args}>
    <input name="example" />
  </FormItem>
</Container>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: 'firstName',
  label: 'First Name',
  error: 'This is an error message',
  required: true
};
