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
      console.log(newUser);
      const sessionUser = sessionizeUser(newUser);
      await newUser.save();

      // If that passes, send back what the frontend should have access to.
      req.session.user = sessionUser;
      res.send(sessionUser);
    } else {
      const newUser = new User({
        username,
        email,
        password,
        userType,
        company,
        phone,
        consultantInfo: {
          country,
          address1,
          locality,
          postal,
          classifications,
          regions,
          mediaLinks,
          qualifications
        }
      });
      console.log(newUser);
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
