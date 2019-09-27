import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import Select from 'react-styled-select';
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
import { Row, Column, Input } from './styled';
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
    options: []
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
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={mediaOptions}
              style={{ width: '75%' }}
              className="dark-theme"
            />
            <div>
              <ul>
                <Row style={{ marginBottom: '5px' }}>
                  {options.map((opt, index) => {
                    return (
                      <li key={index}>
                        <Column icon lg="2" md="2" sm="2" xs="2">
                          {opt}
                        </Column>
                        <Column lg="10" md="10" sm="10" xs="10">
                          <Input
                            type="text"
                            placeholder="Url for this icon..."
                          />
                        </Column>
                      </li>
                    );
                  })}
                </Row>
              </ul>
            </div>
          </>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default MediaIcons;
