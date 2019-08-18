import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

class AuthPage extends React.Component {
  render() {
    return (
      <>
        <div className="bg-image">
          <Navigation />
          <Login />
          <br />
          <Signup />
          <br />
        </div>
      </>
    );
  }
}

export default AuthPage;
