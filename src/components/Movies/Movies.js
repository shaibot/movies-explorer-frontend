import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import More from '../More/More.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import './Movies.css';

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchForm, setSearchform] = useState('');
  const [countFilms, setCountFilms] = useState(0);
  const [shortFilmToggle, setShortFilmToggle] = useState(false);

  useEffect(() => {
    let filteredMovies = moviesData;

    if (shortFilmToggle) {
      filteredMovies = moviesData.filter((movie) => movie.duration <= 40);
    }
    
    let count;
    if (window.innerWidth > 1100) count = 12;
    else if (window.innerWidth > 680) count = 8;
    else count = 5;
    setCountFilms(count);
  }, [shortFilmToggle, moviesData]);

  return (
    <section className="movies-content">
      <SearchForm setSearchform={setSearchform} setMoviesData={setMoviesData} />
      <FilterCheckbox
        shortFilmToggle={shortFilmToggle}
        setShortFilmToggle={setShortFilmToggle}
      />
      <MoviesCardList
        value={searchForm}
        moviesData={moviesData}
        setMoviesData={setMoviesData}
        countFilms={countFilms}
      />
      <More
        setCountFilms={setCountFilms}
        value={searchForm}
        countFilms={countFilms}
      />
    </section>
  );
}

export default Movies;
