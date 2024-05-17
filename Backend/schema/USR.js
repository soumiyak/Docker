const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Name: String,
    Rollno: String,
    Batch: Number,
    degree: String,
    Branch: String,
    Sem: Number,
    Sec: String,
});

const Usr= mongoose.model('User', courseSchema);
module.exports = Usr;
