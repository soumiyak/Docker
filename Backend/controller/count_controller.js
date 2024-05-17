const Countc = require('../schema/count');

// insert
module.exports.insertOne = async (req, res) => {
  const rollno = req.body.rollno;

  const existingCount = await Countc.findOne({ Rollno: rollno });
  if (existingCount) {
    console.error("Already Exists");
    return res.send({ msg: "Already Exists" });
  }

  const count = new Countc({
    Name: req.body.name,
    Rollno: rollno,
    courseId: req.body.checkedCourseIds,
    courseName: req.body.checkedCourseNames,
    Batch: req.body.batch,
    Degree: req.body.degree,
    Branch: req.body.branch,
    Sem: req.body.semester,
    Sec: req.body.section,
    count: req.body.count,
  });

  console.log(count);

  const savedCount = await count.save();
  res.send(savedCount);
};

// getall
module.exports.getall = async (req, res) => {
  const counts = await Countc.find({});
  console.log(counts);
  res.send(counts);
};
