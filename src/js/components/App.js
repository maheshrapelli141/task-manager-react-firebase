import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../util/firebase';
import MainLayout from './MainLayout';
import { login } from '../actions/user.actions';
import tasksService from '../services/task.service';
import { loadTasks } from '../actions/tasks.actions';
import { toDateString } from '../util/DateUtil';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.props.dispatch(login(user));
      this.getAllTasks();
    });
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

      this.props.dispatch(loadTasks(data));
    });
  }

  render() {
    return (
      <div id="mainContainer">
        <MainLayout />
      </div>);
  }
}
const mapStateToProps = state => {
  const { user, tasks } = state;
  return {
    user,tasks
  }
};
export default connect(mapStateToProps)(App);
