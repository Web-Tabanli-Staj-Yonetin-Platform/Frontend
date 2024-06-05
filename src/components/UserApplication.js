//Staj Kullanıcısı Staj Başvurularım Sayfası
//Stajyer kullanıcısı burada başvuru yapmış olduğu ilanlar ile bu ilanların değerlendirme durumlarını görücek.

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
import axios from 'axios';

function UserApplication() {
  const [application, setApplication] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Kullanıcı ID'sini local storage'dan alıyoruz
        const response = await axios.get(`${Api_Url}/api/getUserApplication/${userId}`);
        const application = response.data;
        setApplication(application);
      } catch (error) {
        console.error('Internship fetch error:', error);
      }
    };
    fetchApplicationData();
  }, []);

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-info">
          <h2>Başvuru Yaptıklarım</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Şirket İsmi</th>
                  <th>İlanın İsmi</th>
                  <th>Başvuru Durumu</th>
                </tr>
              </thead>
              <tbody>
                {application.map((application) => (
                  <tr key={application._id}>
                    <td>{application.company_name}</td>
                    <td>{application.content_name}</td>
                    <td>{application.evaluation_status}</td>
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

export default UserApplication;
