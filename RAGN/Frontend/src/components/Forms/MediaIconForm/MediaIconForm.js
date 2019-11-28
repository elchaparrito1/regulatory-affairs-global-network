import React from 'react';
import SignUpContext from '../../../contexts/SignupContext';
import Select from 'react-select';
import 'react-dropdown/style.css';
import { Row, Column, Input, Box, Remove } from './styled';

import './Media.css';

class MediaIconForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Select
              id="select"
              value={context.selectedOption}
              onChange={context.handleMediaChanges}
              options={context.mediaOptions}
              style={{ width: '75%' }}
              className="dark-theme"
            />
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  {context.media && (
                    <ul>
                      <div>
                        {context.media.map((opt, index) => {
                          return (
                            <li key={index}>
                              <Box>
                                <Row style={{ padding: '5px 0 5px 5px' }}>
                                  <Column lg="1" md="1" sm="1" xs="1">
                                    <Remove
                                      className="remove"
                                      aria-label="remove icon"
                                      onClick={() =>
                                        context.handleRemove(
                                          'media',
                                          context.media,
                                          index
                                        )
                                      }
                                    >
                                      &times;
                                    </Remove>
                                  </Column>
                                  <Column lg="2" md="2" sm="2" xs="2">
                                    <div style={{ float: 'right' }}>
                                      {opt.iconMedia}
                                    </div>
                                  </Column>
                                  <Column
                                    style={{ marginLeft: '-20px' }}
                                    lg="9"
                                    md="9"
                                    sm="9"
                                    xs="9"
                                  >
                                    <Input
                                      id="iconURL"
                                      type="url"
                                      aria-label="url-input"
                                      placeholder="Url for this icon..."
                                      value={opt.iconURL}
                                      onChange={context.handleFormChange(index)}
                                    />
                                  </Column>
                                </Row>
                              </Box>
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  )}
                </Column>
              </Row>
            </div>
          </>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default MediaIconForm;
