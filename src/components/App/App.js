import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import './App.css'
import Header from '../Header/Header';

function App() {
  return (
    <div className="body">
      <div className="page">
          <Routes>
            <Route path="/" element={
            <><Header />
            <Main />
            <Footer /></>
            } />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
