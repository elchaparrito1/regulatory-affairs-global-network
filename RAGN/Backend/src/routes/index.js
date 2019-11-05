// Index route will simply export an object containing all of our backend routes.
import userRoutes from './user';
import sessionRoutes from './session';
import forgotPasswordRoutes from './forgotpassword';
import resetPasswordRoutes from './resetpassword';
import updatePasswordRoutes from './updatepassword';

export {
  userRoutes,
  sessionRoutes,
  forgotPasswordRoutes,
  resetPasswordRoutes,
  updatePasswordRoutes
};
