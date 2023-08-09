import { NavLink, Link } from 'react-router-dom';
import headerLogoProfile from '../../images/profile.svg';
import './Navigation.css';
import { ROUTER } from '../../utils/config.global';

function Navigation({ burger, setBurger }) {
  const handleClick = () => {
    setBurger(false);
  }

  return (
    <section className={`header__navigation ${burger ? 'burger-active' : ''}`}>
      <button
        onClick={() => setBurger(false)}
        className="header__close-burger"
      ></button>
      <nav className="header__menu">
        <ul className="header__links">
          <li className="header__item main-href">
            <NavLink
              className={({ isActive }) => `header__link link ${isActive && 'underline'}`}
              to={ROUTER.main}
              onClick={handleClick}
            >
              Главная
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => `header__link link ${isActive && 'underline'}`}
              to={ROUTER.movies}
              onClick={handleClick}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => `header__link link ${isActive && 'underline'}`}
              to={ROUTER.saved}
              onClick={handleClick}
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link className="header__profile" to={ROUTER.profile} onClick={handleClick}>
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
