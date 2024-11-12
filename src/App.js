import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Tasks from './Components/Tasks/Tasks.jsx';
import Conversations from './Components/Conversations/Conversations.jsx'; // Исправлено: импорт Conversations
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './State/Store.js';
import tasks from './Components/Main/data.js';

const data = tasks;
// Розкладаємо задачі по окремих масивах в залежності від їх goal
const tasksToExecute = tasks.filter(task => task.goal === 'До виконання');
const tasksToConsider = tasks.filter(task => task.goal === 'Для врахування в роботі');
const tasksForInformation = tasks.filter(task => task.goal === 'До відома');

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dialogs" element={<Dialogs />}>
              {/* Вложенный маршрут для динамического пути */}
              <Route path=":username" element={<Conversations />} />
            </Route>
              <Route path="/tasks" element={<Tasks data = {data} />}/>
              <Route path="/tasks/do-vykonannya" element={<Tasks data = {tasksToExecute} />} />
              <Route path="/tasks/dlya-vrakhuvannya" element={<Tasks data = {tasksToConsider}/>} />
              <Route path="/tasks/do-vidoma" element={<Tasks data = {tasksForInformation}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
