import mongoose from 'mongoose';
import { compareSync, hashSync } from 'bcryptjs';

// const ConsultantSchema = new mongoose.Schema({
//   country: {
//     type: String
//   },
//   address1: {
//     type: String
//   },
//   locality: {
//     type: String
//   },
//   postal: {
//     type: String
//   },
//   classifications: {
//     type: Array
//   },
//   regions: {
//     type: Array
//   },
//   mediaLinks: String,
//   qualifications: String
// });

// mongoose.model('ConsultantInfo', ConsultantSchema);

const UserSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      required: true
    },
    username: {
      type: String,
      validate: {
        validator: username => User.doesNotExist({ username }),
        message: 'Username already exists'
      }
    },
    email: {
      type: String,
      validate: {
        validator: email => User.doesNotExist({ email }),
        message: 'Email already exists'
      }
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
      country: {
        type: String
      },
      address1: {
        type: String
      },
      locality: {
        type: String
      },
      postal: {
        type: String
      },
      classifications: {
        type: Array
      },
      regions: {
        type: Array
      },
      mediaLinks: String,
      qualifications: String
    }
  },
  { timestamps: true }
);

// Middleware for our UserSchema. This code will run right before our User instance saves.
// “this” is a pre method refers to the User instance. We double check that a password has been provided, then reset that password to its salted and hashed version.
// Define our custom validator, doesNotExist, which is a class method defined on our UserSchema. Using two mongoose methods and a comparison operator we can determine if a user exists or not. This is an asynchronous step, so we use async/await.
// We also define an instance method, comparePasswords, which simply compares a plain text password with a User instance’s hashed password.
UserSchema.pre('save', function() {
  if (this.isModified('password')) {
    this.password = hashSync(this.password, 10);
  }
});

UserSchema.statics.doesNotExist = async function(field) {
  return (await this.where(field).countDocuments()) === 0;
};

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);
export default User;
