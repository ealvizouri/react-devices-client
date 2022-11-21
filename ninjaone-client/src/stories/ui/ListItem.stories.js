import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../App.scss';
import ListItem from '../../components/ui/ListItem';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ListItem',
  component: ListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: {
      name: 'id',
      description: 'This is the description',
      type: {
        name: 'string',
        required: true
      },
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    label: {
      name: 'label',
      description: 'This is the description',
      type: {
        name: 'string',
        required: true
      },
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    actions: {
      name: 'actions',
      description: 'This is the description',
      type: {
        name: 'array',
        required: true
      },
      table: {
        type: { summary: 'array' }
      }
    }
  },
};

const actionExplanation = `[{
  action: 'edit',
  icon: <FontAwesomeIcon icon={faPencil} />,
  onClick: () => console.log('edit'),
  extraAttribute: 'it will be passed to the Button component'
}]`;

const Template = (args) => <Container>
    <ListItem {...args}>
      List Item content. It receives a children and an array of actions:
      <pre>{actionExplanation}</pre>
      <div style={{marginTop: '10px', color: 'var(--color-danger)'}}>
        action, icon and onCLick are required
      </div>
    </ListItem>
</Container>;

export const Default = Template.bind({});

Default.args = {
  id: 'list-item',
  label: 'Aria label value',
  actions: [{
    action: 'edit',
    icon: <FontAwesomeIcon icon={faPencil} />,
    onClick: () => console.log('edit')
  },
  {
    action: 'remove',
    icon: <FontAwesomeIcon icon={faTrash} />,
    onClick: () => console.log('remove'),
    'data-modal-button': 'extra attribute',
    variant: 'danger'
  }]
};