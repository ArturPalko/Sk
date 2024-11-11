import React, { useState } from 'react';
import data from './data.js';
import s from './TaskList.module.css';



const ProgresHead = ({senderName, sentAt}) =>{
    return(
        <div className={s.perfomrsViewHead}>
        Дата видачі завдання: {sentAt} | {senderName} 
    </div>
    )
};

const Progres = ({ name, status, date }) => {
return (
<div className={s.borderFlex}>
    <div className={s.borderCenter}>      </div>
    <div className={s.perfomer}>
        {name} | Термін виконання: {date}| {status} 
    </div>
</div>
);
};

const TaskItemMenu = ({ onClose, senderName, receiver, goal, sentAt, assignedTo }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showStatusDate, setStatusDate] = useState(false);
    const [statusText, setStatusText] = useState('Статус');
    const [showProgress, setShowProgress] = useState(false);
    const [showView, setShowView] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        if (index === 0) {
            setShowProgress(false);
            setShowView(true);
        } else if (index === 1) {
            setShowProgress(true);
            setShowView(false);
        }
    };

    const handleStatusChange = (event) => {
        setStatusDate(true);
        const selectedOption = event.target.selectedOptions[0];
        const selectedText = selectedOption.textContent;

        if (selectedText === 'Виконати') setStatusText('Виконано');
        if (selectedText === 'Взяти на виконання') setStatusText('Взято на виконання');
        if (selectedText === 'Припинити виконання') setStatusText('Припинено виконання');
        if (selectedText === 'Статус') setStatusDate(false);
    };

    const progressListItems = assignedTo && assignedTo.length > 0
        ? assignedTo.map((assigner, index) => (
            <Progres key={index} name={assigner.name} status={assigner.status} date={assigner.date} />
        ))
        : null;

    return (
        <div className={s.taskItemMenu}>
            <div className={s.taskNav}>
                <span
                    className={activeIndex === 0 ? s.active : ''}
                    onClick={() => handleClick(0)}
                >
                    Перегляд
                </span>
                {showView &&  <select onChange={handleStatusChange}>
                    <option value="status">Статус</option>
                    <option value="execute">Виконати</option>
                    <option value="takeOnExecution">Взяти на виконання</option>
                    <option value="stopExecution">Припинити виконання</option>
                </select>}
                <span
                    className={activeIndex === 1 ? s.active : ''}
                    onClick={() => handleClick(1)}
                >
                    Хід виконання
                </span>
            </div>

            {showView && (
                <>
                    <div className={s.resultMenu}></div>
                    <br />
                    <br />
                    <div className={s.feedback}>
                        <span>Резолюція: <span id={s.typeFeed}>{goal}</span></span>
                        <br />
                        <span>Автор: <b>{senderName}</b></span>
                        <span>Дата створення: <b>{sentAt}</b></span>
                        <br />
                        <br />
                        <textarea id="resolution" style={{ resize: "none" }} readOnly>Прошу надати пропозиції</textarea>
                    </div>
                    <br />
                    <div className={s.feedback}>
                        <span>Виконання <span id={s.typeFeed}>(Статус)</span></span>
                        <br />
                        <span>Виконавець: <b>{receiver}</b></span>
                        <br />
                        <span>Результат</span>
                        <br />
                        <textarea id="resultArea" style={{ resize: "none" }}></textarea>
                        <br />
                        {showStatusDate && (
                            <div className={s.showStatusDate}>
                                <span><span className={s.typeFeed}>{statusText}</span>: {new Date().toLocaleDateString()}</span>
                            </div>
                        )}
                    </div>
                </>
            )}
        
            <div className={s.border}>
                <div className={s.perfomrsViewHead}>
                    {showProgress && <ProgresHead senderName={senderName} status={goal} sentAt={sentAt} />}
                </div>
                <div className={s.perfomrsView}>
                {showProgress && progressListItems}
                </div>
            </div>
                {showView && (
                    <>
                    <div className={s.btnSection}>
                        <button id={s.save}>Зберегти</button>
                        <button id={s.cancel} onClick={onClose}>Скасувати</button>
                    </div>
                    </>
                )}
            

        </div>
    );
};
export default TaskItemMenu;