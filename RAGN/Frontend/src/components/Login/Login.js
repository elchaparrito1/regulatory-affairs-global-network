import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import {
  Row,
  Column,
  Text,
  Input,
  Label,
  Box,
  TextMessage,
  LoginMessage,
  Icon
} from './styled';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';
import './Login.css';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    userType: 'customer',
    emailError: '',
    passwordError: '',
    typeColor: '',
    emailColor: '',
    passwordColor: '',
    errorMessage: this.props.errors,
    showPassword: false
  };

  //Method to update errorMessage state, when redux errors message object updates.
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    if (errors !== this.state.errors) {
      this.setState({
        ...this.state,
        errors
      });
    }
  }

  // Method for handling login and firing off action
  handleSubmit = e => {
    e.preventDefault();
    const user = {
      userType: this.state.userType,
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user);
  };

  // Method for changing state of input fields
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  // Method for changing state of radio buttons
  handleChange = event => {
    this.setState({
      userType: event.target.value
    });
  };

  // Method to check that email has been entered in.
  checkEmail = () => {
    if (this.state.email === '') {
      this.setState({
        emailError: 'blank',
        emailColor: 'red'
      });
      return false;
    } else {
      this.setState({
        emailError: '',
        emailColor: ''
      });
      return true;
    }
  };

  // Method to check that password has been entered in.
  checkPassword = () => {
    if (this.state.password === '') {
      this.setState({
        passwordError: 'blank',
        passwordColor: 'red'
      });
      return false;
    } else {
      this.setState({
        passwordError: '',
        passwordColor: ''
      });
      return true;
    }
  };

  // Method for toggling show/hide password
  handleToggle = e => {
    e.preventDefault();
    if (this.state.showPassword) {
      this.setState({
        showPassword: false
      });
    } else {
      this.setState({
        showPassword: true
      });
    }
  };

  render() {
    // console.log(this.state.errors);
    return (
      <>
        <Row>
          <Column lg="12" md="12" sm="12" xs="12">
            <Box>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Text>Log in to RAGN</Text>
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <LoginMessage>{this.state.errors}</LoginMessage>
                </Column>
              </Row>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Label>Login type *</Label>
                  </Column>
                </Row>
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <label>
                      <input
                        type="radio"
                        className="form-radio"
                        value="customer"
                        checked={this.state.userType === 'customer'}
                        onChange={this.handleChange}
                      />
                      <span> Customer</span>
                    </label>
                  </Column>
                </Row>
                <Row>
                  <Column
                    style={{ marginBottom: '15px' }}
                    lg="12"
                    md="12"
                    sm="12"
                    xs="12"
                  >
                    <label>
                      <input
                        type="radio"
                        className="form-radio"
                        value="consultant"
                        checked={this.state.userType === 'consultant'}
                        onChange={this.handleChange}
                      />
                      <span> Consultant</span>
                    </label>
                  </Column>
                </Row>
                {this.state.typeError === 'blank' && (
                  <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage>Choose account type</TextMessage>
                    </Column>
                  </Row>
                )}
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Label>Email *</Label>
                  </Column>
                </Row>
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Input
                      style={{ borderColor: this.state.emailColor }}
                      id="email"
                      type="text"
                      placeholder="Your email..."
                      value={this.state.email}
                      autoComplete="off"
                      onChange={this.handleInputChange('email')}
                      onBlur={this.checkEmail}
                    />
                  </Column>
                </Row>
                {this.state.emailError === 'blank' && (
                  <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage>Valid email required</TextMessage>
                    </Column>
                  </Row>
                )}
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <Label>Password *</Label>
                  </Column>
                </Row>
                <Row>
                  <Column lg="11" md="11" sm="11" xs="11">
                    <Input
                      style={{ borderColor: this.state.passwordColor }}
                      id="password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      placeholder="Your password..."
                      value={this.state.password}
                      autoComplete="off"
                      onChange={this.handleInputChange('password')}
                      onBlur={this.checkPassword}
                    />
                  </Column>
                  <Column lg="1" md="1" sm="1" xs="1">
                    <span>
                      <Icon
                        onClick={this.handleToggle}
                        src={this.state.showPassword ? ShowImg : HideImg}
                        alt="password icon"
                      />
                    </span>
                  </Column>
                </Row>
                {this.state.passwordError === 'blank' && (
                  <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage password>Password required</TextMessage>
                    </Column>
                  </Row>
                )}
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <input
                      className="input-style"
                      type="submit"
                      value="Login"
                    />
                  </Column>
                </Row>
              </form>
            </Box>
          </Column>
        </Row>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
