//Kullanıcı Kaydının Oluşturulduğu Register Bölümü

import React, { useState } from 'react';
import './Register.css';
import Circle from './circles.js';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Burada form verilerini göndermek için bir API çağrısı yapılabilir.
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          {/* <label htmlFor="username">username</label> */}
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder='Kullanıcı Adınız*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">email</label> */}
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='E-posta Adresiniz*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="role">role</label> */}
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            
          >
            <option value="">Kullanıcı Türü Seçiniz *</option>
            <option value="1st">Şirket</option>
            <option value="2nd">Stajyer</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Şifrenizi Giriniz*'
          />
        </div>
        <h3>* Zorunlu alanları lütfen eksiksiz doldurunuz.</h3>
        <button type="submit" className="submit-button">Register</button>
        <h3>
          <Link to = "/LoginPage">Giriş Yap</Link>
        </h3>
      </form>
      <Circle />
    </div>
  );
}

export default Register;