import React from 'react';
import Select from 'react-styled-select';
import { PocketIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';

const mediaOptions = [
  'Facebook',
  'Twitter',
  'Telegram',
  'Whatsapp',
  'LinkedIn',
  'Pinterest',
  'VK',
  'Odnoklassniki',
  'Reddit',
  'Tumblr',
  'Mail.Ru',
  'LiveJournal',
  'Viber',
  'Workplace',
  'Line',
  'Weibo',
  'Pocket',
  'Instapaper',
  'email'
];

class MediaIcons extends React.Component {
  render() {
    return (
      <>
        <PocketIcon
          url="https://www.facebook.com/workplace"
          size={32}
          round={true}
        />

        <SocialIcon url="https://www.facebook.com/workplace" />
      </>
    );
  }
}

export default MediaIcons;
