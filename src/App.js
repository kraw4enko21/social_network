import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Setting from './components/Setting/Setting';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialog' element={<Dialogs/>} />
            <Route path='/profile' element={<Profile/>}  />
            <Route path='/music' element={<Music/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/setting' element={<Setting/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
