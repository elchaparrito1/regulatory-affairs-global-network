import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import util from '../../util/forgotpassword';
import './ResetPassword.css';
import { Row, Column, Box, Input, Button, Image } from './styled';
import logo from '../../images/logo2.svg';

class ResetPassword extends Component {
  state = {
    password: '',
    name: '',
    message: '',
    isLoading: true,
    error: false
  };

  componentDidMount() {
    const passwordToken = {
      params: { resetPasswordToken: this.props.match.params.token }
    };
    // console.log(passwordToken);
    util
      .resetpassword(passwordToken)
      .then(response => {
        // console.log(response);
        if (response.data.message === 'password reset link a-ok') {
          this.setState({
            // username: response.data.username,
            update: false,
            isLoading: false,
            error: false
            // name: ""
          });
        } else {
          this.setState({
            update: false,
            isLoading: false,
            error: true
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  handleChange = name => event => {
    console.log(event.target.value);
    this.setState({
      [name]: event.target.value
    });
  };

  updatePass = event => {
    event.preventDefault();
    console.log('This ran again');
    const passwordObj = {
      password: this.state.password,
      passwordToken: this.props.match.params.token
    };
    util
      .updatepassword(passwordObj)
      .then(response => {
        console.log(response.data);
        if (response.data.message === 'password updated') {
          this.setState({
            error: false,
            password: '',
            message:
              'Your password has been successfully reset, please try logging in again.'
          });
        } else if (response.data.name === 'ValidationError') {
          this.setState({
            message: response.data.details[0].message
          });
        } else {
          this.setState({
            error: true
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });
  };

  renderContent = () => {};

  render() {
    const { password, error, isLoading, message } = this.state;
    return (
      <div>
        <Box>
          <Row>
            <Column lg="12" md="12" sm="12" xs="12">
              <Image src={logo} />
            </Column>
          </Row>
          <Row>
            <Column lg="12" md="12" sm="12" xs="12">
              {error && (
                <div>
                  <div className="loading">
                    <h5>
                      The link has expired or there was a problem resetting the
                      password. Please <Link to="/login-signup">request</Link>{' '}
                      another reset link.
                    </h5>
                  </div>
                </div>
              )}
              {isLoading && (
                <div>
                  <div className="loader">Loading User Data...</div>
                </div>
              )}
              {!error && (
                <div>
                  <div className="container reset-page">
                    <div className="container">
                      <h5 className="p-resetPassword">
                        Please enter a new password below.
                      </h5>
                      <form
                        className="password-form"
                        onSubmit={this.updatePass}
                      >
                        <Input
                          id="password"
                          label="Password"
                          onChange={this.handleChange('password')}
                          value={password}
                          type="text"
                          autoComplete="off"
                        />
                        <Button className="btn-style">Update</Button>
                      </form>

                      {message && (
                        <div>
                          <p className="p-resetPassword">{message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Column>
          </Row>
        </Box>
      </div>
    );
  }
}

export default ResetPassword;
