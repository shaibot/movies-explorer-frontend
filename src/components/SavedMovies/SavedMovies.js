import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

import './SavedMovies.css';
import { useFilter } from '../../hooks/useFilter';

function SavedMovies({ movies, onSave, onRemove }) {
  const {
    filteredMovies,
    savedQuery,
    handleSubmit,
    searchStatus,
  } = useFilter({ movies, isSavedMoviesPage: true });

  return (
    <section className='saved-movies'>
      <SearchForm
        savedQuery={savedQuery}
        onSubmit={handleSubmit}
      />
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={filteredMovies}
        searchStatus={searchStatus}
        onSave={onSave}
        onRemove={onRemove}
      />
    </section>
  );
}

export default SavedMovies;
