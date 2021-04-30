import { Story, Meta } from '@storybook/react';

import TaskList, { TaskListProps } from './TaskList';
import { defaultTaskData, actionEvent } from './Task.stories';


export default {
  title: 'TaskList',
  component: TaskList,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as Meta;

const defaultTasksData: TaskListProps['tasks'] = [
  { ...defaultTaskData, id: '1', title: 'Task 1' },
  { ...defaultTaskData, id: '2', title: 'Task 2' },
  { ...defaultTaskData, id: '3', title: 'Task 3' },
  { ...defaultTaskData, id: '4', title: 'Task 4' },
  { ...defaultTaskData, id: '5', title: 'Task 5' },
  { ...defaultTaskData, id: '6', title: 'Task 6' },
]

const Template: Story<TaskListProps>  = (args) => <TaskList {...args} />;

export const Default= Template.bind({});
Default.args = {
  tasks: defaultTasksData,
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
  ...actionEvent
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  ...actionEvent,
  loading: true
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  ...actionEvent,
  loading: false
};