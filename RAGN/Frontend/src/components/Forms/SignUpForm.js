import React from 'react';
import { Row, Column, FormLabel, Input, Icon, TextMessage } from './styled';
import Select from 'react-styled-select';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';

const classificationOptions = [
  { value: 'food', label: 'Food' },
  { value: 'food supplement', label: 'Food Supplement' },
  { value: 'medicine', label: 'Medicine' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'otc', label: 'OTC' }
];

export const SignUpForm = props => {
  const {
    company,
    contact,
    email,
    password,
    phone,
    address1,
    locality,
    country,
    postal,
    media,
    qualifications,
    classifications,
    regions,
    countryOptions,
    showPassword
  } = props;
  return (
    <div style={{ border: props.typeColor }}>
      <form style={{ marginLeft: '65px' }}>
        <Row>
          <Column lg="12" md="12" sm="12" xs="12">
            <p style={{ color: '#e68a00', textAlign: 'left', fontSize: '1em' }}>
              {props.errors}
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
                checked={props.signupType === 'customer'}
                onChange={props.handleRadioChange}
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
                checked={props.signupType === 'consultant'}
                onChange={props.handleRadioChange}
              />
              <span> Consultant</span>
            </label>
          </Column>
        </Row>
        {props.signupType === 'customer' && (
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
                  value={props.generateCapitals(company)}
                  autoComplete="off"
                  onChange={props.handleInputChange('company')}
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
                  value={props.generateCapitals(contact)}
                  autoComplete="off"
                  maxLength="30"
                  onChange={props.handleInputChange('contact')}
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
                  value={email}
                  autoComplete="off"
                  onChange={props.handleInputChange('email')}
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password..."
                  value={password}
                  autoComplete="off"
                  onChange={props.handleInputChange('password')}
                />
              </Column>
              <Column lg="1" md="1" sm="1" xs="1">
                <span>
                  <Icon
                    onClick={props.handleToggle}
                    src={showPassword ? ShowImg : HideImg}
                    alt="password icon"
                  />
                </span>
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
                <FormLabel>Phone *</FormLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone..."
                  value={phone}
                  autoComplete="off"
                  onChange={props.handleInputChange('phone')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              />
            </Row>
          </div>
        )}
        {props.signupType === 'consultant' && (
          <div>
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
                  value={props.generateCapitals(company)}
                  autoComplete="off"
                  onChange={props.handleInputChange('company')}
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
                  value={props.generateCapitals(contact)}
                  autoComplete="off"
                  maxLength="30"
                  onChange={props.handleInputChange('contact')}
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
                <FormLabel>Phone *</FormLabel>
                <Input
                  id="phoneCompany"
                  type="tel"
                  placeholder="Your phone..."
                  value={phone}
                  autoComplete="off"
                  onChange={props.handleInputChange('phone')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              />
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
                  value={email}
                  autoComplete="off"
                  onChange={props.handleInputChange('email')}
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your password..."
                  value={password}
                  autoComplete="off"
                  onChange={props.handleInputChange('password')}
                />
              </Column>
              <Column lg="1" md="1" sm="1" xs="1">
                <span>
                  <Icon
                    onClick={props.handleToggle}
                    src={showPassword ? ShowImg : HideImg}
                    alt="password icon"
                  />
                </span>
              </Column>
            </Row>
            <Row>
              <Column lg="12" md="12" sm="12" xs="12">
                <TextMessage password>Password required</TextMessage>
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
                <FormLabel>Street *</FormLabel>
                <Input
                  id="address1"
                  type="text"
                  placeholder="Your street..."
                  value={address1}
                  autoComplete="off"
                  onChange={props.handleInputChange('address1')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel>City *</FormLabel>
                <Input
                  id="locality"
                  type="text"
                  placeholder="Your city..."
                  value={locality}
                  autoComplete="off"
                  onChange={props.handleInputChange('locality')}
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
                <FormLabel>Postal Code *</FormLabel>
                <Input
                  id="postal"
                  type="text"
                  placeholder="Your postal code..."
                  value={postal}
                  autoComplete="off"
                  onChange={props.handleInputChange('postal')}
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel>Country *</FormLabel>
                <Input
                  id="country"
                  type="text"
                  placeholder="Your country code..."
                  value={country}
                  autoComplete="off"
                  onChange={props.handleInputChange('country')}
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
                <FormLabel>Classifications *</FormLabel>
                <Select
                  id="select"
                  value={classifications}
                  onChange={props.handleClassChange}
                  options={classificationOptions}
                  multi
                  searchable
                  style={{ width: '75%' }}
                  className="dark-theme"
                />
              </Column>
              <Column
                style={{ marginBottom: '15px' }}
                lg="6"
                md="6"
                sm="6"
                xs="6"
              >
                <FormLabel>Regions *</FormLabel>
                <Select
                  id="select"
                  value={regions}
                  onChange={props.handleCountryChange}
                  options={countryOptions}
                  multi
                  searchable
                  style={{ width: '75%' }}
                  className="dark-theme"
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
                <FormLabel>Media</FormLabel>
                <Input
                  id="media"
                  type="text"
                  placeholder="Your media..."
                  value={media}
                  autoComplete="off"
                  onChange={props.handleInputChange('media')}
                />
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
                  value={qualifications}
                  autoComplete="off"
                  onChange={props.handleInputChange('qualifications')}
                />
              </Column>
            </Row>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
