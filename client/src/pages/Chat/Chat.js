import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.css';
import { connect } from 'react-redux';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `Chat  Component works!`
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {this.props.chatuserList.map((user) => (
          <ul key={user.email}><li>{user.email} {user.password}</li></ul> 
        ))}
      </div>
    );
  }
};

Chat.defaultProps = {

};

Chat.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    chatuserList: state.usersList
  };
}
export default connect(mapStateToProps)(Chat);
