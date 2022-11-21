import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../App.scss';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    crumbs: {
      name: 'crumbs',
      required: true
    },
  },
};

const Template = (args) => <Container>
  <BrowserRouter>
    <Breadcrumb {...args} />
  </BrowserRouter>
</Container>;

export const Default = Template.bind({});

Default.args = {
  crumbs: [
    {
      to: '/',
      text: 'Dashboard'
    },
    {
      to: '/',
      text: 'Users'
    },
    {
      to: '/',
      text: 'User 123'
    },
    {
      text: 'Preferences'
    },
  ]
};