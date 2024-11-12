import React, { useState } from 'react';
import s from './Main.module.css';
import TaskShelf from './TaskShelf';
import ModalWindow from './ModalWindow';


const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Стейт для модального вікна
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
};



  const openModal = () => {
    setIsModalVisible(true); 
  };

  const closeModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <div>
      <TaskShelf openModal={openModal}/>
      {isModalVisible && <ModalWindow closeModal={closeModal}/>}
    </div>
  );
};

export default Main;