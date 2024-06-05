//Şirket Kullanıcısı İlana Başvuranlar Sayfası
//Şirket kullanıcısıın oluşturmuş olduğu ilana başvuran stajyer kullanıcılarının görüntülendiği bölüm
/*Şirket kullanıcısı başvuran stajyerlerin bilgilerini (şimdilik isim, soy isim, eşleşme skoru) görebilecek ve
şirket kullanıcısı isterse stajyer kullanıcılarını oluşturmuş olduğu staj programına (ilana) kabul edebilecek
veya reddede bilecektir (ayrıca stajyer kullanıcısının ilana başvuru durumu güncellenicek)*/

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './CompanyTopMenu';
import axios from 'axios';

function CompanyInternshipApplications() {
  const [applicants, setApplicants] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchApplicantsData = async () => {
      const adId = localStorage.getItem('adId');
      try {
        const response = await axios.get(`${Api_Url}/api/applicants/${adId}`);
        setApplicants(response.data);
      } catch (error) {
        console.error('Item Display Error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchApplicantsData();
  }, []);

  const handleStatusChange = async (applicantId, newStatus) => {
    try {
      await axios.put(`${Api_Url}/api/applicants/${applicantId}/status`, {
        status: newStatus
      });
      setApplicants(applicants.map(applicant =>
        applicant._id === applicantId ? { ...applicant, status: newStatus } : applicant
      ));
    } catch (error) {
      console.error('Status Update Error:', error);
      // Handle status update error (e.g., show error message to user)
    }
  };

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-info">
          <h2>İlana Başvuran Adaylar</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Adayın İsmi</th>
                  <th>Adayın Soyismi</th>
                  <th>Adayın Eşleşme Skoru</th>
                  <th>Kabul Et</th>
                  <th>Reddet</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map(applicant => (
                  <tr key={applicant._id}>
                    <td>{applicant.first_name}</td>
                    <td>{applicant.last_name}</td>
                    <td>{applicant.match_score}</td>
                    <td>{applicant.status}</td>
                    <td>
                      <button onClick={() => handleStatusChange(applicant._id, 'Accepted')}>Kabul Et</button>
                    </td>
                    <td>
                      <button onClick={() => handleStatusChange(applicant._id, 'Rejected')}>Reddet</button>
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

export default CompanyInternshipApplications;