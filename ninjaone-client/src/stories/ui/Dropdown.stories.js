import React from 'react';
import '../../App.scss';
import Dropdown from '../../components/ui/Dropdown';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      name: 'id',
      type: {
        name: 'string',
        required: true
      },
    },
    label: {
      name: 'label',
      type: {
        name: 'string',
        required: true
      },
    },
    items: {
      name: 'items',
      type: {
        name: 'array',
        required: true
      },
    },
    selected: {
      name: 'selected',
      type: {
        name: 'object',
        required: true
      },
    },
    click: {
      name: 'click',
      type: {
        name: 'function',
        required: true
      },
    }
  },
};

const Template = (args) => <Container>
    <Dropdown {...args} />
</Container>;

const operatingSystems = [
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
];

export const Default = Template.bind({});

Default.args = {
  id: 'operating_system',
  label: 'Operating System',
  items: operatingSystems,
  selected: operatingSystems[0],
  click: (item) => { console.log(item) }
};