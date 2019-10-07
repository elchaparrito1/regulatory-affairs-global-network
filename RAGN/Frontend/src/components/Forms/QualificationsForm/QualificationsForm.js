import React from 'react';
import SignUpContext from '../../../contexts/SignupContext';
import { Row, Column, Input, Box, Close, Button } from './styled';

class QualitifcationsForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <Input
              id="qualifications"
              type="text"
              placeholder="Your qualifications..."
              value={context.qualifications}
              autoComplete="off"
              onChange={context.handleInputChange('qualifications')}
            />
            <Button>Add</Button>
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  {/* {context.media && (
                    <ul>
                      <div>
                        {context.media.map((opt, index) => {
                          return (
                            <li key={index}>
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
                                  ></Column>
                                </Row>
                              </Box>
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  )} */}
                </Column>
              </Row>
            </div>
          </>
        )}
      </SignUpContext.Consumer>
    );
  }
}

export default QualitifcationsForm;
