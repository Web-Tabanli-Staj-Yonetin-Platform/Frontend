//Şirket Kullanıcısı Profil Sayfası
//Şirket kullanıcısı profil bilgilerini görebilecek, isterse bilgilerini güncelleyebilecek.

import React, { useState, useEffect  } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './CompanyTopMenu';
import axios from 'axios';

function CompanyProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [telefon, setTelefon] = useState('');
  const [fax, setFax] = useState('');
  const [adres, setAdres] = useState('');
  const [sector, setSector] = useState('');
  const [taxnumber, setTaxnumber] = useState('');

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const companyId = localStorage.getItem('companyId');
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${Api_Url}/companyprofile/${userId}`);
        const companyData = response.data;
        setUsername(companyData.username);
        setEmail(companyData.email);
        setAbout(companyData.about);
        setTelefon(companyData.telefon);
        setFax(companyData.fax);
        setAdres(companyData.adres);
        setSector(companyData.sector);
        setTaxnumber(companyData.taxnumber);
      } catch (error) {
        console.error('Profile fetch error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchProfileData();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('companyId');
    try {
      const response = await axios.put(`${Api_Url}/companyprofile/${companyId}`, {
        name, // Assuming 'ad' is the username
        email,
        about,
        phone,
        fax,
        address,
        sector,
        taxnumber
      });
      console.log(response.data); // Log the response from the server
      // Optionally, show a success message to the user
    } catch (error) {
      console.error('Profile update error:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="anasayfa-container">
      <TopMenu/>
      <Circle/>  
      <div className="content-container">      
        <div className="profile-info">
          <h2>Profil Bilgileri</h2>
          <form onSubmit={handleProfileUpdate}> 
            <div className="info-container">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>About:</label>
              <input
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Telefon:</label>
              <input
                type="text"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Fax:</label>
              <input
                type="text"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Adres:</label>
              <input
                type="text"
                value={adres}
                onChange={(e) => setAdres(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Sector:</label>
              <input 
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Taxnumber:</label>
              <input
                type="text"
                value={taxnumber}
                onChange={(e) => setTaxnumber(e.target.value)}
              />
            </div>
            <div className="bottom-button">
              <button type="submit">Profili Kaydet</button>
            </div>
          </form>          
        </div>            
      </div>
    </div>
  );
}

export default CompanyProfile;
