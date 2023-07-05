import React, { useState, useEffect } from 'react';
import { Link , BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';
import GestLogin from './GestLogin';
import HomePage from './HomePage';
import IntroPage from './IntroPage';
import MainPage from './MainPage';

function App() {
  const [page, setPage] = useState('intro');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage('home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <BrowserRouter basename="/">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
        {page === 'home' && (
          <nav>
            <ul>
              <Link to="/">
                <img src="/logo.jpg" alt="홈페이지" onClick={() => handlePageChange('home')} />
              </Link>
            </ul>
            <ul>
              <Link to="/kakaologin">
                <img src="/kakao.jpg" alt="카카오 로그인" onClick={() => handlePageChange('kakao')} />
              </Link>
            </ul>
            <ul>
              <Link to="/gestlogin">
                <img src="/gest.jpg" alt="게스트 로그인" onClick={() => handlePageChange('gest')} />
              </Link>
            </ul>
          </nav>
        )}
        <Routes>
        {page === 'intro' && <Route path="/" element={<IntroPage />} />}
        <Route path="/main" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="/gestlogin" element={<GestLogin />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;