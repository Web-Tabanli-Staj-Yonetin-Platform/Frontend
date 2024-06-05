import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectPage from './components/selectionPage.js';
import LoginPage from './components/LoginPage.js';
import Register from './components/Register.js';
import HomePage from "./components/HomePage.js";
import Search from "./components/SearchPage.js";
import Profile from "./components/profilePage.js";

import UserApplication from './components/UserApplication.js';
import UserContentView from './components/UserContentView.js';
import UserContent from './components/UserContent.js';
import UserInternshipRating from './components/UserInternshipRating.js';
import UserMyInternship from './components/UserMyInternship.js';

import CompanyLogin from './components/CompanyLogin.js';
import CompanyRegister from './components/CompanyRegister.js';
import CompanyHomePage from './components/CompanyHomePage.js';
import CompanyAddContent from './components/CompanyAddContent.js';
import CompanyViewContent from './components/CompanyViewContent.js';
import CompanyInternshipApplications from './components/CompanyInternshipApplications.js';
import CompanySingleContent from './components/CompanySingleContent.js';
import CompanyViewIntern from './components/CompanyViewIntern.js';
import CompanyInternRating from './components/CompanyInternRating.js';
import CompanyProfile from "./components/CompanyProfile.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return(
    <div>    
      <ToastContainer />
  <Router>
  <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/SelectPage" element={<SelectPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HomePage" element={<HomePage />} />

        <Route path="/Search" element={<Search />} />

        <Route path="/Profile" element={<Profile />} />

        <Route path="/UserApplication" element={<UserApplication />} />

        <Route path="/UserContentView" element={<UserContentView />} />
        <Route path="/UserContent" element={<UserContent />} />
        
        <Route path="/UserMyInternship" element={<UserMyInternship />} />
        <Route path="/UserInternshipRating" element={<UserInternshipRating />} />


        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyHomePage" element={<CompanyHomePage />} />

        <Route path="/CompanyAddContent" element={<CompanyAddContent />} />

        <Route path="/CompanyViewContent" element={<CompanyViewContent />} />
        <Route path="/CompanyInternshipApplications" element={<CompanyInternshipApplications />} />
        <Route path="/CompanySingleContent" element={<CompanySingleContent />} />

        <Route path="/CompanyViewIntern" element={<CompanyViewIntern />} />
        <Route path="/CompanyInternRating" element={<CompanyInternRating />} />

        <Route path="/CompanyProfile" element={<CompanyProfile />} />
  </Routes>
</Router>
</div>
  );
}

export default App;
