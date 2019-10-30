import React from 'react';
import { connect } from 'react-redux';
import BlankModal from '../../Modals/BlankModal';
import { receiveErrors } from '../../../actions/error';
import { Row, Column, Input, TextMessage, P } from './styled';
import util from '../../../util/forgotpassword';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  receiveErrors: data => dispatch(receiveErrors(data))
});

class ForgotPassword extends React.Component {
  state = {
    isOpen: false,
    email: ''
  };

  // Method for handling email input
  handleInput = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };

  // Method for sending email to reset password
  handleSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    util.forgotpassword(email).then(response => {
      console.log(response.data);
      if (response.data === 'email sent') {
        this.setState({
          isOpen: false,
          email: ''
        });
      } else {
        console.log(response.data);
        this.props.receiveErrors(response.data);
      }
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
        isOpen: false
      });
    }
  };

  render() {
    console.log(this.props.errors);
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
            </>
          }
          footerMethod={this.handleSubmit}
          footer="Reset Password"
        />
        <div onClick={this.handleModal}>
          <P>Forgot password?</P>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
