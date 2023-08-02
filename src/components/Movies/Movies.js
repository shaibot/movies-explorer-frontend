import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import './Movies.css'

function Movies() {
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
      <section className="movies-content">
        <SearchForm setSearchform={setSearchform} setMoviesData={setMoviesData}/>
        <MoviesCardList value={searchForm} moviesData={moviesData} setMoviesData={setMoviesData} countFilms={countFilms}/>
        <More setCountFilms={setCountFilms} value={searchForm} countFilms={countFilms}/>
      </section>
  );
}

export default Movies;