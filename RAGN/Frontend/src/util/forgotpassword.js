import axios from 'axios';

export default {
  forgotpassword: email => {
    return axios.post('api/forgotpassword', { email });
  },

  resetpassword: token => {
    return axios.get('/api/resetpassword', token);
  },

  updatepassword: passwordObj => {
    return axios.put('/api/resetpassword/updatepassword', passwordObj);
  }
};
