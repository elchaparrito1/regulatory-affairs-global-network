import React from 'react';
import BlankModal from '../../components/Modals/BlankModal';
import SignUpForm from '../../components/Forms/SignUpForm';
import SignUpContext from '../../contexts/SignupContext';

import { Row, Column, Box, Label, Button } from './styled';
import './Signup.css';

const Signup = () => {
  return (
    <>
      <SignUpContext.Consumer>
        {context => (
          <div>
            <BlankModal
              isOpen={context.isOpen}
              handleModal={context.handleModal}
              header={<h1>Create your account</h1>}
              body={<SignUpForm />}
              footerMethod={context.handleSubmit}
              footer="Submit"
            />
            <Box>
              <Row>
                <Column lg="6" md="6" sm="6" xs="6">
                  <Label htmlFor="newUserSelection">New User?</Label>
                </Column>
                {/* <Column lg="2" md="2" sm="2" xs="2" /> */}
                <Column lg="6" md="6" sm="6" xs="6">
                  <Button
                    type="button"
                    onClick={context.handleModal}
                    aria-label="new-user-selection"
                  >
                    Register
                  </Button>
                </Column>
              </Row>
            </Box>
          </div>
        )}
      </SignUpContext.Consumer>
    </>
  );
};

export default Signup;
