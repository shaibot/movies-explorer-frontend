import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';
import { signIn } from '../../utils/MainApi';

function Login({ setViewHeader }) {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  async function submitForm(e){
    e.preventDefault();
    await signIn()
  }

  function changeInput(e){
    inputs[e.target.id] = e.target.value
    setInputs({...inputs})
  }

  useEffect(() => {
    setViewHeader(false);
  }, []);
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
        <label htmlFor="password" className="login__label">
          Пароль
        </label>
        <input
          id='password'
          htmlFor="password"
          type="password"
          className="login__input"
          value={inputs.password}
          required
          onChange={changeInput}
        />
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
