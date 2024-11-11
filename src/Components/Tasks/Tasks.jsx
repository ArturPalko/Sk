import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';
import TasklFilterMenu from './TaskFilterMenu.jsx';
import TaskItemMenu from './TaskItemMenu.jsx';
import TaskItem from './TaskItem.jsx';
import TaskHeader from './TaskHeader.jsx';

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
            senderName={task.senderName}
            receiver={task.receiver}
            assignedTo={task.status.assignedTo}
        />
    ));

    return (
        <>
            <TasklFilterMenu />
            <div className={s.tasks}>
                <TaskHeader />
                {taskElements}
            </div>
        </>
    );
}

export default Tasks;
