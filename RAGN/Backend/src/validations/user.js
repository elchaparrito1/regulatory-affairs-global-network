import Joi from 'joi';

// Define an email, username, and password each with validations tacked on.
const email = Joi.string()
  .email()
  .required()
  .error(errors => {
    return {
      message: 'Must enter a valid email'
    };
  });
const username = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .error(errors => {
    return {
      message: 'Username must contain between 3-30 alpha-numeric characters'
    };
  });

// By default, Joi provides a message if something is invalid.
// But for the password field it actually prints out the user's guessed password. A password should never be visible.
// So, create a custom message and dig into the options object to pass it in.
const message = `Password must be between 6-16 characters, 
    have at least one capital letter, 
    one lowercase letter, one digit, 
    one special character.`;

// Then use a regular expression to get nitty-gritty specific for our password validation.
const password = Joi.string()
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  .error(errors => {
    return {
      message: message
    };
  });

// Use email, username, and password to create and export two Joi objects.
export const signUp = Joi.object().keys({
  email,
  username,
  password
});

export const signIn = Joi.object().keys({
  email,
  password
});
