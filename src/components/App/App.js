import React, { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import '../../blocks/Content/Content.css'

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [viewHeader, setViewHeader] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

 // Проверяем, нужно ли отображать Footer на текущей странице
 const shouldShowFooter = ['/movies', '/saved-movies', '/'].includes(location.pathname);

  return (
    <div className="page">
    { viewHeader &&  <Header isLogged={isLogged} />}
      <main className="content">
      {isLoading ? (
          <Preloader /> // Conditionally render the Preloader
        ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies  />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login setViewHeader={setViewHeader} />} />
          <Route path="/signup" element={<Register setViewHeader={setViewHeader}/>} />
          <Route path="*" element={<PageNotFound setViewHeader={setViewHeader} />} />
        </Routes>
        )}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default App;
