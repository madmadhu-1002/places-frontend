import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './home/pages/Home';
import Login from './login/Login';
import Signup from './signup/Signup';


const App = () => {
  const users = [
    {
    id: Math.random(),
    username: '',
    email: '',
    password: '',
    confirmPassword: ''}
    // Add more users as needed
  ];

  const addUser = (user) => {
    users.push(user);
  };

  
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li key='1'>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li key='2'>
              <NavLink to="/login" activeclassname="active">
                Login
              </NavLink>
            </li>
            <li key='3'>
              <NavLink to="/signup" activeclassname="active">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home users={users}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup addUser={addUser} />} />
      </Routes>
      </div>
    </Router>
      
  )
}

export default App