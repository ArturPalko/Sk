import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const NavBar = () => {
  return (
    <div className="nav">
      <nav>
        <div className={s.item}>
           <NavLink to="/" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Головна</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Повідомлення</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/tasks" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Завдання</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;