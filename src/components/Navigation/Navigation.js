import React from 'react';
import headerLogoProfile from '../../images/profile.svg';
import './Navigation.css'

function Navigation() {
  return (
    <section className="header__navigation">
      <nav className="header__links">
        <a className="header__link" href="#">
          Фильмы
        </a>
        <a className="header__link" href="#">
          Сохраненные фильмы
        </a>
      </nav>
      <a className="header__profile" href="#">
        <p className="header__link">Аккаунт</p>
        <img
          className="header__profile-icon"
          alt="Логотип в виде силуэта человека"
          src={headerLogoProfile}
        />
      </a>
    </section>
  );
}

export default Navigation;
