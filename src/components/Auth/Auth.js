import { Link, Navigate } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Register.css';
import './Login.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { REGEXP_EMAIL, ROUTER } from '../../utils/config.global';
import Preloader from '../Preloader/Preloader';

function Auth({ type, onLogin, onRegister, reqStatus }) {
  const {
    values, errors, setErrors, isValid, setValid, handleChange
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

  const handleChangeEmail = (evt) => {
    handleChange(evt);

    const { name, value } = evt.target;

    if (name === 'email' && !REGEXP_EMAIL.test(value)) {
      setValid(false);
      setErrors((errors) => {
        return {
          ...errors,
          email: 'Формат почты: name@gmail.com',
        };
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (type === 'login') {
      onLogin({
        email: values.email,
        password: values.password,
      });
    } else {
      onRegister({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    }
  };

  return !isLogged ? (
    <section className="register login">
      <Logo/>
      {renderTitle[type]}
      <form className="auth__form" onSubmit={handleSubmit}>
        {type === 'register'
          &&
          <>
            <label className="auth__label">
              <input
                id="name"
                name="name"
                type="text"
                className={`auth__input ${errors.name && 'auth__input_type_invalid'}`}
                onChange={handleChange}
                value={values.name ?? ''}
                minLength={2}
                maxLength={30}
                required
              />
              <span className="auth__span">Имя:</span>
            </label>
            <span
              id="name-error"
              className="auth__error"
            >
            {errors.name}
          </span>
          </>
        }
        <label className="auth__label">
          <input
            id="email"
            name="email"
            type="email"
            className={`auth__input ${errors.email && 'auth__input_type_invalid'}`}
            value={values.email ?? ''}
            onChange={handleChangeEmail}
            required
          />
          <span className="auth__span">E-mail:</span>
        </label>

        <span
          id="email-error"
          className="auth__error"
        >
            {errors.email}
          </span>
        <label className="auth__label">
          <input
            id="password"
            name="password"
            type="password"
            className={`auth__input ${errors.password && 'auth__input_type_invalid'}`}
            value={values.password ?? ''}
            onChange={handleChange}
            minLength={6}
            required
          />
          <span className="auth__span">Пароль:</span>
        </label>
        <span
          id="password-error"
          className="auth__error"
        >
            {errors.password}
          </span>
        {reqStatus.isLoading
          ? <Preloader/>
          : renderButton[type]}
      </form>
      {renderCaption[type]}
    </section>
  ) : <Navigate to={ROUTER.movies} replace={true}/>;
}

export default Auth;
