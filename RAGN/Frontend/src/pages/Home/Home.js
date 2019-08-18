import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
// import API from "../../utils/API";
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
    company: '',
    contact: '',
    email: '',
    password: '',
    phone: '',
    regions: [],
    classifications: [],
    address: '',
    media: '',
    qualifications: [],
    emailCheck: ''
  };

  generateCapitals = str => {
    let result = [];
    str = str.split(' ').forEach(function(word) {
      result.push(
        word
          .slice(0)
          .charAt(0)
          .toUpperCase()
          .concat(word.slice(1))
      );
    });
    return result.join(' ');
  };

  render() {
    return (
      <div className="bg-image">
        <Navigation />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
        <br />
      </div>
    );
  }
}

export default Home;
