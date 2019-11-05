import Joi from 'joi';
import express from 'express';
import User from '../models/user';
import { customerSignUp, consultantSignUp } from '../validations/user';
import { parseError, sessionizeUser } from '../util/helpers';
import { SENDGRID_API_KEY } from '../config';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

const userRouter = express.Router();
userRouter.post('', async (req, res) => {
  try {
    // Destructure the req.body and call the Joi.validate method passing in an object containing input from the user and our signUp validator.
    const {
      username,
      email,
      password,
      userType,
      company,
      phone,
      address,
      classifications,
      regions,
      mediaLinks,
      qualifications
    } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error(
        'Email address is already registered on another account. Please use a different email.'
      );
    }

    await Joi.validate(
      { email, password, company, username, phone },
      customerSignUp
    );

    // If the above passes, define a new User instance and attempt to save that user.
    if (userType === 'customer') {
      const newUser = new User({
        username,
        email,
        password,
        userType,
        company,
        phone
      });
      const sessionUser = sessionizeUser(newUser);
      await newUser.save();

      //If that passes, send back what the frontend should have access to.
      const msg = {
        to: email,
        from: 'mitchelltwaite11@gmail.com',
        templateId: 'd-1e03b18c2c4f4b128e8b2c78ecc8bd9f',
        subject: 'Welcome to RAGN',
        dynamic_template_data: {
          name: username,
          email: email,
          password: password
        }
      };

      sgMail.send(msg);

      req.session.user = sessionUser;
      res.send(sessionUser);
    } else {
      let consultantInfo = {
        address,
        classifications,
        regions,
        mediaLinks,
        qualifications
      };

      await Joi.validate(
        {
          email,
          password,
          company,
          username,
          phone,
          address,
          classifications,
          regions
        },
        consultantSignUp
      );

      const newUser = new User({
        username,
        email,
        password,
        userType,
        company,
        phone,
        consultantInfo
      });

      // console.log(newUser);

      const sessionUser = sessionizeUser(newUser);
      await newUser.save();

      // If that passes, send back what the frontend should have access to.
      const msg = {
        to: email,
        from: 'mitchelltwaite11@gmail.com',
        templateId: 'd-1e03b18c2c4f4b128e8b2c78ecc8bd9f',
        dynamic_template_data: {
          subject: 'Welcome to RAGN',
          name: username,
          email: email,
          password: password
        }
      };

      sgMail.send(msg);

      req.session.user = sessionUser;
      res.send(sessionUser);
    }
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default userRouter;
