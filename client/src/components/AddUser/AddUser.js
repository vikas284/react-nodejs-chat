import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddUser.module.css';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
//import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';

export class AddUser extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        this.props.dispatch({ type: 'add_user', data: values });
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={5} sm={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"} />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter password" value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"} />
                </Form.Group>
              </Col>
              <Col md={2} className={styles.submitBut}>
                <Form.Group controlId="password">
                  <Form.Label></Form.Label>
                  <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>Add</Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>)
  }
};

AddUser.defaultProps = {

};

AddUser.propTypes = {

};


export default connect()(AddUser);