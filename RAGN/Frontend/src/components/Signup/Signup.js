import React from 'react';
import { connect } from 'react-redux';
import { clear } from '../../actions/error';
import { signup } from '../../actions/session';
import BlankModal from '../../components/Modals/BlankModal';
import SignUpForm from '../../components/Forms/SignUpForm';

import axios from 'axios';

import { Row, Column, Box, Label, Button } from './styled';
import './Signup.css';

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

  // Method for CRUD operation to sign up customer/consultant
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

  // Method to clear out props when user toggles between login and signup page.
  // This way, the errors messages in the Redux store are not seen in both places.
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

  // Asynchronous call using axios to populate a dropdown with a list of countries.
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

  // Lifecycle method for getting initial list of countries
  UNSAFE_componentDidMount() {
    console.log("This isn't running either?");
    this.getCountries();
  }

  // Method for opening modal
  handleModal = () => {
    if (!this.state.isOpen) {
      this.getCountries();
      this.clear();
      this.setState({
        isOpen: true
      });
    } else if (this.state.isOpen) {
      this.clear();
      this.setState({
        isOpen: false,
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
    return (
      <SignUpForm
        isOpen={this.state.isOpen}
        signupType={this.state.signupType}
        company={this.state.company}
        contact={this.state.contact}
        email={this.state.email}
        password={this.state.password}
        phone={this.state.phone}
        regions={this.state.regions}
        location={this.state.location}
        address1={this.state.address1}
        locality={this.state.locality}
        country={this.state.country}
        postal={this.state.postal}
        media={this.state.media}
        qualifications={this.state.qualifications}
        emailCheck={this.state.emailCheck}
        classifications={this.state.classifications}
        countryOptions={this.state.countryOptions}
        errors={this.props.errors}
        generateCapitals={this.generateCapitals}
        handleModal={this.handleModal}
        handleRadioChange={this.handleRadioChange}
        handleInputChange={this.handleInputChange}
        handleClassChange={this.handleClassChange}
        handleCountryChange={this.handleCountryChange}
        handleSubmit={this.handleSubmit}
      />
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
