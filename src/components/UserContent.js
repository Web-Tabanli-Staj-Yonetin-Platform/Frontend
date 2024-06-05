//Stajyer Kullanıcısı İncele Sayfası
//Stajyer kullanıcısının başvuru yapabileceği ilan
//Bu ilanı eşleşme algoritması sonucu eğer kullanıcı eşleşirse görebilcek ve bu ilana başvuru yapabilecek

/*Stajyer burada ilan ile alakalı; 
ilanı oluşturan şirketin ismi, ilanın ismi, ilanın alanı,
ilanda istenenler, ilanda istenen yabancı dil, ilanda istenen bölüm ve ilan ile stajyerin eşleşme skoru
kısımları görücek ve isterse bu ilana başvuru yapıcak. */

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
import axios from 'axios';

function UserContentPage() {
  const [companyName, setCompanyName] = useState('');
  const [contentName, setContentName] = useState('');
  const [scope, setScope] = useState('');
  const [wanted, setWanted] = useState('');
  const [language, setLanguage] = useState('');
  const [department, setDepartment] = useState('');
  const [matchScore, setMatchScore] = useState('');

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchContentData = async () => {
      const contentId = localStorage.getItem('contentId');
      try {
        const response = await axios.get(`${Api_Url}/content/${contentId}`);
        const contentData = response.data;
        setCompanyName(contentData.company_name);
        setContentName(contentData.content_name);
        setScope(contentData.scope);
        setWanted(contentData.requirements);
        setLanguage(contentData.languages_required);
        setDepartment(contentData.department);
        setMatchScore(contentData.match_score);
      } catch (error) {
        console.error('Content fetch error:', error);
      }
    };
    fetchContentData();
  }, []);

  const handleApplicationSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    const contentId = localStorage.getItem('contentId');
    try {
      const response = await axios.post(`${Api_Url}/applications`, {
        userId,
        contentId,
        companyname: companyName,
        contentname: contentName,
        scope,
        wanted,
        language,
        department
      });
      console.log(response.data); // Başvuru yanıtını logla
      // Başvuru başarılı mesajını göster
    } catch (error) {
      console.error('Application submission error:', error);
      // Hata mesajını göster
    }
  };

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-info">
          <h2>Staj Bilgileri</h2>
          <form onSubmit={handleApplicationSubmit}>
            <div className="info-container">
              <label>Şirket İsmi:</label>
              <textarea
                type="text"
                value={companyName}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Staj İsmi:</label>
              <textarea
                type="text"
                value={contentName}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Stajın Alanı:</label>
              <textarea
                type="text"
                value={scope}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>İstenenler:</label>
              <textarea
                type="text"
                value={wanted}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Yabancı Dil:</label>
              <textarea
                type="text"
                value={language}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Bölüm:</label>
              <textarea
                type="text"
                value={department}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Eşleşme Skoru:</label>
              <textarea
                type="text"
                value={matchScore}
                readOnly
              />
            </div>
            <div className="bottom-button">
              <button type="submit">Başvuru Yap</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserContentPage;
