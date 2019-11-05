import express from 'express';
import { SENDGRID_API_KEY } from '../config';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
import User from '../models/user';
const crypto = require('crypto');

const forgotPasswordRouter = express.Router();

forgotPasswordRouter.post('', async (req, res) => {
  const { email } = req.body;
  try {
    if (email === '') {
      throw 'blank email';
    }
    const token = crypto.randomBytes(20).toString('hex');
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 180000
        }
      },
      { useFindAndModify: false }
    );
    if (user === null) {
      throw 'not found';
    } else {
      let resetURL;
      if (process.env.NODE_ENV === 'production') {
        resetURL = ``;
      } else {
        resetURL = `http://localhost:3000/resetpassword/${token}`;
      }

      const msg = {
        to: email,
        from: 'mitchelltwaite11@gmail.com',
        templateId: 'd-d5a6b84c5175438f8f3c7057f9d6c93d',
        dynamic_template_data: {
          resetURL: resetURL
        }
      };

      sgMail.send(msg);
      res.status(200).send('email sent');
    }
  } catch (err) {
    res.json(err);
  }
});

export default forgotPasswordRouter;
