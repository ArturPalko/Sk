import React, { useState } from 'react';
import s from './Main.module.css';


const ModalWindow = ({ closeModal }) => {
  const [taskIsVisible, setTaskIsVisible] = useState(true);
  const [implementationVisible, setImplementationVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [tasks, setTasks] = useState([
    { name: '', status: 'До відома', deadline: '' }
  ]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (index === 0) {
      setTaskIsVisible(true);
      setImplementationVisible(false);
    }
    if (index === 1) {
      setTaskIsVisible(false);
      setImplementationVisible(true);
    }
  };

  const handleAddTask = () => {
    setTasks([...tasks, { name: '', status: 'До відома', deadline: '' }]);
  };

  const handleChangeTask = (index, field, value) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={s.overlay}>
      <div className={s.createWindow}>
        <div className={s.modalOverlay} onClick={closeModal}></div>
        <div className={s.modalWindow}>
          <div className={s.taskNav}>
            <span
              className={activeIndex === 0 ? s.active : ''}
              onClick={() => handleClick(0)}
            >
              Завдання
            </span>
            <span
              className={activeIndex === 1 ? s.active : ''}
              onClick={() => handleClick(1)}
            >
              Погодження
            </span>
          </div>
          {implementationVisible && (
            <>
              <table className={s.taskTable}>
                <thead>
                  <tr>
                    <th>Ім’я</th>
                    <th>Статус</th>
                    <th>Дедлайн</th>
                    <th>Дії</th> {/* New header for actions */}
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          placeholder="Введіть ім’я"
                          value={task.name}
                          onChange={(e) =>
                            handleChangeTask(index, 'name', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <select
                          value={task.status}
                          onChange={(e) =>
                            handleChangeTask(index, 'status', e.target.value)
                          }
                        >
                          <option value="До відома">До відома</option>
                          <option value="Для врахування в роботі">
                            Для врахування в роботі
                          </option>
                          <option value="До виконання">До виконання</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="date"
                          value={task.deadline}
                          onChange={(e) =>
                            handleChangeTask(index, 'deadline', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <button onClick={() => handleDeleteTask(index)}>
                          Видалити
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleAddTask}>Додати користувача</button>
            </>
          )}
          {taskIsVisible && (
            <>
              <label>Короткий опис</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Введіть короткий опис завдання"
              />
              <label>Текст завдання</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="Введіть основний текст"
                style={{ resize: 'none' }}
              ></textarea>
              <button onClick={closeModal}>Закрити</button>
              <button id={s.saveBtn}>Зберегти</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;