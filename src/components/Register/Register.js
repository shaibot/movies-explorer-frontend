import { useEffect } from 'react';
import Logo from '../Logo/Logo';

import './Register.css';

function Register({ setViewHeader }) {
  useEffect(() => {
    setViewHeader(false);
  }, []);
  return (
    <section className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <label for="name" className="register__label">
          Имя
        </label>
        <input
          id="name"
          type="text"
          className="register__input"
          value={'Виталий'}
          required
        />
        <label for="email" className="register__label">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="register__input"
          value={'pochta@yandex.ru'}
          required
        />
        <label for="password" className="register__label">
          Пароль
        </label>
        <input
          for="password"
          type="password"
          className="register__input"
          required
        />
        <button type="submit" className="register__register-button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__login">
        Уже зарегистрированы?{' '}
        <a href="#" className="register__login-link">
          Войти
        </a>
      </p>
    </section>
  );
}

export default Register;
