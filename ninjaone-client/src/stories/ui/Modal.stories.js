import React from 'react';
import styled from 'styled-components';
import '../../App.scss';
import { ModalBase } from '../../components/ui/Modal';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ModalBase',
  component: ModalBase,
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
    size: {
      name: 'size',
      type: {
        name: 'string',
        default: 'lg',
        required: false
      },
      control: 'select',
      options: [
        'sm',
        'md',
        'lg'
      ]
    },
    close: {
      name: 'close',
      type: {
        name: 'function',
        required: true
      }
    }
  },
};

const ModalContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template = (args) => <Container>
    <ModalBase {...args}>
      <ModalContent>
        Modal content
      </ModalContent>
    </ModalBase>
</Container>;

export const Default = Template.bind({});

Default.args = {
  id: 'list-item',
  open: true,
  close: (item) => console.log(item)

};