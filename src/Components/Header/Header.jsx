import React, { useState, useEffect } from 'react';
import s from './Header.module.css';
import currentUser from './data.js';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const navigate = useNavigate(); // Ініціалізуємо navigate

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    return date.toLocaleString('uk-UA', options);
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleLogout = () => {
    // Логіка виходу, якщо необхідно
    // Наприклад, очищення токенів, даних користувача тощо

    // Редирект на сторінку логіну
    navigate('/login');
  };

  return (
    <div className="header">
      <div id={s.time}>
        <span>{formatDate(currentTime)}</span>
      </div>
      <div id={s.userName} onClick={togglePanel}>
        <span>{currentUser.name}</span>
      </div>
      {isPanelOpen && (
        <div className={s.panel}>
          <ul>
            <li>Ім'я: {currentUser.name}</li>
            <li>Підрозділ: {currentUser.department}</li>
            <li>Пошта: {currentUser.email}</li>
            <li>Телефон: {currentUser.phone}</li>
            <li><button onClick={handleLogout}>Вийти</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
