import React from 'react';
import img from '../assets/images/nptel_logo.jpeg'
import './Home.css'
const AdminLoginPanel = () => {
  return (
    <div className="container">
      <div className="myform">
        <div style={{ color: 'rgb(255, 140, 0)' }}>
          <h1>LOGIN AS</h1>
        </div>
        <br />
        <br />
        <div className="conta">
          <div className="item-2">
            <div className="li">
              <a href="/User/Login">USER</a>
            </div>
            <br />
            <br />
            <div className="li">
              <a href="/Admin/Login">ADMIN</a>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={img} alt="NPTEL Logo" />
      </div>
    </div>
  );
};

export default AdminLoginPanel;
