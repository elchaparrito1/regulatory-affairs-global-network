import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import connectStore from 'connect-mongo';
import {
  userRoutes,
  sessionRoutes,
  forgotPasswordRoutes,
  resetPasswordRoutes,
  updatePasswordRoutes
} from './routes/index';
import {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME
} from './config';

(async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log('MongoDB connected');

    // Save the imported object into a constant app (conventional naming).
    const app = express();

    // Makes it more difficult for users to see that we are using Express. Deters hackers.
    app.disable('x-powered-by');

    // Middleware allows for parsing the body of an HTTP request and parse a JSON
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Will save session info into the database and allow a connection to be re-established if server shuts down or restarts.
    // This session info is automatically removed from database when the session is destroyed at logout.
    // Invoke connectStore passing in session middleware and save that into a constant MongoStore.
    const MongoStore = connectStore(session);

    // Tell the app to use the session middleware and pass in an options object.
    // saveUninitialized: false; This complies with laws that require permission before setting a cookie.
    // resave: false; This prevents unnecessary re-saves if the session wasn’t modified.

    // The store option is where to plug in the MongoStore.
    // mongooseConnection: mongoose.connection; This uses connection established above so as not to connect twice.
    // collection: ‘session’; This specifies the name of where the session info will be saved in DB.
    // ttl: parseInt(SESS_LIFETIME) / 1000; (“Time to live”) We want this to match our SESS_LIFETIME except connect-mongo uses seconds instead of milliseconds, so divide by 1000.
    // Also use ParseInt() here and below because some environment variables are often set as Strings in production.

    // Cookie some options:
    // sameSite: true; This helps prevent CSRF attacks.
    // secure: NODE_ENV === ‘production’; only set cookie to be secure during production. Being true requires an https-enabled website.
    // maxAge simply specifies the age for the cookie.
    app.use(
      session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: 'session',
          ttl: parseInt(SESS_LIFETIME) / 1000
        }),
        saveUninitialized: false,
        resave: false,
        cookie: {
          sameSite: true,
          secure: NODE_ENV === 'production',
          maxAge: parseInt(SESS_LIFETIME)
        }
      })
    );

    // Set up another router called apiRouter, and tell app to use this router for any path beginning with “/api”.
    // Then tell apiRouter to use userRoutes, for any path beginning with “/users”, or any other path that might be used (session, forgotpassword).
    const apiRouter = express.Router();
    app.use('/api', apiRouter);
    apiRouter.use('/users', userRoutes);
    apiRouter.use('/session', sessionRoutes);
    apiRouter.use('/forgotpassword', forgotPasswordRoutes);
    apiRouter.use('/resetpassword', resetPasswordRoutes);
    apiRouter.use('/resetpassword/updatepassword', updatePasswordRoutes);

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
