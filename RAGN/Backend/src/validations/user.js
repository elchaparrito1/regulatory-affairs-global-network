import Joi from 'joi';

// Define an company, email, username, password, phone number, region(s), classification(s), and mediaLinks each with validations tacked on.
const email = Joi.string()
  .email()
  .required()
  .error(errors => {
    return {
      message: 'Email must contain @ symbol and valid domain.'
    };
  });

// By default, Joi provides a message if something is invalid.
// But for the password field it actually prints out the user's guessed password. A password should never be visible.
// So, create a custom message and dig into the options object to pass it in.
const message = `Invalid password. Follow instructions given for valid password entry.`;

// Then use a regular expression to get nitty-gritty specific for our password validation.
const password = Joi.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  .error(errors => {
    return {
      message: message
    };
  });

const company = Joi.string()
  .min(1)
  .required()
  .error(errors => {
    return {
      message:
        'Must include company name. If for personal use, enter "private" into field.'
    };
  });

const username = Joi.string()
  .regex(/^[a-zA-Z_ ]*$/)
  .min(3)
  .max(30)
  .required()
  .error(errors => {
    return {
      message:
        'Contact name must contain between 3-30 alpha-numeric characters.'
    };
  });

// And phone number
const phone = Joi.string()
  .min(12)
  .max(20)
  .required()
  .error(errors => {
    return {
      message:
        'Phone number must contain at least 12 digits. "+" symbol and country code will save automatically with entry.'
    };
  });

const address = Joi.string()
  .min(1)
  .required()
  .error(errors => {
    return { message: 'Please entered a current business address.' };
  });

const classifications = Joi.array()
  .min(1)
  .required()
  .error(errors => {
    return { message: 'Please select classification(s) of expertise.' };
  });

const regions = Joi.array()
  .min(1)
  .required()
  .error(errors => {
    return { message: 'Please select region(s) of expertise.' };
  });

// Use email, username, and password to create and export two Joi objects.
export const customerSignUp = Joi.object().keys({
  email,
  password,
  company,
  username,
  phone
});

export const consultantSignUp = Joi.object().keys({
  email,
  password,
  company,
  username,
  phone,
  address,
  classifications,
  regions
});

export const signIn = Joi.object().keys({
  email,
  password
});
