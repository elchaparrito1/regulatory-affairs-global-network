import React from 'react';
import SignUpContext from '../../contexts/SignupContext';
import Select from 'react-select';
import 'react-dropdown/style.css';
import { Row, Column, Input, Box, Close } from './styled';
import './Media.css';

class MediaIcons extends React.Component {
  render() {
    // const { selectedOption, options } = this.state;
    // console.log(context.media);
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Select
              id="select"
              value={context.selectedOption}
              onChange={context.handleChanges}
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
                            <li
                              key={index}
                              //   onClick={() => this.handleClick(index)}
                            >
                              <Box>
                                <Row style={{ padding: '5px 0 5px 5px' }}>
                                  <Column lg="1" md="1" sm="1" xs="1">
                                    <Close
                                      className="close"
                                      onClick={() =>
                                        context.handleRemove(index)
                                      }
                                    >
                                      &times;
                                    </Close>
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
                                      type="text"
                                      value={context.opt.iconURL}
                                      onChange={() =>
                                        context.handleMediaChange(
                                          ('iconURL', index)
                                        )
                                      }
                                      placeholder="Url for this icon..."
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

export default MediaIcons;
