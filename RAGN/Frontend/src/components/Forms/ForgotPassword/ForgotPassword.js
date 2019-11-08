import React from 'react';
import BlankModal from '../../Modals/BlankModal';
import { Row, Column, Input, TextMessage, P, ErrorMessage } from './styled';
import util from '../../../util/forgotpassword';

class ForgotPassword extends React.Component {
  state = {
    isOpen: false,
    email: '',
    message: '',
    color: '#e68a00'
  };

  // Method for handling email input
  handleInput = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  // Method for opening modal
  handleModal = () => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      });
    } else if (this.state.isOpen) {
      this.setState({
        isOpen: false,
        email: '',
        message: ''
      });
    }
  };

  // Method for sending email to reset password
  handleSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    util.forgotpassword(email).then(response => {
      if (response.data === 'blank email') {
        this.setState({
          message: 'Please enter your email.'
        });
      } else if (response.data === 'not found') {
        this.setState({
          message: 'User not found with this email.'
        });
      } else if (response.data === 'email sent') {
        this.setState({
          message: 'Link sent. Please check your email to reset password.',
          email: '',
          color: 'black'
        });
        setTimeout(this.handleModal, 4000);
      }
    });
  };

  render() {
    return (
      <>
        <BlankModal
          isOpen={this.state.isOpen}
          handleModal={this.handleModal}
          header={<h1>Reset Password</h1>}
          body={
            <>
              <Row>
                <Column
                  style={{ marginLeft: '40px' }}
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <TextMessage>
                    To reset your password, enter your user email below and
                    submit. An email will be sent to you with instructions about
                    how to complete the process.
                  </TextMessage>
                </Column>
              </Row>
              <Row>
                <Column
                  style={{ marginLeft: '40px' }}
                  lg="12"
                  md="12"
                  sm="12"
                  xs="12"
                >
                  <Input
                    type="email"
                    placeholder="Your email..."
                    value={this.state.email}
                    autoComplete="off"
                    onChange={this.handleInput}
                  />
                </Column>
              </Row>
              {this.state.message && (
                <Row>
                  <Column lg="12" md="12" sm="12" xs="12">
                    <ErrorMessage style={{ color: this.state.color }}>
                      {this.state.message}
                    </ErrorMessage>
                  </Column>
                </Row>
              )}
            </>
          }
          footerMethod={this.handleSubmit}
          footer="Send Link"
        />
        <div onClick={this.handleModal}>
          <P>Forgot password?</P>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
