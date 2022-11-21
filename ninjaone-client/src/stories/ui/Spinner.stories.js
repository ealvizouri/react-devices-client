import React from 'react';
import '../../App.scss';
import Spinner from '../../components/ui/Spinner';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      name: 'id',
      description: 'This is the description',
      type: {
        name: 'string',
        required: false
      },
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    variant: {
      name: 'variant',
      description: 'This is the description',
      type: {
        name: 'string',
        required: false
      },
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info'
      ]
    },
  },
};

const Template = (args) => <Container>
    <Spinner {...args} />
</Container>;

export const Defualt = Template.bind({});

Defualt.args = {
  id: 'list-item',
  variant: 'primary'
};
