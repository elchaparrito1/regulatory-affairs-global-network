import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import util from '../../util/forgotpassword';
import { Row, Column, Box, Input, Button, Image, TextMessage } from './styled';
import logo from '../../images/logo2.svg';

class ResetPassword extends Component {
  state = {
    newPassword: '',
    confirmPassword: '',
    message: '',
    passwordChanged: false,
    error: false,
    count: 10,
    color: '#e68a00'
  };

  //Lifecycle method to check that the the password token is still valid
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

  //Lifecycle method that is not initially called, but rather after updating occurs.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === 1) {
      clearInterval(this.tick());
      window.close();
    }
  }

  // Standard method to update state
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  // Method for closing the window, after a successful change of password
  tick = () => {
    console.log('running');
    this.setState({ count: this.state.count - 1 });
  };

  // Method to update actual password
  updatePass = () => {
    const passwordObj = {
      password: this.state.newPassword,
      passwordToken: this.props.match.params.token
    };
    util
      .updatepassword(passwordObj)
      .then(response => {
        // console.log(response.data);
        if (response.data.message === 'password updated') {
          this.setState({
            newPassword: '',
            confirmPassword: '',
            message: `Your password has been successfully updated. Please try logging in again.`,
            passwordChanged: true,
            color: 'black'
          });
          setInterval(() => this.tick(), 1000);
        } else if (response.data.name === 'ValidationError') {
          this.setState({
            color: '#e68a00',
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

  // Method to check that the two input field values match
  checkMatch = event => {
    event.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    if (newPassword === confirmPassword) {
      this.updatePass();
    } else {
      this.setState({
        color: '#e68a00',
        message: 'The passwords entered do not match.'
      });
    }
  };

  render() {
    const {
      newPassword,
      error,
      confirmPassword,
      message,
      passwordChanged,
      count,
      color
    } = this.state;
    console.log(count);
    return (
      <div style={{ backgroundColor: '#939393', height: '100vh' }}>
        <Box>
          <Row>
            <Column lg="12" md="12" sm="12" xs="12">
              <Image src={logo} />
            </Column>
          </Row>
          {error && (
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <TextMessage style={{ transform: 'translateY(100%)' }}>
                    The link has expired or there was a problem resetting the
                    password. Please <Link to="/login-signup">request</Link>{' '}
                    another reset link.
                  </TextMessage>
                </Column>
              </Row>
            </div>
          )}

          {!error && (
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <TextMessage>
                    Please fill in the fields below to update password.
                  </TextMessage>
                </Column>
              </Row>
              <form className="password-form" onSubmit={this.checkMatch}>
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Input
                      id="new-password"
                      label="New Password"
                      placeholder="New password..."
                      onChange={this.handleChange('newPassword')}
                      value={newPassword}
                      type="password"
                      autoComplete="off"
                    />
                  </Column>
                </Row>
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Input
                      id="confirm-password"
                      label="Confirm Password"
                      placeholder="Confirm password..."
                      onChange={this.handleChange('confirmPassword')}
                      value={confirmPassword}
                      type="password"
                      autoComplete="off"
                    />
                  </Column>
                </Row>
                {message ? (
                  <div>
                    <Row>
                      <Column lg="9" md="9" sm="9" xs="9">
                        <TextMessage style={{ color: color }}>
                          {message}
                        </TextMessage>
                      </Column>
                      <Column lg="3" md="3" sm="3" xs="3">
                        <Button>Update</Button>
                      </Column>
                    </Row>
                  </div>
                ) : (
                  <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                      <Button>Update</Button>
                    </Column>
                  </Row>
                )}
              </form>

              {passwordChanged && (
                <div>
                  <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage>
                        This window will close in {count}
                        {count >= 2 ? ' seconds' : ' second'}.
                      </TextMessage>
                    </Column>
                  </Row>
                </div>
              )}
            </div>
          )}
        </Box>
      </div>
    );
  }
}

export default ResetPassword;
