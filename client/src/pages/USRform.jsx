import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EnrollForm() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [batch, setBatch] = useState(0);
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState(0);
  const [section, setSection] = useState('');
  const [courseData, setCourseData] = useState([]);
  const [clickCounts, setClickCounts] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get('http://192.168.49.2:30469/User/course');
        setCourseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseData();
  }, []);

  function handleCheckboxChange(event, courseId, courseName) {
    if (event.target.checked) {
      setClickCounts(prevClickCounts => [
        ...prevClickCounts,
        { courseId, courseName, count: 1 },
      ]);
      console.log(`The checkbox for course ${courseId} has been checked.`);
    } else {
      setClickCounts(prevClickCounts =>
        prevClickCounts.filter(course => course.courseId !== courseId)
      );
      console.log(`The checkbox for course ${courseId} has been unchecked.`);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const checkedCourses = clickCounts.filter((course) => course && course.count > 0).map((course) => ({
      courseId: course.courseId,
      courseName: course.courseName,
      count: course.count,
    }));
  
    const totalCount = checkedCourses.reduce((total, course) => total + course.count, 0);
    const checkedCourseIds = checkedCourses.map((course) => course.courseId);
  
    console.log(`Checked course IDs: `, checkedCourseIds);
    console.log(`Checked course names: `, checkedCourses);
    console.log(`Total count: `, totalCount);
  
    const data = {
      Name: name,
      Rollno: rollNo,
      courseId: checkedCourseIds,
      courseName: checkedCourses.map((course) => course.courseName),
      Batch: batch,
      Degree: degree,
      Branch: branch,
      Sem: semester,
      Sec: section,
      count: totalCount,
    };
  
    console.log(data);
  
    try {
      const response = await axios.post('http://192.168.49.2:30469/Admin/ADMcount', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <div>
      <div className="title">
        <h1>NPTEL Enrollment Confirmation</h1>
      </div>

      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputname">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inName"
              name="inName"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputrno">
            Roll no
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inRollno"
              name="inRollno"
              placeholder="Enter Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputbatch">
            Batch
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputBatch"
              name="inputBatch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            >
              <option value="">Select Batch</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>

        {/* Semester dropdown */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputsemester">
            Semester
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inSemester"
              name="inSemester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>

        {/* Degree dropdown */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputdegree">
            Degree
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputDegree"
              name="inputDegree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            >
              <option value="">Select Degree</option>
              <option value="B.E">B.E</option>
              <option value="B.Sc">B.Sc</option>
              <option value="B.Tech">B.Tech</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>

        {/* Branch dropdown */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputbranch">
            Branch
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputBranch"
              name="inputBranch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              <option value="AI-DS">AI-DS</option>
              <option value="AI-ML">AI-ML</option>
              <option value="Automobile">Automobile</option>
              <option value="Chemical">Chemical</option>
              <option value="Civil">Civil</option>
              <option value="CSD">CSD</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Food Tech">Food Tech</option>
              <option value="IT">IT</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Mechatronics">Mechatronics</option>
              <option value="Computer Systems and Design">Computer Systems and Design</option>
              <option value="Information Systems">Information Systems</option>
              <option value="Software Systems">Software Systems</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>

        {/* Section dropdown */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="inputsection">
            Section
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputSection"
              name="inputSection"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="NIL">NIL</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>

        {/* Submit button */}
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button className="btn" type="submit" value="confirm" id="confirm">
              Confirm
            </button>
          </div>
        </div>
      </form>

      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th></th>
              <th scope="col"></th>
              <th scope="col">Course ID</th>
              <th scope="col">Courses</th>
              <th scope="col">Credits</th>
              <th scope="col">Date of Examination</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((values, i) => (
              <tr key={values.courseId}>
                <td>
                <input
              type="checkbox"
              id={values.courseId}
              name={values.courseName}
              onChange={(e) => handleCheckboxChange(e, values.courseId, values.courseName)}
/>


                </td>
                <td>{i + 1}</td>
                <td>{values.courseId}</td>
                <td>{values.courseName}</td>
                <td>{values.credits}</td>
                <td>{values.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollForm;
