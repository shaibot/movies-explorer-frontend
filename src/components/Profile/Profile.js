import { useContext, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { REGEXP_EMAIL } from '../../utils/config.global';
import Preloader from '../Preloader/Preloader';


function Profile({ onProfileUpdate, onLogout, reqStatus }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setValid,
    handleChange
  } = useFormAndValidation();

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
    setValid(true);
  }, [ currentUser, setValues ]);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setValid(false);
    }
  });

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
    onProfileUpdate({ name: values.name, email: values.email });
  };

  return (
    <>
      <section className="profile">
        <h2 className="profile__welcome">{`Привет, ${currentUser.name}`}</h2>
        <form className="profile__form" onSubmit={handleSubmit}>
          <fieldset className="profile__form-fieldset">
            <div className="profile__form-container">
              <label className="profile__form-label">
                Имя
                <input
                  className={`profile__form-input ${errors.name && 'profile__form-input_type_invalid'}`}
                  id="name"
                  name="name"
                  type="text"
                  value={values.name ?? ''}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <span className={'profile__error'}>{errors.name}</span>
            </div>
            <div className="profile__form-container">
              <label className="profile__form-label">
                E-mail
                <input
                  className={`profile__form-input ${errors.email && 'profile__form-input_type_invalid'}`}
                  id="email"
                  name="email"
                  type="email"
                  value={values.email ?? ''}
                  onChange={handleChangeEmail}
                  required
                />
              </label>
              <span className={'profile__error'}>{errors.email}</span>
            </div>
          </fieldset>
          {reqStatus.isLoading
            ? <Preloader/>
            : <>
              <button
                disabled={!isValid}
                className={`profile__form-button ${!isValid ? 'profile__form-button' : ''}`}
                type="submit"
                title="Редактировать"
              >
                Редактировать
              </button>
              <button
                type={'button'}
                className="profile__logout-button"
                title="Выйти из аккаунта"
                onClick={() => onLogout()}
              >
                Выйти из аккаунта
              </button>
            </>
          }

        </form>
      </section>
    </>
  );
}

export default Profile;
