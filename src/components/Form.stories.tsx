import { Story, Meta } from '@storybook/react';

import { Form, FormProps } from './Form';

export default {
  title: 'Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = () => <Form><button>Sign In</button></Form>;

export const SignIn = Template.bind({});
SignIn.args = {};