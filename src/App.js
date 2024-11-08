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
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
