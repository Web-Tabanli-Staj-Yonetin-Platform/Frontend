//Stajyer Kullanıcısı İlanı Görüntüle Sayfası <- Şirket kullanıcısı İlanları Görünütle Sayfasından Buraya Yönlendirildi
//Oluşturulan İlanı Görüntüle Bölümü
/*Şirket kullanıcısı oluşturmuş olduğu ilanı bu bölümde görebilir eğer isterse ilan için daha önceden girmiş olduğu
bilgileri güncelleyebilir*/

import React, { useState, useEffect  } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './CompanyTopMenu';
import axios from 'axios';

function ProfilePage() {
  const [contentname, setContentName] = useState('');
  const [scope, setScope] = useState('');
  const [wanted, setWanted] = useState('');
  const [language, setLanguage] = useState('');
  const [department, setDepartment] = useState('');

  const Api_Url = 'http://localhost:8080';
  const contentId = localStorage.getItem('contentId'); 

  useEffect(() => {   
    const fetchContentData = async () => {
      try {
        const response = await axios.get(`${Api_Url}/content/${contentId}`);
        const contentData = response.data;
        setContentName(contentData.contentname);
        setScope(contentData.scope);
        setWanted(contentData.wanted);
        setLanguage(contentData.language);
        setDepartment(contentData.department);
      } catch (error) {
        console.error('Content fetch error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchContentData();
  }, []);

  const handleContentUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${Api_Url}/content/${contentId}`, {
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
          <h2>Oluşturulmuş İlan</h2>
          <form onSubmit={handleContentUpdate}> 
            <div className="info-container">
              <label>İlanın İsmi:</label>
              <input
                type="text"
                value={contentname}
                onChange={(e) => setContentName(e.target.value)}
              />
            </div > 
            <div className="info-container">
              <label>İlanın Alanı:</label>
              <input
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>İstenenler:</label>
              <input
                type="text"
                value={wanted}
                onChange={(e) => setWanted(e.target.value)}
             />
            </div>
            <div className="info-container">
              <label>Yabancı Dil:</label>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Bölüm:</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="bottom-button">
              <button type="submit">İlanı Kaydet</button>
            </div>
          </form>          
        </div>            
      </div>
    </div>
  );
}

export default ProfilePage;