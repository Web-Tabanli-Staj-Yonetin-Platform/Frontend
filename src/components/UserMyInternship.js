//Stajyer Kullanıcısı Kayıtlı Staj Sayfası
//Stajyer kullanıcısı bu bölümde başvuru kabul edildiği ilanları yani artık stajyer olduğu stajları görücek.
/*Bu sayfada kullanıcı "Test" bölümü ile kayıtlı olduğu staj programın 
(Kayıtlı olduğu ilan) testlerini çözebileceği sayfaya erişebilecek (Belki bu sayfanın hiç tasarımı yapılmayabilir)*/
/*Stajyer kullanıcısı ayrıca kayıtlı olduğu staj programını (yani ilanı) 
punalayıp değerlendirebilceği "Değerlendirme" sayfasına erişimde bulunabilcek*/

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
import axios from 'axios';

function UserMyInternship() {
  const [internships, setInternships] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchInternshipData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Kullanıcı ID'sini local storage'dan alıyoruz
        const response = await axios.get(`${Api_Url}/api/getUserInternships/${userId}`);
        const internshipsData = response.data;
        setInternships(internshipsData);
      } catch (error) {
        console.error('Internship fetch error:', error);
      }
    };
    fetchInternshipData();
  }, []);

  const handleTestButton = (internshipId) => {
    window.location.href = `/UserTest/${internshipId}`;
  };

  const handleRatingButton = (internshipId) => {
    window.location.href = `/UserInternshipRating/${internshipId}`;
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
                  <th>Staj İsmi</th>
                  <th>Test</th>
                  <th>Başarı Durumu</th>
                  <th>Stajı Değerlendirme</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship) => (
                  <tr key={internship._id}>
                    <td>{internship.content_name}</td>
                    <td className="bottom-button">
                      <button onClick={() => handleTestButton(internship._id)}>
                        Test
                      </button>
                    </td>
                    <td>{internship.score}</td>
                    <td className="bottom-button">
                      <button onClick={() => handleRatingButton(internship._id)}>
                        Stajı Değerlendir
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

export default UserMyInternship;
