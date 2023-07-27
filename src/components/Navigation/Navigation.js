import React from 'react';
import headerLogoProfile from '../../images/profile.svg';
import './Navigation.css';

function Navigation({ burger, setBurger }) {
  return (
    <section className={`header__navigation ${burger ? 'burger-active' : ''}`}>
      <button
        onClick={() => setBurger(false)}
        className="close_burger"
      ></button>
      <nav className='header__menu'>
        <ul className="header__links">
          <li className="header__item">
            <a className="header__link main-href" href="#">
              Главная
            </a>
          </li>
          <li className="header__item underline">
            <a className="header__link" href="#">
              Фильмы
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Сохраненные фильмы
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__profile" href="#">
        <a className="header__link font">Аккаунт</a>
        <img
          className="header__profile-icon"
          alt="Логотип в виде силуэта человека"
          src={headerLogoProfile}
        />
      </div>
    </section>
  );
}

export default Navigation;
