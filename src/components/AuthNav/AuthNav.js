import React from 'react';
import headerLogoProfile from '../../images/profile.svg';
import './AuthNav.css';

function AuthNav({burger, setBurger}) {

  const handleClick = () => {
    console.log('authNav: click');
  };
  console.log(burger)

  return (
    <nav className={`nav ${burger ? 'burger-active' : ''}`}>
      <button onClick={() => setBurger(false)} className='close_burger'></button>
      <button className="nav__btn" type="button" onClick={handleClick}>
        Регистрация
      </button>
      <button
        className="nav__btn nav__btn_type_login"
        type="button"
        onClick={handleClick}
      >
        Войти
      </button>
    </nav>
  );
}

export default AuthNav;
