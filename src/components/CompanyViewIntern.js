//Şirket Kullanıcısı Stajyerler Sayfası
//Şirket kullanıcısının bünyesinde bulunan stajyerleri görüntülediği bölüm
//Şirket kullanıcısı şirketine (yani oluştumuş olduğu ilana) kayıtlı olan stajyerleri görüntüleyebilecek
//Şirket kullanıcısı "Değerlendir" butonuna basarak stajyerleri değerlendirebileceği sayfaya yönlendirilecek

import React, { useState, useEffect  } from 'react';
import TopMenu from './CompanyTopMenu';
import Circle from './circles';
import './profilePage.css';
import axios from 'axios';

function CompanyViewIntern() {
  const [interns, setInterns] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchInternData = async () => {
      const companyId = localStorage.getItem('companyId');
      try {
        const response = await axios.get(`${Api_Url}/api/getAllUser/${companyId}`);
        const internsData = response.data;
        setInterns(internsData);
      } catch (error) {
        console.error('Item Display Error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchInternData();
  }, []);

  const handleEvaluateButton = (internId) => {
    window.location.href = `/CompanyInternRating/${internId}`;
  };

  return (
    <div className="anasayfa-container">
      <TopMenu/>
      <Circle/>  
      <div className="content-container">      
        <div className="profile-info">
          <h2>Kayıtlı Stajyerler</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                    <th>Adayın İsmi</th>
                    <th>Adayın Soyismi</th> 
                    <th>Yaptığı Stajın İsmi</th>
                    <th>Değerlendir</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern) => (
                  <tr key={intern._id}>
                    <td>{intern.first_name}</td>
                    <td>{intern.last_name}</td>
                    <td>{content.content_name}</td>
                    <td className="bottom-button">
                      <button onClick={() => handleRatingButton(intern._id)}>
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

export default CompanyViewIntern;