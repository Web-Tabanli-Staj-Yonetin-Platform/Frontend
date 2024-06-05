//Şirket Kullanıcısı İlnaları Görüntüle Sayfası
//Şirket Kullanıcısının Oluşturmuş Olduğu İlanları Görüntülediği Bölüm
/*Bu bölümde şirket kullanıcısı oluşturmuş olduğu ilanları görebilecek (ilanın ismini),
şirket kullanıcısı "İlanı Görüntüle" butonu ile isterse bu ilanı hem daha ayrıntılı 
inceleyebileği hem de ilanı tekrardan düzenleyebileceği sayfaya yönlendirilecek*/
/*Şirket kullanıcısı "İlana Başvuranlar" butonuna tıklayarak ilana başvuran stayer 
adaylarını görüntüleyebileceği sayfaya yönlendirilecek*/

import React, { useState, useEffect  } from 'react';
import TopMenu from './CompanyTopMenu';
import Circle from './circles';
import './profilePage.css';
import axios from 'axios';

function CompanyViewContent() {
  const [contents, setContents] = useState([]);

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const fetchContentData = async () => {
      const companyId = localStorage.getItem('companyId');
      try {
        const response = await axios.get(`${Api_Url}/api/getAllContent/${companyId}`);
        const contentsData = response.data;
        setContents(contentsData.contentname);
      } catch (error) {
        console.error('Item Display Error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchContentData();
  }, []);

  const handleContentButton = (contentId) => {
    window.location.href = `/CompanySingleContent/${contentId}`;
  };

  const handleApplicationButton = (contentId) => {
    window.location.href = `/CompanyInternshipApplications/${contentId}`;
  };

  return (
    <div className="anasayfa-container">
      <TopMenu/>
      <Circle/>  
      <div className="content-container">      
        <div className="profile-info">
          <h2>Oluşturulan İlanlar</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>İlanın İsmi</th>
                  <th>İlanı Görüntüle</th> 
                  <th>İlana Başvuranlar</th>
                </tr>
              </thead>
              <tbody>
                {contents.map((content) => (
                  <tr key={content._id}>
                    <td>{content.content_name}</td>
                    <td className="bottom-button">
                      <button onClick={() => handleContentButton(content._id)}>
                        İlanı Görüntüle
                      </button>
                    </td>
                    <td className="bottom-button">
                      <button onClick={() => handleApplicationButton(content._id)}>
                        İlana Başvuranlar
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

export default CompanyViewContent;