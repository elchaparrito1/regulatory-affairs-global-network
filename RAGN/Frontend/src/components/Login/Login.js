import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session';
import ForgotPassword from '../Forms/ForgotPassword/ForgotPassword';
import {
  Row,
  Column,
  Text,
  Input,
  Label,
  Box,
  TextMessage,
  LoginMessage,
  Icon,
  Button
} from './styled';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';
import './Login.css';

const Login = () => {
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [errorMessage, setErrorMessage] = useState(errors);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setErrorMessage(errors);
  }, [errors]);

  // Method for handling login and firing off action
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      userType: userType,
      email: email,
      password: password
    };
    dispatch(login(user));
  };

  // Method to check that email has been entered in.
  const checkEmail = () => {
    let color = email === '' ? 'red' : '';
    let error = email === '' ? 'blank' : '';
    setEmailColor(color);
    setEmailError(error);
    return email === '' ? false : true;
  };

  // Method to check that password has been entered in.
  const checkPassword = () => {
    let color = password === '' ? 'red' : '';
    let error = password === '' ? 'blank' : '';
    setPasswordColor(color);
    setPasswordError(error);
    return password === '' ? false : true;
  };

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
                <LoginMessage>{errorMessage}</LoginMessage>
              </Column>
            </Row>
            <form onSubmit={handleSubmit} aria-label="loginInput">
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Label>Login type *</Label>
                </Column>
              </Row>
              <div role="radiogroup">
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <input
                      type="radio"
                      className="form-radio"
                      value="customer"
                      checked={userType === 'customer'}
                      onChange={event => setUserType(event.target.value)}
                      aria-labelledby="customer"
                    />
                    <label id="customer" htmlFor="customer-selection">
                      {' '}
                      Customer
                    </label>
                  </Column>
                </Row>
              </div>
              <div role="radiogroup">
                <Row>
                  <Column
                    style={{ marginBottom: '15px' }}
                    lg="12"
                    md="12"
                    sm="12"
                    xs="12"
                  >
                    <input
                      type="radio"
                      className="form-radio"
                      value="consultant"
                      checked={userType === 'consultant'}
                      onChange={event => setUserType(event.target.value)}
                      aria-labelledby="consultant"
                    />
                    <label id="consultant" htmlFor="consultant-selection">
                      {' '}
                      Consultant
                    </label>
                  </Column>
                </Row>
              </div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Label htmlFor="emailInput">Email *</Label>
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Input
                    style={{ borderColor: emailColor }}
                    id="email"
                    type="text"
                    aria-label="email-input"
                    placeholder="Your email..."
                    value={email}
                    autoComplete="off"
                    onChange={event => setEmail(event.target.value)}
                    onBlur={checkEmail}
                  />
                </Column>
              </Row>
              {emailError === 'blank' && (
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <TextMessage>Valid email required</TextMessage>
                  </Column>
                </Row>
              )}
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <Label htmlFor="passwordInput">Password *</Label>
                </Column>
              </Row>
              <Row>
                <Column lg="11" md="11" sm="11" xs="11">
                  <Input
                    style={{ borderColor: passwordColor }}
                    id="password"
                    aria-label="password-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password..."
                    value={password}
                    autoComplete="off"
                    onChange={event => setPassword(event.target.value)}
                    onBlur={checkPassword}
                  />
                </Column>
                <Column lg="1" md="1" sm="1" xs="1">
                  <button
                    // data-testid="password-button"
                    id="password-btn"
                    type="button"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outlineColor: '#312b7f'
                    }}
                    aria-label="show or hide password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <Icon
                      src={showPassword ? ShowImg : HideImg}
                      alt=" show/hide password icon"
                    />
                  </button>
                </Column>
              </Row>
              {passwordError === 'blank' && (
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <TextMessage password>Password required</TextMessage>
                  </Column>
                </Row>
              )}
              <Row style={{ marginRight: '30px' }}>
                <Column lg="6" md="6" sm="6" xs="6">
                  <Button
                    aria-label="login"
                    data-testid="login-button"
                    type="submit"
                  >
                    Login
                  </Button>
                </Column>
              </Row>
            </form>
            <Row>
              <Column lg="12" md="12" sm="12" xs="12">
                <ForgotPassword />
              </Column>
            </Row>
          </Box>
        </Column>
      </Row>
    </>
  );
};

export default Login;
