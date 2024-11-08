import React, { useState, useEffect, useRef } from 'react';
import s from './Conversations.module.css';
import { useParams } from 'react-router-dom';
import viewedIcon from '../../img/messages/viewed.png';
import notViewedIcon from '../../img/messages/not viewed.png';


const Conversations = () => {
  const { username } = useParams();
  const messageContainerRef = useRef(null);
  const inputRef = useRef(null);  
  const [message, setMessage] = useState('');
  const [isTextarea, setIsTextarea] = useState(false);
  const maxLength = 200;

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []); 

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxLength) {
      setMessage(value);
    }
  };

  useEffect(() => {
    if (message.length > 50 && !isTextarea) {
      setIsTextarea(true);
    } else if (message.length <= 50 && isTextarea) {
      setIsTextarea(false);
    }
  }, [message, isTextarea]);

  const focusElement = (element) => {
    element?.focus();
    const length = element?.value?.length || 0;
    element?.setSelectionRange(length, length);  
  };

  useEffect(() => {
    if (inputRef.current) {
      focusElement(inputRef.current);
    }
  }, [isTextarea]); 

  const MessageItem = ({ desc, owner, time, viewed }) => {
    const messageClass = owner === 'me' ? `${s.messageBody} ${s.myMessage}` : `${s.messageBody} ${s.otherMessage}`;

    return (
      <div className={messageClass}>
        <p>{desc}</p>
        <div className={s.footerOfMessage}>
          <div className={s.timeMark}>{time}</div>
          <div className= {s.viewIcon}>
            {owner === 'me' && (
              viewed ? (
                <div>
                  <img src={viewedIcon} alt="viewed" />
                </div>
              ) : (
                <div>
                  <img src={notViewedIcon} alt="not viewed" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }    

  const messages = [
    { text: 'Привіт', owner: 'me', time: '17:25', viewed: true },
    { text: 'Як справи?', owner: 'me', time: '17:27', viewed: true },
    { text: 'Ти крутий))', owner: 'none', time: '17:29', viewed: false },
    { text: 'Я знаю**_**))', owner: 'me', time: '17:30', viewed: true },
    { text: 'Все виходить останнім часом))', owner: 'me', time: '17:40', viewed: false },
  ];

  const messageElements = messages.map((message, index) => (
    <MessageItem
      key={index}
      desc={message.text}
      owner={message.owner}
      time={message.time}
      viewed={message.viewed}
    />
  ));

  return (
    <div>
      <h1>Чат з користувачем <span id={s.username}>{username}</span></h1>
      <div className={s.messageContainer} ref={messageContainerRef}>
        {messageElements}
      </div>
      <div className={s.inputContainer}>
        {isTextarea ? (
          <textarea
            ref={inputRef} 
            className={s.inputField}
            value={message}
            placeholder="Введіть повідомлення"
            onChange={handleMessageChange}
            rows={4} 
            onFocus={() => focusElement(inputRef.current)} 
          />
        ) : (
          <input
            ref={inputRef}  
            type="text"
            className={s.inputField}
            value={message}
            placeholder="Введіть повідомлення"
            onChange={handleMessageChange}
            onFocus={() => focusElement(inputRef.current)} 
          />
        )}
        <button className={s.sendButton}>&#10148;</button> 
      </div>
    </div>
  );
};

export default Conversations;
