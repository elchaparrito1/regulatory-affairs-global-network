import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';

//Import of APIs
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

import { Row, Column, FormLabel, Input, Icon, TextMessage } from './styled';

import './SignUpForm.css';

class CustomerForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <div style={{ margin: '0 auto' }}>
            <Row>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel htmlFor="companyInput">Company *</FormLabel>
                <Input
                  id="company"
                  type="text"
                  aria-label="company-name"
                  placeholder="Your company..."
                  aria
                  value={context.generateCapitals(context.company)}
                  autoComplete="off"
                  onChange={context.handleInputChange('company')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel htmlFor="contactInput">Contact Person *</FormLabel>
                <Input
                  id="contact"
                  type="text"
                  aria-label="company-contact"
                  placeholder="Your contact person..."
                  value={context.generateCapitals(context.contact)}
                  autoComplete="off"
                  maxLength="30"
                  onChange={context.handleInputChange('contact')}
                />
              </Column>
            </Row>
            <Row>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel htmlFor="emailInput">Email *</FormLabel>
                <Input
                  id="email"
                  type="text"
                  aria-label="email-input"
                  placeholder="Your email..."
                  value={context.email}
                  autoComplete="off"
                  onChange={context.handleInputChange('email')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="5"
                md="5"
                sm="5"
                xs="5"
              >
                <FormLabel htmlFor="passwordInput">Password *</FormLabel>
                <Input
                  id="password"
                  type={context.showPassword ? 'text' : 'password'}
                  aria-label="password-input"
                  placeholder="Your password..."
                  value={context.password}
                  autoComplete="off"
                  onChange={context.handleInputChange('password')}
                />
                <Column lg="12" md="12" sm="12" xs="12">
                  <TextMessage box>
                    6-16 characters, one capital letter, one lowercase letter,
                    one digit, one special character.
                  </TextMessage>
                </Column>
              </Column>
              <Column lg="1" md="1" sm="1" xs="1">
                <button
                  type="button"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outlineColor: '#312b7f',
                    marginLeft: '-105px',
                    marginTop: '10px'
                  }}
                  aria-label="show-hide-button"
                  onClick={context.handleToggle}
                >
                  <Icon
                    src={context.showPassword ? ShowImg : HideImg}
                    alt=" show/hide password icon"
                  />
                </button>
              </Column>
            </Row>
            <Row>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel htmlFor="phoneInput">Phone *</FormLabel>
                <PhoneInput
                  aria-label="phone-input"
                  defaultCountry={'us'}
                  value={context.phone}
                  onChange={context.handlePhoneChange}
                />
              </Column>
            </Row>
          </div>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default CustomerForm;
