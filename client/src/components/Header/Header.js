import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `Header Component works`
    };
  }
  render() {
    return (
      <ul>
        <li>
          <Link to="/"> Users </Link>
        </li>
        <li>
          <Link to="/chat"> Chat </Link>
        </li>
      </ul>
    );
  }
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
