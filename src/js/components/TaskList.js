import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import {loadTasks} from '../actions/tasks.actions';
import tasksService  from '../services/task.service';
import { toDateString } from '../util/DateUtil';

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.props.tasks;
  }

  componentDidMount(){
    this.getAllTasks();
  }

  getAllTasks(){
    tasksService.getAllTasks().then(tasks => {
      const data = tasks.docs.map(task => {
        const data = task.data();
        return {
          ...data,
          id: task.id,
          createdDate: toDateString(data.createdDate.seconds * 1000)
        };
      });

      console.log(data.map(tsk => tsk.createdDate));
      this.props.dispatch(loadTasks(data));
    });
  }

  render() {
    const { tasks } = this.props;
    return (
      <section className="row" id="taskList">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskItem key={task.id} {...task} index={index} />
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info" role="alert">
              Task list is empty, please add a task!
            </div>
          </div>
        )}
      </section>
    );
  }
}

TaskList.defaultProps = {
  tasks: []
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(
  mapStateToProps,
  null
)(TaskList);
