const mongoose = require("mongoose");

const phoneNumberSchema = new mongoose.Schema({
  number: { type: String, required: true },
  type: { type: String, required: true },
});

const contactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String },
  birthday: { type: Date },
  phoneNumbers: [phoneNumberSchema],
  address: { type: String },
  profileImage: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
