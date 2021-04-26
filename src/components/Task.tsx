import React from 'react';

export interface TaskProps {
  task: {
    id?: string;
    title?: string;
    state: string;
    updatedAt?: Date;
  }
  onArchiveTask?: () => void;
  onPinTask?: () => void;
}

export const Task: React.FC<TaskProps>  = ({ task: { title } }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
