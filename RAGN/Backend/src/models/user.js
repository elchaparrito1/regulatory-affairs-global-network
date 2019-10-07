import mongoose from 'mongoose';
import { compareSync, hashSync } from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    resetPasswordToken: {
      type: String,
      required: false
    },
    resetPasswordExpires: {
      type: Date,
      required: false
    },
    consultantInfo: {
      address: {
        type: String
      },
      classifications: {
        type: Array
      },
      regions: {
        type: Array
      },
      mediaLinks: {
        type: Array
      },
      qualifications: String
    }
  },
  { timestamps: true }
);

// Middleware for our UserSchema. This code will run right before our User instance saves.
// “this” is a pre method refers to the User instance. We double check that a password has been provided, then reset that password to its salted and hashed version.
// We also define an instance method, comparePasswords, which simply compares a plain text password with a User instance’s hashed password.
UserSchema.pre('save', function() {
  if (this.isModified('password')) {
    this.password = hashSync(this.password, 10);
  }
});

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);
export default User;
