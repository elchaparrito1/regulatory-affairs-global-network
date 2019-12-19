import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
// import API from "../../utils/API";
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="bg-image">
        <Navigation />

        <Link to="/login-signup">Login</Link>
        <br />
      </div>
    );
  }
}

export default Home;
