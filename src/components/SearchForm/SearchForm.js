import React, { useState } from 'react';
import SearchIcon from '../../images/icon-find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { getMoviesSearch } from '../../utils/MoviesApi';

function SearchForm({setSearchform, setMoviesData}) {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchform(movieTitle)
    const result = await getMoviesSearch(movieTitle)
    setMoviesData(result)
  };



  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <img
          className="search-form__icon"
          src={SearchIcon}
          alt="Иконка поиска в виде лупы"
        />
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          required
        />
        <button className="search-form__button" type="submit" />
      </form>
      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
