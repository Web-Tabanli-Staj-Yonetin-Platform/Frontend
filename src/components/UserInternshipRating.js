//Staj Kullanıcısı Staj Puanlama Sayfası
//Stajyer kullanıcısı kayıtlı olduğu staj programını (yani ilanı) değerlendirip puanlayabilecek.

import React, { useState, useEffect  } from 'react';
import TopMenu from './TopMenu';
import Circle from './circles';
import './profilePage.css';
import axios from 'axios';

function UserInternshipRating() {
  const [contentname, setContentName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    // Retrieve user ID from localStorage
    const userId = localStorage.getItem('userId');
    // Fetch user profile data using the user ID
    const fetchInternshipRatingData = async () => {
      try {
        const response = await axios.get(`${Api_Url}/api/getUser/${userId}`);
        const contentData = response.data;
        setContentName(contentData.contentname);
      } catch (error) {
        console.error('Item Display Error:', error);
        // Handle profile fetch error (e.g., show error message to user)
      }
    };
    fetchInternshipRatingData();
  }, []);

  const handleInternshipRatingUpdate = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const response = await axios.post(`${Api_Url}/api/getUserRating/${userId}`, {
        comment, // Assuming 'ad' is the username
        rating
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
          <h2>Stajı Değerlendirme</h2>
          <form onSubmit={handleInternshipRatingUpdate}> 
            <div className="info-container">
              <label>Staj İsmi:</label>
              <textarea
                type="text"
                value={contentname}
                readOnly
              />
            </div>
            <div className="info-container">
              <label>Yorum:</label>
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
             />
            </div>
            <div className="info-container">
              <label>Puanlama:</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="bottom-button">
              <button type="submit">Kaydet</button>
            </div>
          </form>          
        </div>            
      </div>
    </div>
  );
}

export default UserInternshipRating;