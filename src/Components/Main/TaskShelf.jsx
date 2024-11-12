import plusIcon from '../../img/main/plus_task.png';
import inWork from '../../img/main/in_work.png';
import toKnow from '../../img/main/to_know.png';
import toDo from '../../img/main/to_do.png';
import React, { useState } from 'react';
import s from './Main.module.css';
import tasks from './data';
import { NavLink } from 'react-router-dom';

const TaskShelf = ({openModal}) => {
    const [isModalVisible, setIsModalVisible] = useState(false); // Стейт для модального вікна
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    // Підрахунок кількості завдань за категоріями
const countTasksByGoal = (tasks) => {
  const count = {
    'До відома': 0,
    'До виконання': 0,
    'Для врахування в роботі': 0
  };

  tasks.forEach(task => {
    if (task.goal === 'До відома') {
      count['До відома'] += 1;
    } else if (task.goal === 'До виконання') {
      count['До виконання'] += 1;
    } else if (task.goal === 'Для врахування в роботі') {
      count['Для врахування в роботі'] += 1;
    }
  });

  return count;
};

const taskCounts = countTasksByGoal(tasks);

  
    const countOfTasks = [
      { toDo: '5' },
      { inWork: '2' },
      { toKnow: '1' },
    ];

  
    return (
      <div>
        <h1 className={s.tasksLabel}>Завдання</h1>
        <div className={s.main}>
          <div className={s.tableElement} onClick={openModal}>
            <img src={plusIcon} alt="Create Task" />
            <h4>Створити</h4>
          </div>
          <div className={s.tableElement}>
              <NavLink to="/tasks/do-vykonannya">
                <img src={toDo} alt="To Do" />
                <h4>
                  До виконання <span className={s.span}>{taskCounts['До виконання']}</span>
                </h4>
              </NavLink>
            </div>
            <div className={s.tableElement}>
              <NavLink to="/tasks/dlya-vrakhuvannya">
                <img src={inWork} alt="In Work" />
                <h4>
                  Для врахування в роботі <span className={s.span}>{taskCounts['Для врахування в роботі']}</span>
                </h4>
              </NavLink>
            </div>
            <div className={s.tableElement}>
              <NavLink to="/tasks/do-vidoma">
                <img src={toKnow} alt="To Know" />
                <h4>
                  До відома <span className={s.span}>{taskCounts['До відома']}</span>
                </h4>
              </NavLink>
      </div>
        </div>
      </div>
    ); // Закриваємо компонент
};

export default TaskShelf;