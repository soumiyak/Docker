import React from "react";
import Login from "./pages/login";
import CourseList from "./pages/courseADM";
import { Route, Routes } from 'react-router-dom'
import EnrollForm from "./pages/USRform";
import ADMlogin from "./pages/admlogin";
import AdminLoginPanel from "./pages/Home";
function Allroutes() {
  return (
    <Routes>
      <Route path='/Admin/course' element={<CourseList />} />
      <Route path="/" element={<AdminLoginPanel />} />
      <Route path= "/User/form" element={<EnrollForm />}/>
      <Route path="User/Login" element={<Login />}/>
      <Route path="Admin/Login" element={<ADMlogin/>}/>
          </Routes>
  )
}

export default Allroutes;
