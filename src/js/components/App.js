import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../util/firebase';
import MainLayout from './MainLayout';
import { login } from '../actions/user.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.props.dispatch(login(user)) 
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
  const { user } = state;
  return {
    user
  }
};
export default connect(mapStateToProps)(App);
