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
        <h5>{this.props.userinfo.name}</h5>
        <h5>{this.props.userinfo.email}</h5>
        <img src={this.props.userinfo.imageUrl}/>
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
    userinfo: state.userinfo
  };
}
export default connect(mapStateToProps)(Chat);
