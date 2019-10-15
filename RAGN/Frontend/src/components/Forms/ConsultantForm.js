import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import ShowImg from '../../images/show.png';
import HideImg from '../../images/hide.png';
import InfoIcon from '../../images/info.png';
import MediaIconForm from './MediaIconForm/MediaIconForm';
import QualificationsForm from './QualificationsForm/QualificationsForm';

//Import of various APIs
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

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
  state = {
    mediaInfo: false,
    qualInfo: false
  };

  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
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
              <Column lg="6" md="6" sm="6" xs="6">
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
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Phone *</FormLabel>
                <PhoneInput
                  defaultCountry={'us'}
                  value={context.phone}
                  onChange={context.handlePhoneChange}
                />
              </Column>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Business Address *</FormLabel>
                <TextInput
                  rows="12"
                  cols="50"
                  id="address"
                  placeholder="Your current business address..."
                  value={context.address}
                  autoComplete="off"
                  onChange={context.handleInputChange('address')}
                />
              </Column>
            </Row>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
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
              <Column lg="5" md="5" sm="5" xs="5">
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
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Classifications *</FormLabel>
                <Select
                  id="select"
                  value={context.classifications}
                  onChange={context.handleClassChange}
                  options={classificationOptions}
                  isMulti
                  searchable
                  style={{ width: '75%' }}
                />
              </Column>
              <Column lg="6" md="6" sm="6" xs="6">
                <FormLabel>Regions *</FormLabel>
                <Select
                  id="select"
                  value={context.regions}
                  onChange={context.handleCountryChange}
                  options={context.countryOptions}
                  isMulti
                  searchable
                  style={{ width: '75%' }}
                />
              </Column>
            </Row>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <TextMessage box>
                  {`Select classification(s) of expertise`}
                </TextMessage>
              </Column>
              <Column lg="6" md="6" sm="6" xs="6">
                <TextMessage box>{`Select region(s) of expertise`}</TextMessage>
              </Column>
            </Row>
            <Row style={{ marginBottom: '15px' }}>
              <Column lg="6" md="6" sm="6" xs="6">
                <Row>
                  <Column lg="5" md="5" sm="5" xs="5">
                    <FormLabel>Media Links</FormLabel>
                  </Column>
                  <Column lg="1" md="1" sm="1" xs="1">
                    <Icon
                      info
                      onClick={() =>
                        this.state.mediaInfo
                          ? this.setState({ mediaInfo: false })
                          : this.setState({ mediaInfo: true })
                      }
                      src={InfoIcon}
                      alt="information icon"
                    />
                  </Column>
                </Row>
                <MediaIconForm />
                <span>
                  {this.state.mediaInfo && (
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage
                        box
                      >{`Aside from email and phone, media links may be assigned to the account. Just select from the dropdown, and input desired URL.`}</TextMessage>
                    </Column>
                  )}
                </span>
              </Column>
              <Column lg="5" md="5" sm="5" xs="5">
                <QualificationsForm />
                <span>
                  {this.state.qualInfo && (
                    <Column lg="12" md="12" sm="12" xs="12">
                      <TextMessage
                        box
                      >{`If there are additional credentials or qualifications to append to the account, input the information, and then press the "+" symbol.`}</TextMessage>
                    </Column>
                  )}
                </span>
              </Column>
              <Column lg="1" md="1" sm="1" xs="1">
                <Icon
                  info
                  style={{ marginLeft: '-315px' }}
                  onClick={() =>
                    this.state.qualInfo
                      ? this.setState({ qualInfo: false })
                      : this.setState({ qualInfo: true })
                  }
                  src={InfoIcon}
                  alt="information icon"
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
