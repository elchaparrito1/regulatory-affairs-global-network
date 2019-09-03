import React from 'react';
import { Row, Column, FormLabel, Input, Icon, TextMessage } from './styled';
import Select from 'react-styled-select';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './SignUpForm.css';

const classificationOptions = [
  { value: 'food', label: 'Food' },
  { value: 'food supplement', label: 'Food Supplement' },
  { value: 'medicine', label: 'Medicine' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'otc', label: 'OTC' }
];

class SignUpForm extends React.Component {
  state = {
    phone: ''
  };

  render() {
    console.log(this.state.phone);
    return (
      <div style={{ border: this.props.typeColor }}>
        <form style={{ marginLeft: '65px' }}>
          <Row>
            <Column lg="12" md="12" sm="12" xs="12">
              <p
                style={{ color: '#e68a00', textAlign: 'left', fontSize: '1em' }}
              >
                {this.props.errors}
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
                  checked={this.props.signupType === 'customer'}
                  onChange={this.props.handleRadioChange}
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
                  checked={this.props.signupType === 'consultant'}
                  onChange={this.props.handleRadioChange}
                />
                <span> Consultant</span>
              </label>
            </Column>
          </Row>
          {this.props.signupType === 'customer' && (
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
                    value={this.props.generateCapitals(this.props.company)}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('company')}
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
                    value={this.props.generateCapitals(this.props.contact)}
                    autoComplete="off"
                    maxLength="30"
                    onChange={this.props.handleInputChange('contact')}
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
                    value={this.props.email}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('email')}
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
                    type={this.props.showPassword ? 'text' : 'password'}
                    placeholder="Your password..."
                    value={this.props.password}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('password')}
                  />
                </Column>
                <Column lg="1" md="1" sm="1" xs="1">
                  <span>
                    <Icon
                      onClick={this.props.handleToggle}
                      src={this.props.showPassword ? ShowImg : HideImg}
                      alt="password icon"
                    />
                  </span>
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
                  <FormLabel>Phone *</FormLabel>
                  <PhoneInput
                    placeholder="Your country and phone..."
                    value={this.state.phone}
                    onChange={phone => {
                      this.setState({ phone });
                      this.props.callbackFromParent(phone);
                    }}
                  />
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <TextMessage phone>
                    "+" symbol and country code will save automatically
                  </TextMessage>
                </Column>
              </Row>
            </div>
          )}
          {this.props.signupType === 'consultant' && (
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
                    value={this.props.generateCapitals(this.props.company)}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('company')}
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
                    value={this.props.generateCapitals(this.props.contact)}
                    autoComplete="off"
                    maxLength="30"
                    onChange={this.props.handleInputChange('contact')}
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
                  <FormLabel>Phone *</FormLabel>
                  <PhoneInput
                    placeholder="Your country and phone..."
                    value={this.state.phone}
                    onChange={phone => {
                      this.setState({ phone });
                      this.props.callbackFromParent(phone);
                    }}
                  />
                </Column>
              </Row>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
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
                    value={this.props.email}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('email')}
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
                    type={this.props.showPassword ? 'text' : 'password'}
                    placeholder="Your password..."
                    value={this.props.password}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('password')}
                  />
                </Column>
                <Column lg="1" md="1" sm="1" xs="1">
                  <span>
                    <Icon
                      onClick={this.props.handleToggle}
                      src={this.props.showPassword ? ShowImg : HideImg}
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
                  <FormLabel>Street *</FormLabel>
                  <Input
                    id="address1"
                    type="text"
                    placeholder="Your street..."
                    value={this.props.address1}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('address1')}
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
                    value={this.props.locality}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('locality')}
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
                    value={this.props.postal}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('postal')}
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
                    value={this.props.country}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('country')}
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
                    value={this.props.classifications}
                    onChange={this.props.handleClassChange}
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
                    value={this.props.regions}
                    onChange={this.props.handleCountryChange}
                    options={this.props.countryOptions}
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
                    value={this.props.media}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('media')}
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
                    value={this.props.qualifications}
                    autoComplete="off"
                    onChange={this.props.handleInputChange('qualifications')}
                  />
                </Column>
              </Row>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default SignUpForm;
