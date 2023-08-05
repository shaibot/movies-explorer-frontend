import React, { useCallback, useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { getMoviesApi } from '../../utils/MoviesApi';

function MoviesCardList({ value, countFilms, moviesData, setMoviesData }) {
  async function getMovies() {
    const arr = await getMoviesApi();
    arr.length = countFilms;
    setMoviesData(arr);
  }

  console.log(moviesData);
  useEffect(() => {
    getMovies();
  }, [countFilms]);

  return (
    <ul className="movies-cardlist">
      {value &&
        moviesData.map(({ image, nameRU, duration, trailerLink }, index) => {
          return (
            <MoviesCard
              image={image}
              title={nameRU}
              duration={duration}
              isLiked={false}
              trailerLink={trailerLink}
              key={index}
            />
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
