import { Link, Navigate } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Register.css';
import './Login.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ROUTER } from '../../utils/config.global';

function Auth({ type }) {
  const {
    values, setValues, errors, setErrors, isValid, setValid, handleChange
  } = useFormAndValidation();
  const { isLogged } = useContext(CurrentUserContext);

  const renderTitle = {
    register: <h1 className="register__title">Добро пожаловать!</h1>,
    login: <h1 className="login__title">Рады видеть!</h1>,
  };

  const renderButton = {
    register: <button
      type="submit"
      className="register__register-button"
      disabled={!isValid}
    >
      Зарегистрироваться
    </button>,
    login: <button
      type="submit"
      className="login__login-button"
      disabled={!isValid}
    >
      Войти
    </button>
  };

  const renderCaption = {
    register: <p className="register__login">
      Уже зарегистрированы?{' '}
      <Link to="/signin" className="register__login-link">
        Войти
      </Link>
    </p>,
    login: <p className="login__login">
      Ещё не зарегистрированы?{' '}
      <Link to="/signup" className="login__login-link">
        Регистрация
      </Link>
    </p>,
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return !isLogged ? (
    <section className="register login">
      <Logo/>
      {renderTitle[type]}
      <form className="register__form" onSubmit={handleSubmit}>
        {type === 'register'
          &&
          <>
            <label className="auth__label">
              <input
                id="name"
                name='name'
                type="text"
                className="auth__input"
                onChange={handleChange}
                value={values.name}
                minLength={2}
                maxLength={30}
                required
              />
              <span className='auth__span'>Имя:</span>
            </label>
            <span
              id='name-error'
              className='login__error'
            >
            {errors.name}
          </span>
          </>
        }
        <label className="auth__label">
          <input
            id="email"
            name='email'
            type="email"
            className="auth__input"
            value={values.email}
            onChange={handleChange}
            required
          />
          <span className='auth__span'>E-mail:</span>
        </label>

        <span
          id='email-error'
          className='login__error'
        >
            {errors.email}
          </span>
        <label className="auth__label">
          <input
            id="password"
            name='password'
            htmlFor="password"
            type="password"
            className="auth__input"
            value={values.password}
            onChange={handleChange}
            minLength={6}
            required
          />
          <span className='auth__span'>Пароль:</span>
        </label>
        <span
          id='password-error'
          className='login__error'
        >
            {errors.password}
          </span>
        {renderButton[type]}
      </form>
      {renderCaption[type]}
    </section>
  ) : <Navigate to={ROUTER.movies} replace={true}/>;
}

export default Auth;
