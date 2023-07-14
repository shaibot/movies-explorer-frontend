import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import AuthNav from '../AuthNav/AuthNav';

function Header({ isLogged }) {
  return (
    <header className="section header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип в виде латинской С в зеленом круге"
      />
      {isLogged ? <Navigation /> : <AuthNav />}
    </header>
  );
}

export default Header;
