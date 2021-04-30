import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Task, { TaskProps } from './Task';

export default {
  title: 'Task',
  component: Task,
  // excludeStories: /.*Data$/,
  excludeStories: /(.*Data$|.*Event$)/
} as Meta;

export const defaultTaskData: TaskProps['task'] = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}
export const actionEvent = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default: Story<TaskProps> = Template.bind({});
Default.args = {
  task: { ...defaultTaskData },
  ...actionEvent
};

export const Pinned: Story<TaskProps> = Template.bind({});
Pinned.args = {
  task: {
    ...defaultTaskData,
    state: 'TASK_PINNED',
  },
  ...actionEvent
};

export const Archived: Story<TaskProps> = Template.bind({});
Archived.args = {
  task: {
    ...defaultTaskData,
    state: 'TASK_ARCHIVED',
  },
  ...actionEvent
};
