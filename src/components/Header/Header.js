import React from 'react';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const navigate = useNavigate();
  console.log(setLoggedIn);

  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип в виде латинской С в зеленом круге"
      />
      {loggedIn ? (
      <Navigation />
      ) : (
        <div className='header__box'>
          <button
            type='button'
            className='header__button'
            onClick={() => navigate('/signup')}
          >
            Регистрация
          </button>
          <button
            type='button'
            className='header__button'
            onClick={() => navigate('/signin')}
          >
            Войти
          </button>
        </div>
      )
}
    </header>
  );
}

export default Header;
