import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';
import TaskItemMenu from './TaskItemMenu.jsx';

const TaskItem = ({ department, sentAt, description, deadline, importance, goal, senderName, receiver, assignedTo }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [bgColor, setBgColor] = useState(''); 

    const handleDoubleClick = () => {
        setShowOverlay(true);
        setBgColor('bisque');
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
        setBgColor('');
    };

    return (
        <div 
            className={s.taskTable} 
            onDoubleClick={handleDoubleClick} 
            style={{ backgroundColor: bgColor }}
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
                    <TaskItemMenu onClose={handleCloseOverlay} senderName= {senderName} receiver={receiver} goal={goal} sentAt={sentAt} 
                    assignedTo={assignedTo}/>
                </div>
                
            )}
        </div>
    );
};
export default TaskItem;