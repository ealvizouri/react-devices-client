import React from 'react';
import '../../App.scss';
import List from '../../components/ui/List';
import Container from '../Container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/List',
  component: List,
};

const Template = (args) => <Container>
    <List {...args}>
      <li>This is just a UL element</li>
      <li>With a gray border</li>
    </List>
</Container>;

export const Default = Template.bind({});

Default.args = {
  id: 'default-list'
};