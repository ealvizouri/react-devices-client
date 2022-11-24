import React from 'react';
import '../../App.scss';
import Button from '../../components/ui/Button';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      name: 'variant',
      default: 'primary',
      required: false,
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'clean'
      ]
    },
    type: {
      name: 'type',
      default: 'button',
      required: false
    },
    children: {
      name: 'children',
      required: true
    },
  },
};

const Template = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  type: 'Submit',
  children: 'Click me',
  variant: 'primary'
};
