import React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskPage = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-md-3">
        <TaskForm />
      </div>
      <div className="col-12 col-md-9">
        <TaskList />
      </div>
    </div>
  </div>
);

export default TaskPage;
