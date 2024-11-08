import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  // Отримуємо параметри маршруту, у тому числі ім'я
  const { username } = useParams();

  // Якщо ім'я є в маршруті, то не відображаємо dialogElements і messageElements
  if (username) {
    return (
      <div className={s.dialogs}>
        {/* Відображаємо тільки Outlet, якщо є ім'я */}
        <Outlet />
      </div>
    );
  }

  // Якщо ім'я відсутнє в маршруті, відображаємо список діалогів і повідомлень
  const DialogItem = (props) => {
    return (
      <div>
        <NavLink to={`/dialogs/${props.name}`}>{props.name}</NavLink>
      </div>
    );
  };

  const MessageItem = (props) => {
    return <div>{props.text}</div>;
  };

  let senders = [
    { id: 1, name: 'Саша' },
    { id: 2, name: 'Максим' },
    { id: 3, name: 'Віка' },
    { id: 4, name: 'Рита' },
  ];

  let messages = [
    { id: 1, text: 'Привіт' },
    { id: 2, text: 'Як справи?' },
    { id: 3, text: 'Ти крутий))' },
  ];

  let dialogElements = senders.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} />);
  let messagElements = messages.map((message) => <MessageItem key={message.id} text={message.text} />);

  return (
    <div className={s.dialogs}>
      <div className={s.senders}>{dialogElements}</div>
      <div className={s.messages}>{messagElements}</div>
      <Outlet />
    </div>
  );
};

export default Dialogs;
