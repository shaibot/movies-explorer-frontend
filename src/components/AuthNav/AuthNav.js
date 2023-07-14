import React from 'react';
import headerLogoProfile from '../../images/profile.svg';
import './AuthNav.css';

function AuthNav() {
  const handleClick = () => {
    console.log('authNav: click');
  };

  return (
    <nav className="nav">
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
