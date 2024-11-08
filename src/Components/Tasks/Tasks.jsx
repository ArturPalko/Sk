import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';

const TaskItemMenu = ({ onClose }) => {
    return (
        <div className={s.taskItemMenu}>
            Це меню
            <div className={s.resultMenu}></div>
            <br />
            <br />
            <div className={s.feedback}>
            <span>Резолюція <span id={s.typeFeed}>(Статус)</span></span>
                <br />
                <span>Автор: <b>(Ім'я)</b></span>
                <span>Дата створення: <b>(Дата)</b></span>

                <br />
                <br />
                <textarea id="resolution" style={{ resize: "none" }} readOnly >Прошу надати пропозиції</textarea>
            </div>
            <br />
            <div className={s.feedback}>
            <span>Виконання <span id={s.typeFeed}>(Статус)</span></span>
                <br />
                <span>Виконавець: <b>(Ім'я)</b></span>
                <br />
                <span>Результат</span>
                <br />
                <textarea id="resultArea"></textarea>
            </div>
            
            <div className={s.btnSection}>
                <button id={s.save}>Зберегти</button>
                <button id={s.cancel} onClick={onClose}>Скасувати</button>
            </div>
        </div>
    );
};


const TaskItem = ({ department, sentAt, description, deadline, importance, goal }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [bgColor, setBgColor] = useState(''); // Стан для фону

    const handleDoubleClick = () => {
        setShowOverlay(true);
        setBgColor('bisque'); // Встановлення кольору фону при подвійному кліку
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
        setBgColor(''); // Скидання кольору фону, коли overlay закрито
    };

    return (
        <div 
            className={s.taskTable} 
            onDoubleClick={handleDoubleClick} 
            style={{ backgroundColor: bgColor }} // Застосування фону динамічно
        >
            <table>
                <tbody>
                    <tr>
                        <td className={s.taskItem}>{department}</td>
                        <td className={s.taskItem}>{sentAt}</td>
                        <td className={s.taskItem}>{description}</td>
                        <td className={s.taskItem}>{deadline}</td>
                        <td className={s.taskItem}>{goal}</td>
                        <td className={s.taskItem}>{importance}</td>
                    </tr>
                </tbody>
            </table>
            {showOverlay && (
                <div className={s.overlay} >
                    <TaskItemMenu onClose={handleCloseOverlay}/>
                </div>
            )}
        </div>
    );
};

const TaskHeader = () => {
    return (
        <div className={s.taskHeaderTable}>
            <table>
                <tbody>
                    <tr>
                        <td className={s.taskItem}>Відділ</td>
                        <td className={s.taskItem}>Дата створення</td>
                        <td className={s.taskItem}>Коркий зміст</td>
                        <td className={s.taskItem}>Дата виконання</td>
                        <td className={s.taskItem}>Тип</td>
                        <td className={s.taskItem}>Важливість</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const TaskFilterMenu = () => {
    const [importance, setImportance] = useState('');
    const [department, setDepartment] = useState('');

    const handleImportanceChange = (event) => {
        setImportance(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    return (
        <div className={s.taskFilterMenu}>
            <div className={s.filterContainer}>
                <button className={s.filterButton}>Усі</button>
                <div className={s.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="low"
                            checked={importance === 'low'}
                            onChange={handleImportanceChange}
                        />
                        Низька
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="medium"
                            checked={importance === 'medium'}
                            onChange={handleImportanceChange}
                        />
                        Середня
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="high"
                            checked={importance === 'high'}
                            onChange={handleImportanceChange}
                        />
                        Висока
                    </label>
                </div>
                <div className={s.selectContainer}>
                    <select value={department} onChange={handleDepartmentChange}>
                        <option value="">Оберіть відділ</option>
                        <option value="1">Відділ IT</option>
                        <option value="2">Господарсько-експлуатаційний</option>
                        <option value="3">Організаційно-розпорядчий</option>
                        <option value="4">Бухгалтерія</option>
                        <option value="5">Кадри</option>
                        <option value="6">Статистика</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

const Tasks = () => {
    const tasks = data;

    const taskElements = tasks.map(task => (
        <TaskItem
            key={task.id}
            department={task.department}
            sentAt={task.sentAt}
            description={task.description}
            deadline={task.deadline}
            goal={task.goal}
            importance={task.importance}
        />
    ));

    return (
        <>
            <TaskFilterMenu />
            <div className={s.tasks}>
                <TaskHeader />
                {taskElements}
            </div>
        </>
    );
}

export default Tasks;
