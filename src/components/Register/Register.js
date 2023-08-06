import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../utils/MainApi';

import Logo from '../Logo/Logo';
import './Register.css';

function Register({}) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  function changeInput(e) {
    inputs[e.target.id] = e.target.value;
    setInputs({ ...inputs });
  }

  async function submitForm(e) {
    e.preventDefault();
    const bool = await signUp(inputs);
    if (bool) navigate('../Movies/');
  }

  return (
    <section className="register login">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={submitForm}>
        <label htmlFor="name" className="register__label">
          Имя
        </label>
        <input
          id="name"
          type="text"
          className="register__input"
          onChange={changeInput}
          value={inputs.name}
          required
        />
        <label htmlFor="email" className="register__label">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="register__input"
          value={inputs.email}
          onChange={changeInput}
          required
        />
        <label htmlFor="password" className="register__label">
          Пароль
        </label>
        <input
          id="password"
          htmlFor="password"
          type="password"
          className="register__input"
          value={inputs.password}
          onChange={changeInput}
          required
        />
        <button type="submit" className="register__register-button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__login">
        Уже зарегистрированы?{' '}
        <Link to="/signin" className="register__login-link">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
