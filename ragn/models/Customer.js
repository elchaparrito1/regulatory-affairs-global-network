const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const CustomerSchema = new Schema({
  company: {
    type: String,
    require: true
  },
  contact: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  resetPasswordToken: {
    type: String,
    require: false
  },
  resetPasswordExpires: {
    type: Date,
    require: false
  },
  profileImage: [{
    type: Schema.Types.ObjectId,
    ref: "ProfileImage"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the Library model
module.exports = Customer;