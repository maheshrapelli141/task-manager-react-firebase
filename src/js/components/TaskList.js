import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.props.tasks;
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
