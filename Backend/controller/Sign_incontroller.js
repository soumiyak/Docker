const { Signup, admins } = require('../schema/Signin');

module.exports.insertstd = async (req, res) => {
  const np = new Signup({
    name: req.body.name,
    rollno: req.body.rollno,
    mail: req.body.mail,
    password: req.body.password
  });

  const saved_st = await np.save();
  res.send(saved_st);
};

module.exports.getstudent = async (req, res) => {
  const student = await Signup.findOne({ rollno: req.params.rollno });
  if (student) {
    res.send(student);
  } else {
    res.send({ msg: "student not found!" });
  }
};

module.exports.insertadmin = async (req, res) => {
  const bk = new admins({
    name: req.body.name,
    password: req.body.password
  });
  const savedbks = await bk.save();
  res.send(savedbks);
};

module.exports.getadmin = async (req, res) => {
  console.log("received");
  const book = await admins.findOne({ name: req.params.name });
  if (book) {
    res.send(book);
  } else {
    res.send({ msg: "Not found!" });
  }
};
