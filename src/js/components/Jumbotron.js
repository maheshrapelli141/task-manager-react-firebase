import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">{children}</div>
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired
};

export default Jumbotron;
