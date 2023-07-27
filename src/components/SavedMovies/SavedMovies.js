// import Movies from '../Movies/Movies'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
