import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import s from './TaskList.module.css';
import TaskFilterMenu from './TaskFilterMenu.jsx';
import TaskItem from './TaskItem.jsx';
import TaskHeader from './TaskHeader.jsx';


const Tasks = ({ data }) => {
    const [filters, setFilters] = useState({ importance: '', department: '' });

    // Обробник для оновлення фільтрів з TaskFilterMenu
    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    // Перевірка на правильність даних і фільтрація
    const filteredTasks = (data || []).filter(task => {
        const importanceMatch = filters.importance === '' || task.importance === filters.importance;
        const departmentMatch = filters.department === '' || task.department === filters.department;
        return importanceMatch && departmentMatch;
    });

    // Генеруємо список задач
    const taskElements = filteredTasks.map(task => (
        <TaskItem
            key={task.id}
            department={task.department}
            sentAt={task.sentAt}
            description={task.description}
            deadline={task.deadline}
            goal={task.goal}
            importance={task.importance}
            senderName={task.senderName}
            receiver={task.receiver}
            assignedTo={task.status?.assignedTo} // Перевірка на наявність status
        />
    ));

    return (
        <>
            <Outlet />
            <TaskFilterMenu onFilterChange={handleFilterChange} />
            <div className={s.tasks}>
                <TaskHeader />
                {taskElements}
            </div>
        </>
    );
};

export default Tasks;