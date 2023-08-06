import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../utils/Context';
import { EditProfileFunc, signOut } from '../../utils/MainApi';
import { handleChange } from '../../utils/Validation';
import './Profile.css';


function Profile({setIsLogged}) {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const {name, email} = useContext(userContext)
  const [profile, setProfile] = useState({name, email})
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [profileInput, setProfileInput] = useState({
    name: profile.name ,
    email: profile.email ,
  })

  const changeInput = (e) => {
    const value = e.target.value
    setDisabledBtn(handleChange(e, isValid, setIsValid))
    setProfileInput({...profileInput, [e.target.name]: value})
  }

  const editSubmit = async (e) => {
    e.preventDefault()
    const EditProfile = await EditProfileFunc(profileInput)
    setIsLogged(EditProfile.data)
    setProfile(EditProfile.data)
  }

  const logOut = async (e) => {
    if (await signOut()){
      navigate('/');
      setIsLogged({})
    }
  }

  useEffect(() => {
    setProfileInput({...profile})
  },[profile])

  return (
    <>
    <section className="profile">
      <h2 className="profile__welcome">{`Привет, ${profile.name}`}</h2>
      <form className="profile__form" onSubmit={editSubmit}>
        <fieldset className="profile__form-fieldset">
          <div className='profile__form-container'>
          <label className="profile__form-label" htmlFor="name">
            Имя
          </label>
          <input
            className="profile__form-input"
            id="name"
            name="name"
            type="text"
            value={profileInput.name}
            onChange={changeInput}
          />
          </div>
          <div className='profile__form-container'>
          <label className="profile__form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="profile__form-input"
            id="email"
            name="email"
            type="email"
            value={profileInput.email}
            onChange={changeInput}
          />
          </div>
        </fieldset>
          <button disabled={!disabledBtn} className={`profile__form-button ${!disabledBtn ? 'profile__form-button' : ''}`} type="submit" title='Редактировать' >
            Редактировать
          </button>
      </form>
      <button className="profile__logout-button" title='Выйти из аккаунта' onClick={logOut}>Выйти из аккаунта</button>
    </section>
      </>
  );
}

export default Profile;
