import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
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
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";




export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    this.props.dispatch({ type: 'user_info', data: response.profileObj });
    this.props.history.push('/chat')
  }
  render() {
    //vikasgarg284 Auth key
    return (<GoogleLogin
      clientId="930458552050-buq5eut9rc5culpj3b8d1sfv3aisvahb.apps.googleusercontent.com"
      buttonText="Login With Google"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
    ></GoogleLogin>)
  }
};

/*
<Formik
      initialValues={{ username: "", mobile: "" }}
      onSubmit={(values, { setSubmitting }) => {
        this.props.dispatch({ type: 'add_user', data: values });
        setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is Required"),
        mobile: Yup.string()
          .required("Mobile Number is required.")
          .min(10, "Mobile number should be of minimum 10 character")
          .max(10, "Mobile number should be of maximum 10 character")
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
            <div className={styles.login_form}>
              <div className={styles.login_form_position}>
                <Row>
                  <Col md={8} sm={12}>
                    <Form.Group controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="username" name="username" placeholder="Enter username" value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.username && touched.username && "error"} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={8} sm={12}>
                    <Form.Group controlId="mobile">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="text" name="mobile" placeholder="Enter mobile number" value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.mobile && touched.mobile && "error"} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} className={styles.submitBut}>
                    <Form.Group controlId="sendotp">
                      <Form.Label></Form.Label>
                      <Button variant="contained" color="primary" type="submit" style={{float:'right'}} disabled={isSubmitting}>Send OTP</Button>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>*/

export default connect()(Login);