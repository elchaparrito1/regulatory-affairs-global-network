import axios from 'axios';

export default {
  forgotpassword: email => {
    return axios.post('api/forgotpassword', { email });
  }
};
