// import Movies from '../Movies/Movies'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;
