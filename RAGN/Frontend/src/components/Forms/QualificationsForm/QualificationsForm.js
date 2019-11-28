import React from 'react';
import SignUpContext from '../../../contexts/SignupContext';
import { Row, Column, Input, Box, Remove, Span, FormLabel } from './styled';

class QualitifcationsForm extends React.Component {
  render() {
    return (
      <SignUpContext.Consumer>
        {context => (
          <>
            <FormLabel htmlFor="qualificationsInput">Qualifications</FormLabel>
            <Input
              id="qualification"
              type="text"
              aria-label="qualifications-input"
              placeholder="Your qualifications..."
              value={context.qualification}
              autoComplete="off"
              onChange={context.handleInputChange('qualification')}
            />
            <Span onClick={context.handleQualChange}>&#43;</Span>
            <div>
              <Row>
                <Column lg="12" md="12" sm="12" xs="12">
                  {context.qualifications && (
                    <ul>
                      <div>
                        {context.qualifications.map((qual, index) => {
                          return (
                            <li key={index}>
                              <Box>
                                <Row
                                  style={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <Column lg="1" md="1" sm="1" xs="1">
                                    <Remove
                                      className="remove"
                                      aria-label="remove-button"
                                      onClick={() =>
                                        context.handleRemove(
                                          'qualifications',
                                          context.qualifications,
                                          index
                                        )
                                      }
                                    >
                                      &times;
                                    </Remove>
                                  </Column>
                                  <Column lg="11" md="11" sm="11" xs="11">
                                    <div
                                      style={{
                                        float: 'left',
                                        padding: '8px'
                                      }}
                                    >
                                      {qual}
                                    </div>
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

export default QualitifcationsForm;
