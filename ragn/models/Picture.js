var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PictureSchema = new Schema({
  file: String,
  description: String,
  style: String,
  placement:String,
  consultant:{
    type: Schema.Types.ObjectId,
    ref: "Consultant"
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
});

var Picture = mongoose.model("ProfileImage", PictureSchema);

// Export the Pictures model
module.exports = Picture;