import React, { useState, useEffect } from 'react';
import s from './Header.module.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Обновляем время каждую минуту

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  // Функция для форматирования даты
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    return date.toLocaleString('uk-UA', options);
  };

  return (
    <div className="header">
        <div id={s.time}>
            <span>{formatDate(currentTime)}</span>
        </div>
        <div id={s.userName}>
            <span>Палько Артур Сергійович</span>
        </div>
    </div>
  );
};

export default Header;
