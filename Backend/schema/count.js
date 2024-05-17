const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
  Name: String,
  Rollno: String, 
  courseId: [String],
  courseName: [String],
  Batch: Number,
  Degree: String,
  Branch: String,
  Sem: Number,
  Sec: String,
  count: Number
});

const ADCount = mongoose.model('ADCount', countSchema);

module.exports = ADCount;
