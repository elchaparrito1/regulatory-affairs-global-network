import express from 'express';
import User from '../models/user';
const bcrypt = require('bcryptjs');
import Joi from 'joi';
import { updatePassword } from '../validations/user';
const updatePasswordRouter = express.Router();

updatePasswordRouter.put('', async (req, res) => {
  try {
    let password = req.body.password;
    await Joi.validate({ password }, updatePassword);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, async function(err, hash) {
        // console.log(hash);
        req.body.password = hash;
        const user = await User.findOneAndUpdate(
          { resetPasswordToken: req.body.passwordToken },
          {
            $set: {
              password: hash,
              resetPasswordToken: null,
              resetPasswordExpires: null
            }
          },
          { useFindAndModify: false }
        );
        if (user !== null) {
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        } else {
          console.log('no user exists in db to update');
          res.status(404).json('no user exists in db to update');
        }
      });
    });
  } catch (err) {
    res.json(err);
  }
});

export default updatePasswordRouter;
