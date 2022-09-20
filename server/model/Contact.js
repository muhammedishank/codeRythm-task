const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please add a name"],
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      require: [true, "Please add an email"],
      max: 50,
    },
    subject: {
      type: String,
      require: [true, "Please add a subject"],
      max: 50,
    },
    message: {
      type: String,
      require: [true, "Please add a meassage"],
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
