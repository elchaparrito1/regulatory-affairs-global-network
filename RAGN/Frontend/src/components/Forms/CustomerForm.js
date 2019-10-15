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
                <FormLabel>Company *</FormLabel>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company..."
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
                <FormLabel>Contact Person *</FormLabel>
                <Input
                  id="contact"
                  type="text"
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
                <FormLabel>Email *</FormLabel>
                <Input
                  id="email"
                  type="text"
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
                <FormLabel>Password *</FormLabel>
                <Input
                  id="password"
                  type={context.showPassword ? 'text' : 'password'}
                  placeholder="Your password..."
                  value={context.password}
                  autoComplete="off"
                  onChange={context.handleInputChange('password')}
                />
                <Column lg="15" md="15" sm="15" xs="15">
                  <TextMessage box>
                    6-16 characters, one capital letter, one lowercase letter,
                    one digit, one special character.
                  </TextMessage>
                </Column>
              </Column>
              <Column lg="1" md="1" sm="1" xs="1">
                <span>
                  <Icon
                    onClick={context.handleToggle}
                    src={context.showPassword ? ShowImg : HideImg}
                    alt="password icon"
                  />
                </span>
              </Column>
            </Row>
            <Row>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Phone *</FormLabel>
                <PhoneInput
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
