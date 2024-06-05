//Stajyer Kullanıcısı Profil Sayfası
//Stajyer bilgileri alınacak ve alınan bilgiler güncellenebilecek

import React, { useState, useEffect } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
import axios from 'axios';

function ProfilePage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [university, setUniversity] = useState('');
  const [department, setDepartment] = useState('');
  const [grade, setGrade] = useState('');
  const [averagegrade, setAverageGrade] = useState('');
  const [workExperiences, setWorkExperiences] = useState('');
  const [fieldOfInterest, setFieldOfInterest] = useState('');
  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [teamworkSkills, setTeamworkSkills] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [analyticalSkills, setAnalyticalSkills] = useState('');
  const [hobbies, setHobbies] = useState('');

  const Api_Url = 'http://localhost:8080';

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${Api_Url}/profile/${userId}`);
        const userData = response.data;
        setUsername(userData.username);
        setEmail(userData.email);
        setFirstName(userData.first_name);
        setLastName(userData.last_name);
        setBirthdate(userData.birthdate);
        setPhone(userData.phone);
        setAddress(userData.address);
        setUniversity(userData.university);
        setDepartment(userData.department);
        setGrade(userData.class);
        setAverageGrade(userData.averagegrade);
        setWorkExperiences(userData.work_experiences.join(', '));
        setFieldOfInterest(userData.field_Of_interest);
        setSkills(userData.skills.join(', '));
        setLanguages(userData.languages.join(', '));
        setTeamworkSkills(userData.teamwork_skills);
        setCommunicationSkills(userData.communication_skills);
        setAnalyticalSkills(userData.analytical_skills);
        setHobbies(userData.hobbies.join(', '));
      } catch (error) {
        console.error('Profile fetch error:', error);
      }
    };
    fetchProfileData();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    try {
      const response = await axios.put(`${Api_Url}/profile/${userId}`, {
        username,
        email,
        first_name: firstName,
        last_name: lastName,
        birthdate,
        phone,
        address,
        university,
        department,
        class: grade,
        averagegrade,
        work_experiences: workExperiences.split(',').map(item => item.trim()),
        desired_field: desiredField,
        skills: skills.split(',').map(item => item.trim()),
        languages: languages.split(',').map(item => item.trim()),
        teamwork_skills: teamworkSkills,
        communication_skills: communicationSkills,
        analytical_skills: analyticalSkills,
        hobbies: hobbies.split(',').map(item => item.trim())
      });
      console.log(response.data);
    } catch (error) {
      console.error('Profile update error:', error);
    }
  };

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-info">
          <h2>Profil Bilgileri</h2>
          <form onSubmit={handleProfileUpdate}>
            <div className="info-container">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <label>Ad:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Soyad:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Doğum Günü:</label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Telefon:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Adres:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Üniversite:</label>
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Bölüm:</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Sinif:</label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value="">Select Grade</option>
                <option value="Prep">Hazırlık</option>
                <option value="1st">1. Sınıf</option>
                <option value="2nd">2. Sınıf</option>
                <option value="3rd">3. Sınıf</option>
                <option value="4th">4. Sınıf</option>
              </select>
            </div>
            <div className="info-container">
              <label>Ortalama:</label>
              <input
                type="number"
                step="0.01"
                value={averagegrade}
                onChange={(e) => setAverageGrade(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Deneyim:</label>
              <input
                type="text"
                value={workExperiences}
                onChange={(e) => setWorkExperiences(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Çalışmak İstediğiniz Alan:</label>
              <input
                type="text"
                value={fieldOfInterest}
                onChange={(e) => setFieldOfInterest(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Beceriler:</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Yabancı Dil:</label>
              <input
                type="text"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
              />
            </div>
            <div className="info-container">
              <label>Takım Çalışması Becerisi:</label>
              <select
                value={teamworkSkills}
                onChange={(e) => setTeamworkSkills(e.target.value)}
              >
                <option value="">Select Level</option>
                <option value="Orta">Orta</option>
                <option value="İyi">İyi</option>
                <option value="Çok İyi">Çok İyi</option>
              </select>
            </div>
            <div className="info-container">
              <label>İletişim Becerisi:</label>
              <select
                value={communicationSkills}
                onChange={(e) => setCommunicationSkills(e.target.value)}
              >
                <option value="">Select Level</option>
                <option value="Orta">Orta</option>
                <option value="İyi">İyi</option>
                <option value="Çok İyi">Çok İyi</option>
              </select>
            </div>
            <div className="info-container">
              <label>Analitik Beceri:</label>
              <select
                value={analyticalSkills}
                onChange={(e) => setAnalyticalSkills(e.target.value)}
              >
                <option value="">Select Level</option>
                <option value="Orta">Orta</option>
                <option value="İyi">İyi</option>
                <option value="Çok İyi">Çok İyi</option>
              </select>
            </div>
            <div className="info-container">
              <label>Hobiler:</label>
              <input
                type="text"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
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

export default ProfilePage;
