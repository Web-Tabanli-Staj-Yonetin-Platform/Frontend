import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // CSS dosyasını import et
import './Register.js';
import Circle from './circles.js';
import Button from './Button';
import axios from 'axios';
import { toast } from 'react-toastify'; // react-toastify kütüphanesini import et

const Login = () => {
  const [_id, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Hata mesajı için state
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted'); // Konsola mesaj yaz

    try {
      // Kullanıcı bilgilerini sunucuya POST isteği ile gönder
      const response = await axios.post('http://localhost:5010/api/login', {
        _id,
        password
      });

      console.log('Response received:', response); // Yanıtı konsola yaz

      if (response.status === 200) { // Başarılı yanıt kontrolü
        toast.success('Başarıyla giriş yapıldı'); // Bildirim göster
        console.log('Login successful');
        nav('/HomePage');
      } else if (response.status === 404) {
        toast.error('Hatalı kullanıcı adı veya şifre'); // Bildirim göster
      } else {
        toast.error('Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin'); // Bildirim göster
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      toast.error('Sunucu hatası. Lütfen daha sonra tekrar deneyiniz.'); // Bildirim göster
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Hoş Geldin!</h2>
        <h3>Inanılmaz bir deneyim yaşamak için lütfen giriş yap.</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={_id}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı Adı"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Şifre"
            />
          </div>
          <Button type="submit" text="Giriş Yap" />
          <h3> Hala aramıza katılmadın mı?</h3> 
          <h3>
            <Link to="/Register">Hemen Üye Ol!</Link>
          </h3>
        </form>
        <Circle />
      </div>
    </div>
  );
};

export default Login;
