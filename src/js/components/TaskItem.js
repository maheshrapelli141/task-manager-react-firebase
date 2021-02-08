import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTask } from '../actions/tasks.actions';
import { getDaysFromNow } from '../util/DateUtil';

const isAlmostDue = dueDate => {
  const daysBetween = getDaysFromNow(dueDate);
  return daysBetween <= 7 && daysBetween >= 0;
};

const isOverDue = dueDate => getDaysFromNow(dueDate) < 0;

export const TaskItem = ({
  id,
  name,
  category,
  description,
  createdDate,
  reminderDate,
  dueDate,
  resolved,
  dispatch
}) => {
  // todo es: prompt reminder when time
  reminderDate;
  return (
    <div className="col-12 col-md-4">
      <div
        className={classNames('card', {
          'border-warning': !resolved && isAlmostDue(dueDate),
          'border-danger': !resolved && isOverDue(dueDate),
          'border-success': resolved
        })}
        style={{boxShadow: resolved ? 'none' : '5px 5px 5px #888'}}
      >
        <div className="card-header">{category}</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Due on {dueDate}</h6>
          <p className="card-text">{description}</p>
          {/* {reminderDate ? <p className="card-text">Reminder on {reminderDate}</p> : null} */}
        </div>
        <div className="card-footer text-center">
          <button
            className={classNames('btn btn-block', {
              'btn-primary': !resolved,
              'btn-warning': resolved
            })}
            onClick={() => {
              dispatch(toggleTask(id));
            }}
          >
            {!resolved ? 'Resolve' : 'Reopen'}
          </button>
          <small className="text-muted">Created on {createdDate}</small>
        </div>
      </div>
    </div>
  );
};

TaskItem.defaultProps = {
  description: '',
  reminderDate: ''
};

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  createdDate: PropTypes.string.isRequired,
  reminderDate: PropTypes.string,
  dueDate: PropTypes.string.isRequired,
  resolved: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(TaskItem);
