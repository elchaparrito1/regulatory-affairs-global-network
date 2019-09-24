import React from 'react';
import ConsultantForm from './ConsultantForm';
import CustomerForm from './CustomerForm';
import { Row, Column, FormLabel } from './styled';

import './SignUpForm.css';

import SignUpContext from '../../contexts/SignupContext';

class SignUpForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <div style={{ border: context.typeColor }}>
            <form style={{ marginLeft: '65px' }}>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <p
                    style={{
                      color: '#e68a00',
                      textAlign: 'left',
                      fontSize: '1em'
                    }}
                  >
                    {context.errors}
                  </p>
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <FormLabel>Account type *</FormLabel>
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <label>
                    <input
                      type="radio"
                      className="form-radio"
                      value="customer"
                      checked={context.signupType === 'customer'}
                      onChange={context.handleRadioChange}
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
                      checked={context.signupType === 'consultant'}
                      onChange={context.handleRadioChange}
                    />
                    <span> Consultant</span>
                  </label>
                </Column>
              </Row>
              {context.signupType === 'customer' && <CustomerForm />}
              {context.signupType === 'consultant' && <ConsultantForm />}
            </form>
          </div>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default SignUpForm;
