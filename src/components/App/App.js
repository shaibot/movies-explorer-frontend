import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { userContext } from '../../utils/Context';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import '../../blocks/Content/Content.css';

function App() {
  // нужно раскомментировать, чтобы проверить неавторизованного пользователя на главной странице
  const [isLogged, setIsLogged] = useState(useContext(userContext));

  // нужно раскомментировать, чтобы проверить Авторизованного пользователя:
  // const [isLogged, setIsLogged] = React.useState(true);

  const [viewHeader, setViewHeader] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Проверяем, нужно ли отображать Footer на текущей странице
  const shouldShowFooter = ['/Movies/', '/movies', '/'].includes(
    location.pathname
  );
  const shouldShowHeader = ['/Movies/', '/movies', '/', '/profile'].includes(
    location.pathname
  );
  return (
    <div className="page">
      <userContext.Provider value={isLogged}>
        {shouldShowHeader && (
          <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        )}
        <main className="content">
          {isLoading ? (
            <Preloader />
          ) : (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/signin"
                element={<Login setIsLogged={setIsLogged} />}
              />
              <Route
                path="/signup"
                element={<Register setIsLogged={setIsLogged} />}
              />
              <Route
                path="*"
                element={<PageNotFound setViewHeader={setViewHeader} />}
              />
            </Routes>
          )}
        </main>
        {shouldShowFooter && <Footer />}
      </userContext.Provider>
    </div>
  );
}

export default App;
