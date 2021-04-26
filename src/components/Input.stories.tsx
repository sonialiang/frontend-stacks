import { Story, Meta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story = () => <Input />;

export const Regular = Template.bind({});
Regular.args = {};