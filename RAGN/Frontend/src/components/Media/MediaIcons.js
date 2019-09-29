import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import Select from 'react-select';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
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
  InstapaperIcon,
  EmailIcon
} from 'react-share';
import { SocialIcon } from 'react-social-icons';
import 'react-dropdown/style.css';
import { Row, Column, Input, Box, Close } from './styled';
import './Media.css';

const mediaOptions = [
  { value: FacebookIcon, label: 'Facebook' },
  { value: TwitterIcon, label: 'Twitter' },
  { value: TelegramIcon, label: 'Telegram' },
  { value: WhatsappIcon, label: 'Whatsapp' },
  { value: LinkedinIcon, label: 'LinkedIn' },
  { value: PinterestIcon, label: 'Pinterest' },
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
  { value: InstapaperIcon, label: 'Instapaper' },
  { value: EmailIcon, label: 'Email' }
];

class MediaIcons extends React.Component {
  state = {
    selectedOption: null,
    options: [],
    icons: ''
  };

  handleChange = selectedOption => {
    this.setState({
      selectedOption,
      options: [
        ...this.state.options,
        <selectedOption.value size={32} round={true} />
      ]
    });
  };

  render() {
    const { selectedOption, options } = this.state;
    console.log(selectedOption);
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Select
              id="select"
              value={selectedOption}
              onChange={this.handleChange}
              options={mediaOptions}
              style={{ width: '75%' }}
              className="dark-theme"
            />
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  <ul>
                    {options.length !== -1 && (
                      <div>
                        {options.map((opt, index) => {
                          return (
                            <li key={index}>
                              <Box>
                                <Row style={{ padding: '5px 0 5px 5px' }}>
                                  <Column lg="1" md="1" sm="1" xs="1">
                                    <Close className="close">&times;</Close>
                                  </Column>
                                  <Column lg="2" md="2" sm="2" xs="2">
                                    <div style={{ float: 'right' }}>{opt}</div>
                                  </Column>
                                  <Column
                                    style={{ marginLeft: '-20px' }}
                                    lg="9"
                                    md="9"
                                    sm="9"
                                    xs="9"
                                  >
                                    <Input
                                      type="text"
                                      value={context.media}
                                      onChange={context.handleMediaChange}
                                      placeholder="Url for this icon..."
                                    />
                                  </Column>
                                </Row>
                              </Box>
                            </li>
                          );
                        })}
                      </div>
                    )}
                  </ul>
                </Column>
              </Row>
            </div>
          </>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default MediaIcons;
