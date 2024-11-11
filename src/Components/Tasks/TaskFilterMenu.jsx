import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';

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
export default TaskFilterMenu;