import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';


function Profile({ setIsLogged }) {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);
  const { values, setValues, errors, setErrors, isValid, setValid, handleChange } = useFormAndValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <section className="profile">
        <h2 className="profile__welcome">{`Привет, ${name}`}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__form-fieldset">
            <div className="profile__form-container">
              <label className="profile__form-label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__form-input"
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="profile__form-container">
              <label className="profile__form-label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile__form-input"
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <button disabled={!isValid}
                  className={`profile__form-button ${!isValid ? 'profile__form-button' : ''}`} type="submit"
                  title="Редактировать">
            Редактировать
          </button>
        </form>
        <button className="profile__logout-button" title="Выйти из аккаунта">Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;
