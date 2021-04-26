import { Story, Meta } from '@storybook/react';

import { Task, TaskProps } from './Task';

export default {
  title: 'Task',
  component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default: Story<TaskProps> = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned: Story<TaskProps> = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived: Story<TaskProps> = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
