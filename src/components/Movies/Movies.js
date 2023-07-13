import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import './Movies.css'
import '../Content/Content.css'

function Movies() {
  return (
      <main className="movies-content content">
        <SearchForm />
        <MoviesCardList />
        <More />
      </main>
  );
}

export default Movies;