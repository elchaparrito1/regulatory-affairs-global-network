import Joi from 'joi';
import express from 'express';
import User from '../models/user';
import { signUp } from '../validations/user';
import { parseError, sessionizeUser } from '../util/helpers';

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
      country,
      address1,
      locality,
      postal,
      classifications,
      regions,
      mediaLinks,
      qualifications
    } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      throw new Error(
        'User with email already found. Please use a different email.'
      );
    }

    await Joi.validate({ username, email, password }, signUp);

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

      // If that passes, send back what the frontend should have access to.
      req.session.user = sessionUser;
      res.send(sessionUser);
    } else {
      const consultantInfo = {
        country,
        address1,
        locality,
        postal,
        classifications,
        regions,
        mediaLinks,
        qualifications
      };

      for (var key in consultantInfo) {
        if (consultantInfo[key] === '') {
          throw new Error(
            'Please fill out all required fields for Consultant signup.'
          );
        }
      }

      const newUser = new User({
        username,
        email,
        password,
        userType,
        company,
        phone,
        consultantInfo
      });
      const sessionUser = sessionizeUser(newUser);
      await newUser.save();

      // If that passes, send back what the frontend should have access to.
      req.session.user = sessionUser;
      res.send(sessionUser);
    }
  } catch (err) {
    res.status(400).send(parseError(err));
  }
});

export default userRouter;
