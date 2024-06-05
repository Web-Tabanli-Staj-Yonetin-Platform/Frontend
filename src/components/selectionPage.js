//Kullanıcı Seçim Sayfası

import React from 'react';
import './selectionPage.css';
import './LoginPage.js';
import './CompanyLogin.js';
import Button from './Button';
import Circle from './circles';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function SelectionPage() {
  return (
    <div className="login-container">
       <ToastContainer />
      <div className="login-form">
        
        <h1>Hoş Geldin!</h1>
        <form>
          <div className="form-group">
            <Link className="btn" to="/CompanyLogin">Şirket Girişi</Link> 
          </div>
          <div className="form-group">
            <Link className="btn" to="/LoginPage">Stajyer Girişi</Link>
          </div>
        </form>
        <Circle />
      </div>
    </div>
  );
};

export default SelectionPage;