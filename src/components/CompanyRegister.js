import React, { useState } from 'react';
import './Register.css';
import Circle from './circles.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CompanyRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    taxnumber: ''
  });

  const Api_Url = 'http://localhost:8080';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) =>  {
    event.preventDefault();
        
    try {
        // Kullanıcı bilgilerini sunucuya POST isteği ile gönder
        const response = await axios.post(``, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          taxnumber: formData.taxnumber
      });

        console.log(response.data); // Sunucudan gelen cevabı konsola yazdır
        nav('/CompanyLogin');
    } catch (error) {
        console.error('Kayıt hatası:', error);
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Şirket İsmi*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="Email">Email</label> */}
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='E-posta*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">password</label> */}
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Şifre*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="taxnumber">taxnumber</label> */}
          <input
            type="text"
            id="taxnumber"
            name="taxnumber"
            value={formData.taxnumber}
            onChange={handleChange}
            required
            placeholder='Vergi Numarası*'
          />
        </div>
        <h3>* Zorunlu alanları lütfen eksiksiz doldurunuz.</h3>
        <button type="submit" className="submit-button">Register</button>
        <h3>
          <Link to = "/CompanyLogin">Giriş Yap</Link>
        </h3>
      </form>
      <Circle />
    </div>
  );
}

export default CompanyRegister;
