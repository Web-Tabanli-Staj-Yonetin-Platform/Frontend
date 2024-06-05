//Şirket Kullanıcısı AnaSayfası

import React from 'react';
import TopMenu from './CompanyTopMenu';
import Circle from './circles';
import './homePage.css'

function CompanyHomePage() {
  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
      </div>
      
    </div>
  );
}

export default CompanyHomePage;