import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courseData, setCourseData] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [credits, setCredits] = useState('');
  const [examDate, setExamDate] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = () => {
    axios.get('http://192.168.49.2:30469/User/course')
      .then(response => {
        setCourseData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInsert = event => {
    event.preventDefault();

    if (id === '' || name === '' || credits === '' || examDate === '') {
      alert('All fields are necessary');
      return;
    }

    axios.post('http://192.168.49.2:30469/Admin/course', {
      courseId: id,
      courseName: name,
      ccredits: credits,
      date: examDate
    })
      .then(response => {
        setResult(JSON.stringify(response.data));
        fetchCourseData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = event => {
    event.preventDefault();

    if (id === '') {
      alert('All fields are necessary');
      return;
    }

    axios.delete(`http://192.168.49.2:30469/Admin/course/${id}`)
      .then(response => {
        setResult(response.data);
        fetchCourseData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = event => {
    event.preventDefault();

    if (id === '') {
      alert('All fields are necessary');
      return;
    }
  axios.put(`http://192.168.49.2:30469/Admin/course/${id}`, {
    courseId: id,
    courseName: name,
    ccredits: credits,
    date: examDate
  })
  .then(response => {
    setResult(response.data);
    fetchCourseData();
  })
  .catch(error => {
    console.error(error);
  });
}

   

  return (
    <div>
      <div className="title">
        <h1>Course List for AIDS</h1>
      </div>

      <div className="container">
        <form className="form-horizontal">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputCourseId">Course ID</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputCourseId"
                name="courseId"
                placeholder="Enter Course ID"
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputCourseName">Course Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputCourseName"
                name="courseName"
                placeholder="Enter Course Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputCredits">Credits</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputCredits"
                name="credits"
                placeholder="Enter Credits"
                value={credits}
                onChange={e => setCredits(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="inputExamDate">Date of Examination</label>
            <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputExamDate"
              name="examDate"
              placeholder="Enter Exam Date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
    />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button className="btn" type="submit" value="insert" id="insert" onClick={handleInsert}>Insert</button>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button className="btn" type="submit" value="delete" id="delete" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </form>
        <table className="content-table">
          <thead>
            <tr>
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
                <td>{i + 1}</td>
                <td>{values.courseId}</td>
                <td>{values.courseName}</td>
                <td>{values.ccredits}</td>
                <td>{values.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
