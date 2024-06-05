//Şirket Kullanıcısı İlan Oluşturma Sayfası
//Şirket kullanıcısı staj programları (yani ilanlar) oluştura bileceği bölüm.

import React, { useState, useEffect  } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './CompanyTopMenu';
import axios from 'axios';

function CompanyAddContent() {
  const [contentname, setContentName] = useState('');
  const [scope, setScope] = useState('');
  const [wanted, setWanted] = useState('');
  const [language, setLanguage] = useState('');
  const [department, setDepartment] = useState('');

  const Api_Url = 'http://localhost:8080';

  const handleContentAdd = async () => {
    const companyId = localStorage.getItem('companyId');
    try {
      const response = await axios.post(`${Api_Url}/api/postAddContent/${companyId}`, {
        contentname,
        scope,
        wanted,
        language,
        department
      });
      console.log(response.data); // Log the response from the server
      // Optionally, show a success message to the user
    } catch (error) {
      console.error('Item add error:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="anasayfa-container">
      <TopMenu/>
      <Circle/>  
      <div className="content-container">      
        <div className="profile-info">
          <h2>İlan Oluşturma</h2>
          <form onSubmit={handleContentAdd}> 
            <div className="info-container">
              <label>İlanın İsmi:</label>
              <textarea
                type="text"
                value={contentname}
                onChange={(e) => setContentName(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>İlanın Alanı:</label>
              <textarea
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>İstenenler:</label>
              <textarea
                type="text"
                value={wanted}
                onChange={(e) => setWanted(e.target.value)}
             />
            </div>
            <div className="info-container">
              <label>Yabancı Dil:</label>
              <textarea
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Bölüm:</label>
              <textarea
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="bottom-button">
              <button type="submit">İlanı Oluştur</button>
            </div>
          </form>          
        </div>            
      </div>
    </div>
  );
}

export default CompanyAddContent;