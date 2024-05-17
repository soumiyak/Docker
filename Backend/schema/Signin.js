const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  mail: String,
  password: String
});

const adminSchema = new mongoose.Schema({
  name: String,
  password: String
});

module.exports = {
  Signup: mongoose.model('nptel', signupSchema),
  admins: mongoose.model('admins', adminSchema)
};
