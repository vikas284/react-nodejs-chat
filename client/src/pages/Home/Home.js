import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AddUser } from '../../components/index';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users =>{this.props.dispatch({ type: 'add_user', data: users[0] });} );
  }
  render() {
    return (
      <div className={styles.root}>
        <div>
          <AddUser />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.usersList.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell component="th" scope="row">
                      {user.email}
                    </TableCell>
                    <TableCell>{user.password}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
};

Home.defaultProps = {
  firstName: "Vikas",
  lastName: "Garg",
  city: "bangalore Kagdsspura",
  age: 29

};

Home.propTypes = {
  age: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    usersList: state.usersList
  };
}
export default connect(mapStateToProps)(Home);
