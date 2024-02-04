import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Member from './pages/member/Member';
import Universe from './pages/Universe';
import NavBar from './components/NavBar';
import Settings from './pages/settings/Settings';
import SignupTest from './pages/member/Signuptest';
import LoginTest from './pages/member/LoginTest';

import './assets/styles/scss/main.scss';
import ModalContainer from './components/modal/ModalContainer';
import { ModalContext } from './hooks/useModal';
import { useEffect, useState } from 'react';
import { getComments } from './apis/comments';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Member />} />
          <Route path="/*" element={<NavApp />} />
          <Route path="/signup" element={<SignupTest />} />
          <Route path="/login" element={<LoginTest />} />
        </Routes>
      </Router>
    </div>
  );
}

function NavApp() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    children: null,
    title: '',
  });

  return (
    <ModalContext.Provider value={{ modalState, setModalState }} className="provider">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Universe />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <ModalContainer modalState={modalState} />
    </ModalContext.Provider>
  );
}
