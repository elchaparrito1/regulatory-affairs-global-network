import axios from "axios";

export default { 
    customerSignup: (customerObj) => {
        return axios.post("/api/auth/customer-signup", customerObj);
    },
    consultantSignup: (consultantObj) => {
        return axios.post("/api/auth/consultant-signup", consultantObj);
    },
    customerLogin: (loginData) => {
        return axios.post('/api/auth/customer-login', loginData);
    },
    consultantLogin: (loginData) => {
        return axios.post('/api/auth/consultant-login', loginData);
    },
    logout: () => {
        return axios.get('api/auth/logout');
    }
};