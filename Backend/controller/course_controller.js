const Coursec = require('../schema/course');

// insert
module.exports.insertcourse = async (req, res) => {
   const course = new Coursec({
    courseId: req.body.courseId,
    courseName: req.body.courseName,
    ccredits: Number(req.body.ccredits),
    date:req.body.date
  });
    const result = await Coursec.findOne({courseId: req.body.courseId});
    if (result) {
    res.send({ msg: "Course Already Exists" });
    }
    const saved_course = await course.save();
    res.send(saved_course);
};

// read operation
module.exports.getall = async (req, res) => {
  const course = await Coursec.find({});
  res.send(course)
};

// get one course
module.exports.getone = async (req, res) => {
  const course = await Coursec.findOne({ courseId: req.params.id });
  if (course) {
    res.send(course);
  } else {
    res.send({ msg: "Course not found!" });
  }
};

// update operation
module.exports.updateone = async (req, res) => {
  const course = await Coursec.findOneAndUpdate({ courseId: req.params.id },
    { date: req.body.date}
  );
  console.log(course);
  if (course) {
    res.send("Updated Successfully");
  } else {
    res.send("Course Doesn't Exist!");
  }
};

// delete operation
module.exports.deleteone = async (req, res) => {
  const course = await Coursec.findOneAndDelete({courseId: req.params.courseId });
  if (course) {
    res.send("Course Deleted Sucessfully!");
  } else {
    res.send("Course Doesn't Exist!");
  }
};
