import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import '../../blocks/Content/Content.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ScreenTypeContext } from '../../contexts/ScreenTypeContext';
import { MainPage } from '../Main/Main.async';
import { MoviesPage } from '../Movies/Movies.async';
import { SavedMoviesPage } from '../SavedMovies/SavedMovies.async';
import { ProfilePage } from '../Profile/Profile.async';
import { AuthPage } from '../Auth/Auth.async';
import LayoutWithHeaderAndFooter from '../Layouts/LayoutWithHeaderAndFooter';
import LayoutWithHeader from '../Layouts/LayoutWithHeader';
import LayoutWithContentOnly from '../Layouts/LayoutWithContentOnly';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { COOKIE_TOKEN_KEY, ROUTER, SCREEN } from '../../utils/config.global';

function App() {
  const navigate = useNavigate();
  // Контекстные стейты
  const [ currentUser, setCurrentUser ] = useState({
    name: '',
    email: '',
    isLogged: !!localStorage.getItem(COOKIE_TOKEN_KEY),
  });
  const [ screenType, setScreenType ] = useState('desktop');
  // дебаунсер для определения типа девайса через слушатель ресайза окна
  const screenTypeDebouncer = useRef(null);

  useEffect(() => {
    const changeScreenType = () => {
      clearTimeout(screenTypeDebouncer.current);

      screenTypeDebouncer.current = setTimeout(() => {
        if (window.innerWidth > SCREEN.desktop.width) {
          setScreenType(SCREEN.desktop.type);
        } else if (window.innerWidth > SCREEN.tablet.width) {
          setScreenType(SCREEN.tablet.type);
        } else {
          setScreenType(SCREEN.mobile.type);
        }
      }, 500);
    };

    window.addEventListener('resize', changeScreenType);

    return () => window.removeEventListener('resize', changeScreenType);
  }, [ screenType ]);

  useEffect(() => {
    mainApi
      .checkCookie()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
          isLogged: true,
        });
      })
      .catch(() => {
        setCurrentUser({});
        localStorage.clear();
        // добавить обработку истекшей куки через попап
      });
  }, []);

  const handleLogin = ({ email, password }) => {
    mainApi
      .login({ email, password })
      .then((res) => {
        localStorage.setItem(COOKIE_TOKEN_KEY, res);
        setCurrentUser((userData) => ({ ...userData, isLogged: true }));
        navigate(ROUTER.movies, { replace: true });
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ScreenTypeContext.Provider value={screenType}>
        {/*Разбиение бандла на чанки и подгрузка новых чанков с прелоудером*/}
        <Suspense fallback={<Preloader/>}>
          <Routes>
            {/*Слой с хэдером и футером*/}
            <Route element={<LayoutWithHeaderAndFooter/>}>
              {/*защита авторизацией через HOC*/}
              <Route element={<ProtectedRoute/>}>
                <Route path={ROUTER.movies} element={<MoviesPage/>}/>
                <Route path={ROUTER.saved} element={<SavedMoviesPage/>}/>
              </Route>
              {/*Основной лендинг, не защищенный авторизацией*/}
              <Route path={ROUTER.main} element={<MainPage/>}/>
            </Route>
            {/*роуты только с хэдером*/}
            <Route element={<LayoutWithHeader/>}>
              {/*защита авторизацией через HOC*/}
              <Route element={<ProtectedRoute/>}>
                <Route path={ROUTER.profile}
                       element={
                         <ProfilePage
                           isLogged={currentUser.isLogged}
                           setIsLogged={setCurrentUser}
                         />
                       }
                />
              </Route>
            </Route>
            {/*роуты без хэдера и футера*/}
            <Route element={<LayoutWithContentOnly/>}>
              <Route
                path={ROUTER.login}
                element={<AuthPage type={'login'} onLogin={handleLogin}/>}
              />
              <Route
                path={ROUTER.register}
                element={<AuthPage type={'register'}/>}
              />
              <Route
                path={ROUTER.any}
                element={<PageNotFound/>}
              />
            </Route>
          </Routes>
        </Suspense>
      </ScreenTypeContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
