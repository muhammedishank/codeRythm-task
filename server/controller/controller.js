const Contact = require("../model/Contact");

const register = async (req, res) => {
  try {
    // create new contact form
    const newContact = await new Contact({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });
    // save contact form and respond
    const contact = await newContact.save();
    res.status(200).json("Form registred Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { register };
