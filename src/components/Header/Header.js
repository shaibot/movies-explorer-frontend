import React, { useState } from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import AuthNav from '../AuthNav/AuthNav';

function Header({ isLogged }) {
  const [burger, setBurger] = useState(false)
  return (
    <header className="section header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип в виде латинской С в зеленом круге"
      />
      <div onClick={e => setBurger(true)} className='header__burger'></div>
      {isLogged ? <Navigation  burger={burger} setBurger={setBurger}/> : <AuthNav burger={burger} setBurger={setBurger} />}

    </header>
  );
}

export default Header;
