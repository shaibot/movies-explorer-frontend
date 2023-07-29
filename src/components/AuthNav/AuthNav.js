import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthNav.css';

function AuthNav({burger, setBurger}) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav className={`header__nav ${burger ? 'burger-active' : ''}`}>
      <button onClick={() => setBurger(false)} className='header__close-burger'></button>
      <button className="header__nav-btn" type="button" onClick={() => handleClick('/signup')}>
        Регистрация
      </button>
      <button
        className="header__nav-btn header__nav-btn_type_login"
        type="button"
        onClick={() => handleClick('/signin')}
      >
        Войти
      </button>
    </nav>
  );
}

export default AuthNav;
