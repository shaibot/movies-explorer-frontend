import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import './Movies.css'
import More from '../More/More.js';

function Movies() {
  return (
      <main className="movies-content">
        <SearchForm />
        <MoviesCardList />
        <More />
      </main>
  );
}

export default Movies;