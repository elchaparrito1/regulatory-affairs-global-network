import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { clear } from '../../actions/error';
import { signup } from '../../actions/session';
import BlankModal from '../../components/Modals/BlankModal';
// import Select from "react-select";
import Select from 'react-styled-select';
import axios from 'axios';

import { Row, Column, Box, Label, FormLabel, Button, Input } from './styled';
import './Signup.css';

const classificationOptions = [
  { value: 'food', label: 'Food' },
  { value: 'food supplement', label: 'Food Supplement' },
  { value: 'medicine', label: 'Medicine' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'otc', label: 'OTC' }
];

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clear: () => dispatch(clear)
});

class Signup extends React.Component {
  state = {
    isOpen: false,
    signupType: 'customer',
    company: '',
    contact: '',
    email: '',
    password: '',
    phone: '',
    regions: [],
    location: '',
    address1: '',
    locality: '',
    country: '',
    postal: '',
    media: '',
    qualifications: [],
    emailCheck: '',
    classifications: [],
    countryOptions: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      userType: this.state.signupType,
      username: this.state.contact,
      email: this.state.email,
      password: this.state.password,
      company: this.state.company,
      phone: this.state.phone,
      country: this.state.country,
      address1: this.state.address,
      locality: this.state.locality,
      postal: this.state.postal,
      classifications: this.state.classifications,
      regions: this.state.regions,
      mediaLinks: this.state.media,
      qualifications: this.state.qualifications
    };

    this.props.signup(user);
  };

  clear = () => {
    this.props.clear();
  };

  // Method to determine which signup path to use
  chooseType = e => {
    e.preventDefault();
    this.state.signupType === 'customer'
      ? this.createCustomer(e)
      : this.createConsultant(e);
  };

  // Lifecycle method for getting initial list of countries
  UNSAFE_componentDidMount() {
    this.getCountries();
  }

  getCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      const countryOption = [];
      res.data.forEach((country, index) => {
        countryOption.push({ value: country.name, label: country.name });
      });
      this.setState({
        countryOptions: countryOption
      });
    });
  };

  // Method for opening modal
  handleModal = () => {
    if (!this.state.isOpen) {
      this.clear();
      this.setState({
        isOpen: true
      });
    } else if (this.state.isOpen) {
      this.clear();
      this.setState({
        isOpen: false
      });
    }
  };

  // Method for changing state of radio buttons
  handleRadioChange = event =>
    this.setState({ signupType: event.target.value });

  // Method for updating input fields
  handleInputChange = name => event =>
    this.setState({ [name]: event.target.value });

  // Method for updating classifications array
  handleClassChange = classifications => this.setState({ classifications });

  // Method for updating regions array
  handleCountryChange = regions => this.setState({ regions });

  // Method to automatically capitalize first syllables of each name
  generateCapitals = str => {
    let result = [];
    str = str.split(' ').forEach(function(word) {
      result.push(
        word
          .slice(0)
          .charAt(0)
          .toUpperCase()
          .concat(word.slice(1))
      );
    });
    return result.join(' ');
  };

  // Method to render the body of the modal
  renderBody = () => {
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
      countryOptions
    } = this.state;
    return (
      <div style={{ border: this.state.typeColor }}>
        <form style={{ marginLeft: '65px' }}>
          <Row>
            <Column lg="12" md="12" sm="12" xs="12">
              <p>{this.props.errors}</p>
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
                  checked={this.state.signupType === 'customer'}
                  onChange={this.handleRadioChange}
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
                  checked={this.state.signupType === 'consultant'}
                  onChange={this.handleRadioChange}
                />
                <span> Consultant</span>
              </label>
            </Column>
          </Row>
          {this.state.signupType === 'customer' && (
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
                    value={company}
                    autoComplete="off"
                    onChange={this.handleInputChange('company')}
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
                    value={this.generateCapitals(contact)}
                    autoComplete="off"
                    maxLength="30"
                    onChange={this.handleInputChange('contact')}
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
                    onChange={this.handleInputChange('email')}
                  />
                </Column>
                <Column
                  style={{ marginBottom: '15px' }}
                  lg="6"
                  md="6"
                  sm="6"
                  xs="6"
                >
                  <FormLabel>Password *</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password..."
                    value={password}
                    autoComplete="off"
                    onChange={this.handleInputChange('password')}
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
                    id="phone"
                    type="tel"
                    placeholder="Your phone..."
                    value={phone}
                    autoComplete="off"
                    onChange={this.handleInputChange('phone')}
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
          {this.state.signupType === 'consultant' && (
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
                    value={company}
                    autoComplete="off"
                    onChange={this.handleInputChange('company')}
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
                    value={this.generateCapitals(contact)}
                    autoComplete="off"
                    maxLength="30"
                    onChange={this.handleInputChange('contact')}
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
                    onChange={this.handleInputChange('phone')}
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
                    onChange={this.handleInputChange('email')}
                  />
                </Column>
                <Column
                  style={{ marginBottom: '15px' }}
                  lg="6"
                  md="6"
                  sm="6"
                  xs="6"
                >
                  <FormLabel>Password *</FormLabel>
                  <Input
                    id="passwordCompany"
                    type="password"
                    placeholder="Your password..."
                    value={password}
                    autoComplete="off"
                    onChange={this.handleInputChange('password')}
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
                  <FormLabel>Street *</FormLabel>
                  <Input
                    id="address1"
                    type="text"
                    placeholder="Your street..."
                    value={address1}
                    autoComplete="off"
                    onChange={this.handleInputChange('address1')}
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
                    onChange={this.handleInputChange('locality')}
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
                    onChange={this.handleInputChange('postal')}
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
                    onChange={this.handleInputChange('country')}
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
                    onChange={this.handleClassChange}
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
                    onChange={this.handleCountryChange}
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
                    onChange={this.handleInputChange('media')}
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
                    onChange={this.handleInputChange('qualifications')}
                  />
                </Column>
              </Row>
            </div>
          )}
        </form>
      </div>
    );
  };

  // Method to render the head content of the modal
  renderHeader = () => {
    return <h1>Create your account</h1>;
  };

  render() {
    // const { errors } = this.props;
    // console.log(errors);
    return (
      <>
        <BlankModal
          isOpen={this.state.isOpen}
          handleModal={this.handleModal}
          header={this.renderHeader()}
          body={this.renderBody()}
          footerMethod={this.handleSubmit}
          footer="Submit"
        />
        <Box>
          <Row>
            <Column lg="6" md="6" sm="6" xs="6">
              <Label>New User?</Label>
            </Column>
            {/* <Column lg="2" md="2" sm="2" xs="2" /> */}
            <Column lg="6" md="6" sm="6" xs="6">
              <Button onClick={this.handleModal}>Register</Button>
            </Column>
          </Row>
        </Box>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
