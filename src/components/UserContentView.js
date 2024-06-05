//Stajyer Kullanıcısı Başvuru Yap Sayfası
//Stajyer kullanıcısı bu bölümde eşleşme skoruna göre eşleştiği ilanları görücek (İlanın ismini, eşleşme skorunu).
//Stajyer kullanıcısı ilan için "İncele" butonuna basarak ilana başvuru yapabileceği sayfaya erişebilecek

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
import axios from 'axios';

function UserContentView() {
  const [contents, setContents] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchInternshipData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Kullanıcı ID'sini local storage'dan alıyoruz
        const response = await axios.get(`${Api_Url}/api/getUserInternships/${userId}`);
        const ContentsData = response.data;
        setContents(ContentsData);
      } catch (error) {
        console.error('Internship fetch error:', error);
      }
    };
    fetchInternshipData();
  }, []);

  const handleViewButton = (contentId) => {
    window.location.href = `/UserContent/${contentId}`;
  };

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-info">
          <h2>Stajlarım</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Eşleşilen İlanın İsmi</th>
                  <th>Eşleşme Skoru</th>
                  <th>İncele</th>
                </tr>
              </thead>
              <tbody>
                {contents.map((content) => (
                  <tr key={content._id}>
                    <td>{content.content_name}</td>
                    <td>{content.score}</td>
                    <td className="bottom-button">
                      <button onClick={() => handleViewButton(content._id)}>
                        İncele
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContentView;
