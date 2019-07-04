var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    customerSignup: (req, res) => {
        const { company, contact, email, phone } = req.body
        console.log("path reached", req.body);
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                // Store hash in your password DB.
                req.body.password = hash;
                    db.Customer.findOne({
                        email: email
                    }).then(newEmail => {
                        if (newEmail !== null) {
                            res.json("email already exists");
                        } else {
                        db.Customer.create(req.body).then(function(dbData) {
                            const customerObj = {
                                _id: dbData._id,
                                company: dbData.company,
                                contact: dbData.contact,
                                email: dbData.email,
                                password: dbData.password,
                                phone: dbData.phone
                            };
                            req.session.customer = customerObj;
                            req.session.customer.loggedIn = true;
                            res.json(dbData);
                        })
                        }
                    })
            });
        });
    },
    consultantSignup: (req, res) => {
        const { company, contact, email, phone } = req.body
        console.log("path reached", req.body);
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                // Store hash in your password DB.
                req.body.password = hash;
                    db.Consultant.findOne({
                        email: email
                    }).then(newEmail => {
                        if (newEmail !== null) {
                            res.json("email already exists");
                        } else {
                        db.Consultant.create(req.body).then(function(dbData) {
                            const consultantObj = {
                                _id: dbData._id,
                                company: dbData.company,
                                contact: dbData.contact,
                                email: dbData.email,
                                password: dbData.password,
                                phone: dbData.phone,
                                regions: dbData.regions,
                                classifications: dbData.classifications,
                                mediaLinks: dbData.mediaLinks,
                                qualifications: dbData.qualifications
                            };
                            req.session.consultant = consultantObj;
                            req.session.consultant.loggedIn = true;
                            res.json(dbData);
                        })
                        }
                    })
            });
        });
    },
    customerLogin: (req, res) => {
        // console.log(req.body);
        db.Customer.findOne({
          email: req.body.email
        })
          .populate("dbData")
          .then(userData => {
            console.log("User's info:", userData);
    
            // ***start of updated code*** if no match in db for email, comes back null
            if (userData === null) {
              console.log('user email not found');
              res.json('invalid');
            } 
            //if user data is not null then proceed to check if password matches
            else {
              bcrypt.compare(req.body.password, userData.password, function(err, pMatch) {
                //if password matches
                if (pMatch === true) {
                    req.session.customer = {
                        _id: userData._id,
                        company: userData.company,
                        contact: userData.contact,
                        email: userData.email,
                        password: userData.password,
                        phone: userData.phone
                    };
                    req.session.customer.loggedIn = true;
                    res.json(req.session.customer);
                }
                //if password doesn't match
                else {
                  console.log("invalid password");
                  res.json("invalid");
                }
            })
          }
        })     
      },
      consultantLogin: (req, res) => {
        // console.log(req.body);
        db.Consultant.findOne({
          email: req.body.email
        })
          .populate("dbData")
          .then(userData => {
            console.log("User's info:", userData);
    
            // ***start of updated code*** if no match in db for email, comes back null
            if (userData === null) {
              console.log('user email not found');
              res.json('invalid');
            } 
            //if user data is not null then proceed to check if password matches
            else {
              bcrypt.compare(req.body.password, userData.password, function(err, pMatch) {
                //if password matches
                if (pMatch === true) {
                    req.session.customer = {
                        _id: userData._id,
                        company: userData.company,
                        contact: userData.contact,
                        email: userData.email,
                        password: userData.password,
                        phone: userData.phone,
                        regions: userData.regions,
                        classifications: userData.classifications,
                        mediaLinks: userData.mediaLinks,
                        qualifications: userData.qualifications
                    };
                    req.session.consultant.loggedIn = true;
                    res.json(req.session.consultant);
                }
                //if password doesn't match
                else {
                  console.log("invalid password");
                  res.json("invalid");
                }
            })
          }
        })     
      },
      session: (req, res) => {
        res.json(req.session.customer);
      },
      logout: (req, res) => {
        if(req.session) {
        req.session.customer = {}
        res.json("user logged out")
    }
  }
};