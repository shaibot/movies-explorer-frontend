import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
    <Header />
    <section className="profile">
      <h2 className="profile__welcome">Привет, Виталий!</h2>
      <form className="profile__form profile-form">
        <fieldset className="profile-form__fieldset">
          <div className='profile-form__input-container'>
          <label className="profile-form__label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile-form__input"
            id="name"
            name="name"
            type="text" value="Виталий"
          />
          </div>
          <div className='profile-form__input-container'>
          <label className="profile-form__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="profile-form__input"
            id="email"
            name="email"
            type="email"
            value="pochta@yandex.ru"
          />
          </div>
          <button className="profile-form__button" type="submit">
            Редактировать
          </button>
        </fieldset>
      </form>
      <button className="profile__logout-button">Выйти из аккаунта</button>
    </section>
      </>
  );
}

export default Profile;
