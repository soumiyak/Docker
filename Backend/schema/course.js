const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId:String,
  courseName:String,
  ccredits:Number,
  date: String
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
