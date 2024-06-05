//Stajyer kullanıcısı için Navigation Bar

import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';
import './profilePage.js';

function TopMenu() {
  return (
    <div className="top-menu">
      <div className="menu-item">
        <Link to="/HomePage">Anasayfa</Link>
      </div>
      <div className="menu-item">
        <Link to="/UserApplication">Başvurularım</Link>
      </div>
      <div className="menu-item">
        <Link to="/UserMyInternship">Stajım</Link>
      </div>
      <div className="menu-item"> 
      <Link to="/UserContentView">Başvuru Yap</Link>
      </div>
      <div className="menu-item">
        <Link to="/Profile">Profilim</Link>
      </div>
      <div className="menu-item" >
        <Link to="/">Çıkış Yap</Link>
      </div>
    </div>
  );
}

export default TopMenu;