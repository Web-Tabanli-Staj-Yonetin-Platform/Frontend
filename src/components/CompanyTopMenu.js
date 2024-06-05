//Şirket kullanıcısı için Navigation Bar

import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';
import './profilePage.js';

function CompanyTopMenu() {
  return (
    <div className="top-menu">
      <div className="menu-item">
        <Link to="/CompanyHomePage">Anasayfa</Link>
      </div>
      <div className="menu-item">
        <Link to="/CompanyAddContent">İlan Oluştur</Link>
      </div>
      <div className="menu-item">
        <Link to="/CompanyViewContent">İlanları Görüntüle</Link>
      </div>
      <div className="menu-item"> 
      <Link to="/CompanyViewIntern">Stajyerleri Görüntüle</Link>
      </div>
      <div className="menu-item">
        <Link to="/CompanyProfile">Profil</Link>
      </div>
      <div className="menu-item" >
        <Link to="/">Çıkış Yap</Link>
      </div>
    </div>
  );
}
export default CompanyTopMenu;