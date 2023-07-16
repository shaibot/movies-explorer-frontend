import React, { useEffect } from 'react';
import './Login.css';
import Logo from '../../images/logo-header.svg'

function Login({setViewHeader}) {
  useEffect(() => {
    setViewHeader(false)
  }, [])
  return (
    <section className="login">
      <header className='login__header'>
        <img className='login__header-logo' src={Logo} alt='Логотип в виде белой латинской буквы С в зеленом круге'/>
      </header>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <label for="email" className="login__label">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="login__input"
          value={'pochta@yandex.ru'}
        />
        <label for="password" className="login__label">
          Пароль
        </label>
        <input for="password" type="password" className="login__input" />
        <button type="submit" className="login__login-button">
          Войти
        </button>
      </form>
      <p className="login__login">
        Ещё не зарегистрированы?{' '}
        <a href="#" className="login__login-link">
          Регистрация
        </a>
      </p>
    </section>
  );
}

export default Login;
