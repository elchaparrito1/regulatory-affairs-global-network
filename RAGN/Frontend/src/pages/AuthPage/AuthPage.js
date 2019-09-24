import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import MyFormContext from '../../components/MyFormContext/MyFormContext';

class AuthPage extends React.Component {
  render() {
    return (
      <>
        <div className="bg-image">
          <Navigation />
          <Login />
          <br />
          <MyFormContext>
            <Signup />
          </MyFormContext>
          <br />
        </div>
      </>
    );
  }
}

export default AuthPage;
