import React, { useEffect, useState } from 'react';

import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

import './SavedMovies.css';

function SavedMovies() {
  const [moviesData, setMoviesData] = useState([])
  const [searchForm, setSearchform] = useState('')
  const [countFilms, setCountFilms] = useState(0)

  useEffect(() => {
    let count
    if(window.innerWidth > 1100) count = 12
    else if(window.innerWidth > 680) count = 8
    else count = 5
    setCountFilms(count)
  }, [])

  return (
    <section className='saved-movies'>
      <SearchForm setSearchform={setSearchform} setMoviesData={setMoviesData}/>
      <MoviesCardList value={searchForm} moviesData={moviesData} setMoviesData={setMoviesData} countFilms={countFilms}/>
    </section>
  );
}

export default SavedMovies;
