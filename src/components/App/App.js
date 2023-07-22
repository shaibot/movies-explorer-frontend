import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './App.css';
import '../../blocks/Content/Content.css'

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [viewHeader, setViewHeader] = useState(true)
  const location = useLocation();

 // Проверяем, нужно ли отображать Footer на текущей странице
 const shouldShowFooter =
 location.pathname !== '/profile' &&
 location.pathname !== '/signup' &&
 location.pathname !== '/signin';

  return (
    <div className="page">
    { viewHeader &&  <Header isLogged={isLogged} />}
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies  />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login setViewHeader={setViewHeader} />} />
          <Route path="/signup" element={<Register setViewHeader={setViewHeader}/>} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default App;
