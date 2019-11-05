import express from 'express';
import User from '../models/user';

const resetPasswordRouter = express.Router();

resetPasswordRouter.get('', async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.query.resetPasswordToken,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    });
    // console.log(user);
    if (user === null) {
      console.log('password reset link is invalid or has expired');
      res.json('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        username: user.username,
        message: 'password reset link a-ok'
      });
    }
  } catch (err) {
    res.json(err);
  }
});

export default resetPasswordRouter;
