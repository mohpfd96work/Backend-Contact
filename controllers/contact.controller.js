const Contact = require("../models/contact.model");

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send();
    }
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) {
      return res.status(404).send();
    }
    res.send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).send();
    }
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
};
