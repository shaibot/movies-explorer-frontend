import React, { useState } from 'react';
import SearchIcon from '../../images/icon-find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Логика обработки формы

    console.log('Movie title:', movieTitle);
  };
  return (
    <>
      <form className="search-form">
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
