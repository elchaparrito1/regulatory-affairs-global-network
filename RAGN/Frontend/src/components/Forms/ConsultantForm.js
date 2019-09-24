import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';

//Import of various APIs
import Select from 'react-styled-select';
import { PocketIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import {
  Row,
  Column,
  FormLabel,
  Input,
  Icon,
  TextMessage,
  TextInput
} from './styled';

import './SignUpForm.css';

const classificationOptions = [
  { value: 'food', label: 'Food' },
  { value: 'food supplement', label: 'Food Supplement' },
  { value: 'medicine', label: 'Medicine' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'otc', label: 'OTC' }
];

class ConsultantForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
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
                  id="companyCompany"
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
                  id="contactCompany"
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
              <Column lg="12" md="12" sm="12" xs="12">
                <FormLabel>Phone *</FormLabel>
                <PhoneInput
                  id="phone"
                  placeholder="Your local phone number..."
                  value={context.phone}
                  onChange={context.handleInputChange('phone')}
                />
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
                <TextMessage phone>
                  "+" symbol and country code will save automatically
                </TextMessage>
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
                  id="emailCompany"
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
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="12" md="12" sm="12" xs="12">
                <FormLabel>Business Address *</FormLabel>
                <TextInput
                  rows="12"
                  cols="50"
                  id="address"
                  placeholder="Your business address with proper indentation..."
                  value={context.address}
                  autoComplete="off"
                  onChange={context.handleInputChange('address')}
                />
              </Column>
            </Row>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Classifications *</FormLabel>
                <Select
                  id="select"
                  value={context.classifications}
                  onChange={context.handleClassChange}
                  options={classificationOptions}
                  multi
                  searchable
                  style={{ width: '75%' }}
                  className="dark-theme"
                />
              </Column>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Regions *</FormLabel>
                <Select
                  id="select"
                  value={context.regions}
                  onChange={context.handleCountryChange}
                  options={context.countryOptions}
                  multi
                  searchable
                  style={{ width: '75%' }}
                  className="dark-theme"
                />
              </Column>
            </Row>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <TextMessage box>
                  Select classification of expertise
                </TextMessage>
              </Column>
              <Column lg="6" md="6" sm="6" xs="6">
                <TextMessage box>Select regions of expertise</TextMessage>
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
                <PocketIcon
                  url="https://www.facebook.com/workplace"
                  size={32}
                  round={true}
                />

                <SocialIcon url="https://www.facebook.com/workplace" />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel>Qualifications</FormLabel>
                <Input
                  id="qualifications"
                  type="text"
                  placeholder="Your qualifications..."
                  value={context.qualifications}
                  autoComplete="off"
                  onChange={context.handleInputChange('qualifications')}
                />
              </Column>
            </Row>
          </>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default ConsultantForm;
