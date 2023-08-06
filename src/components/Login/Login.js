import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { signIn } from '../../utils/MainApi';
import './Login.css';

function Login({ setIsLogged }) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  async function submitForm(e) {
    e.preventDefault();

    const isLogged = await signIn(inputs);
    if (isLogged) {
      navigate('/Movies/');
      setIsLogged(isLogged);
    }
  }

  function changeInput(e) {
    inputs[e.target.id] = e.target.value;
    setInputs({ ...inputs });
  }

  return (
    <section className="register login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" onSubmit={submitForm}>
        <label htmlFor="email" className="login__label">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="login__input"
          value={inputs.email}
          required
          onChange={changeInput}
        />
         <span
            id='email-error'
            className={`login__error ${
              error.email ? 'login__error_visible' : ''
            }`}
          >
            {error.email || ''}
          </span>
        <label htmlFor="password" className="login__label">
          Пароль
        </label>
        <input
          id="password"
          htmlFor="password"
          type="password"
          className="login__input"
          value={inputs.password}
          required
          onChange={changeInput}
        />
        <span
            id='password-error'
            className={`login__error ${
              error.password ? 'login__error_visible' : ''
            }`}
          >
            {error.password || ''}
          </span>
        <button type="submit" className="login__login-button">
          Войти
        </button>
      </form>
      <p className="login__login">
        Ещё не зарегистрированы?{' '}
        <Link to="/signup" className="login__login-link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
