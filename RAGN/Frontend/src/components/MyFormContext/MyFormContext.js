import React from 'react';
import { connect } from 'react-redux';
import { clear } from '../../actions/error';
import { signup } from '../../actions/session';
import SignupContext from '../../contexts/SignupContext';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  EmailIcon
} from 'react-share';
// import { SocialIcon } from 'react-social-icons';

import axios from 'axios';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clear: () => dispatch(clear)
});

const mediaOptions = [
  { value: FacebookIcon, label: 'Facebook' },
  { value: TwitterIcon, label: 'Twitter' },
  { value: TelegramIcon, label: 'Telegram' },
  { value: WhatsappIcon, label: 'Whatsapp' },
  { value: LinkedinIcon, label: 'LinkedIn' },
  { value: VKIcon, label: 'VK' },
  { value: OKIcon, label: 'Odnoklassniki' },
  { value: RedditIcon, label: 'Reddit' },
  { value: TumblrIcon, label: 'Tumblr' },
  { value: MailruIcon, label: 'Mail.Ru' },
  { value: LivejournalIcon, label: 'LiveJournal' },
  { value: ViberIcon, label: 'Viber' },
  { value: WorkplaceIcon, label: 'Workplace' },
  { value: LineIcon, label: 'Line' },
  { value: PocketIcon, label: 'Pocket' },
  { value: EmailIcon, label: 'Email' }
];

class MyFormContext extends React.Component {
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
    address: '',
    media: [],
    qualification: '',
    qualifications: [],
    emailCheck: '',
    classifications: [],
    countryOptions: [],
    showPassword: false,
    selectedOption: null
  };

  // Method for CRUD operation to sign up customer/consultant
  handleSubmit = e => {
    e.preventDefault();
    let mediaLinks = this.state.media.map(media => {
      return { iconType: media.iconType, iconURL: media.iconURL };
    });

    const user = {
      userType: this.state.signupType,
      username: this.state.contact,
      email: this.state.email,
      password: this.state.password,
      company: this.state.company,
      phone: this.state.phone,
      address: this.state.address,
      classifications: this.state.classifications,
      regions: this.state.regions,
      mediaLinks: mediaLinks,
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
        address: '',
        media: [],
        qualification: '',
        qualifications: [],
        emailCheck: '',
        classifications: [],
        countryOptions: [],
        selectedOption: null
      });
    }
  };

  // Method for changing state of radio buttons
  handleRadioChange = event =>
    this.setState({ signupType: event.target.value });

  // Method for updating input fields
  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // Method for updating classifications array
  handleClassChange = classifications => this.setState({ classifications });

  // Method for updating regions array
  handleCountryChange = regions => this.setState({ regions });

  // Method specific for updating qualifications entry
  handleQualChange = e => {
    e.preventDefault();
    if (this.state.qualification === '') {
      return false;
    }
    this.setState({
      qualifications: [...this.state.qualifications, this.state.qualification],
      qualification: ''
    });
  };

  // Method for deleting objects from media and qualifications array
  handleRemove = (name, src, ind) => {
    this.setState({
      [name]: src.filter((_, i) => i !== ind)
    });
  };

  // Method for updated media link selection
  handleMediaChanges = selectedOption => {
    this.setState({
      selectedOption,
      media: [
        ...this.state.media,
        {
          iconType: `${selectedOption.label}`,
          iconMedia: <selectedOption.value size={32} round={true} />,
          iconURL: ''
        }
      ]
    });
  };

  // Method for updating iconMedia url in specific media object
  handleFormChange = ind => e => {
    const { media } = this.state;
    let data = [...media];
    data[ind].iconURL = e.target.value;
    this.setState({
      data
    });
  };

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

  // Method for toggling show/hide password
  handleToggle = e => {
    e.preventDefault();
    this.state.showPassword
      ? this.setState({
          showPassword: false
        })
      : this.setState({
          showPassword: true
        });
  };

  keydown = event => {
    if (event.key === 'Enter') {
      this.handleClassChange(event);
    }
  };

  handlePhoneChange = value => {
    this.setState({ phone: value });
  };

  render() {
    return (
      <SignupContext.Provider
        value={{
          isOpen: this.state.isOpen,
          signupType: this.state.signupType,
          company: this.state.company,
          contact: this.state.contact,
          email: this.state.email,
          password: this.state.password,
          phone: this.state.phone,
          regions: this.state.regions,
          location: this.state.location,
          address: this.state.address,
          media: this.state.media,
          qualification: this.state.qualification,
          qualifications: this.state.qualifications,
          emailCheck: this.state.emailCheck,
          classifications: this.state.classifications,
          countryOptions: this.state.countryOptions,
          showPassword: this.state.showPassword,
          errors: this.props.errors,
          selectedOption: this.state.selectedOption,
          handleSubmit: this.handleSubmit,
          generateCapitals: this.generateCapitals,
          chooseType: this.chooseType,
          clear: this.clear,
          getCountries: this.getCountries,
          handleModal: this.handleModal,
          handleRadioChange: this.handleRadioChange,
          handleClassChange: this.handleClassChange,
          handleCountryChange: this.handleCountryChange,
          handleInputChange: this.handleInputChange,
          handleMediaChange: this.handleMediaChange,
          handleToggle: this.handleToggle,
          handlePhoneChange: this.handlePhoneChange,
          handleMediaChanges: this.handleMediaChanges,
          handleFormChange: this.handleFormChange,
          handleRemove: this.handleRemove,
          handleQualChange: this.handleQualChange,
          keydown: this.keydown,
          mediaOptions: mediaOptions
        }}
      >
        {this.props.children}
      </SignupContext.Provider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFormContext);
