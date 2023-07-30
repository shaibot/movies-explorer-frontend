import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogoProfile from '../../images/profile.svg';
import './Navigation.css';

function Navigation({ burger, setBurger }) {
  
  return (
    <section className={`header__navigation ${burger ? 'burger-active' : ''}`}>
      <button
        onClick={() => setBurger(false)}
        className="header__close-burger"
      ></button>
      <nav className='header__menu'>
        <ul className="header__links">
          <li className="header__item main-href">
            <Link className="header__link link" to="/">
              Главная
              </Link>
          </li>
          <li className="header__item underline ">
            <Link className="header__link link" to="/movies">
              Фильмы
              </Link>
          </li>
          <li className="header__item">
            <Link className="header__link link" to="/saved-movies">
              Сохраненные фильмы
              </Link>
          </li>
        </ul>
      </nav>
      <Link className="header__profile" to="/profile">
        <p className="header__link font link">Аккаунт</p>
        <img
          className="header__profile-icon"
          alt="Логотип в виде силуэта человека"
          src={headerLogoProfile}
        />
      </Link>
    </section>
  );
}

export default Navigation;
