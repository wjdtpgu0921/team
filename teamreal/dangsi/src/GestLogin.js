import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function GestLogin() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main'); // 메인 페이지로 이동
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , margin: '100px'}}>
    <Link to ="/home">
      <img src='/logo.jpg' alt='홈페이지'/>
    </Link>
    <h1 style={{ textAlign: 'center' }}>게스트로그인 페이지</h1>
    <button onClick={handleClick}>로그인</button>
    </div>
  );
}

export default GestLogin;



