import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Register from './components/Register.js';
import HomePage from "./components/HomePage.js";
import Search from "./components/SearchPage.js";
import Profile from "./components/profilePage.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return(
    <div>
      <ToastContainer />
  <Router>
  <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />

  </Routes>
</Router>
</div>
  );
}

export default App;
