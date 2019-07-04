var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ConsultantSchema = new Schema({
    company: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    address1: {
        type: String,
        require: true
    },
    locality: {
        type: String,
        require: true
    },
    postal: {
        type: String,
        require: true
    },
    classifications: {
        type: Array,
        require: true
    },
    regions: {
        type: Array,
        require: true
    },
    mediaLinks: String,
    qualifications: String,
    profileImage: [{
        type: Schema.Types.ObjectId,
        ref: "ProfileImage"
  }]
});

var Consultant = mongoose.model("Consultant", ConsultantSchema);

// Export the Library model
module.exports = Consultant;