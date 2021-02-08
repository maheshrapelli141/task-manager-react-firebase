import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({ path, label }) => (
  <li className="nav-item">
    <NavLink to={path} activeClassName="active" className="nav-link">
      {label}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavItem;
