import React, { useState } from 'react';
import s from './TaskList.module.css';

const TaskFilterMenu = ({ onFilterChange }) => {
    const [importance, setImportance] = useState('');
    const [department, setDepartment] = useState('');

    const handleImportanceChange = (event) => {
        const value = event.target.value;
        setImportance(value);
        onFilterChange('importance', value); // передаємо обране значення у Tasks
    };

    const handleDepartmentChange = (event) => {
        const value = event.target.value;
        setDepartment(value);
        onFilterChange('department', value); // передаємо обране значення у Tasks
    };

    return (
        <div className={s.taskFilterMenu}>
            <div className={s.filterContainer}>
                <button className={s.filterButton} onClick={() => {
                    setImportance('');
                    setDepartment('');
                    onFilterChange('importance', '');
                    onFilterChange('department', '');
                }}>
                    Усі
                </button>
                <div className={s.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="низька"
                            checked={importance === 'низька'}
                            onChange={handleImportanceChange}
                        />
                        Низька
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="середня"
                            checked={importance === 'середня'}
                            onChange={handleImportanceChange}
                        />
                        Середня
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="importance"
                            value="висока"
                            checked={importance === 'висока'}
                            onChange={handleImportanceChange}
                        />
                        Висока
                    </label>
                </div>
                <div className={s.selectContainer}>
                    <select value={department} onChange={handleDepartmentChange}>
                        <option value="">Оберіть відділ</option>
                        <option value="Відділ IT">Відділ IT</option>
                        <option value="Господарсько-експлуатаційний">Господарсько-експлуатаційний</option>
                        <option value="Організаційно-розпорядчий">Організаційно-розпорядчий</option>
                        <option value="Бугалтерія">Бугалтерія</option>
                        <option value="Кадри">Кадри</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TaskFilterMenu;