import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';


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

export default TaskHeader;