import React, { useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css'; // CSS dosyasını import et
import './Register.js';
import Circle from './circles.js';
import './HomePage';
import Button from './Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast.success('Başarıyla giriş yapıldı');
        console.log('Login successful');
        nav('/HomePage');
      } 
      if (response.status === 404) {
        toast.error('Hatalı kullanıcı adı veya şifre');
        
      } else {
        toast.error('Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin');
        
      } {
        console.log('Login failed:', response.data.message);
        setError('Giriş başarısız: ' + response.data.message); // Başarısız mesaj
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      setError('Sunucu hatası. Lütfen daha sonra tekrar deneyiniz.');
    }
  };

  return (
    <div className="login-container">
       <ToastContainer />
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
