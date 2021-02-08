import React from 'react';
import { connect } from 'react-redux';

import NavItem from './NavItem';
import { auth, provider } from '../util/firebase';

const login = () => { auth.signInWithPopup(provider) }
const logout = () => { auth.signOut() }

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      {props.user
        ?
          <ul className="navbar-nav mr-auto">
            <NavItem path="/task" label="Task" />
            <NavItem path="/report" label="Report" />
            <button type="button" className="btn btn-primary btn-right" onClick={logout}  >Logout</button>
          </ul>
        :
          <ul className="navbar-nav mr-auto">
            <button type="button" className="btn btn-primary btn-right" onClick={login}  >Login</button>
          </ul>
      }

    </div>
  </nav>
);

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(NavBar);
