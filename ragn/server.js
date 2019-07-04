const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const routes = require("./routes");
const path = require("path");

// var dotenv = require("dotenv").config();

var PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

// Configure middleware
app.use(
    session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false //required    
    })
  )

//middleware for setting up a user object when anyone first comes to the application
function userSetup(req, res, next) {
    if (!req.session.customer) {
      req.session.customer = {};
      req.session.customer.loggedIn = false;
    }
    next();
  }

//using middleware across the entire application before any route gets hit.
app.use(userSetup);

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/../client/build")));
}

//Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ragndb";
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);
//added the line below because of a deprecation warning.
mongoose.set('useCreateIndex', true);
console.log(MONGODB_URI);

// //using router routes
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});