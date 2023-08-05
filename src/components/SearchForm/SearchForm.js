import React, { useEffect, useState } from 'react';
import SearchIcon from '../../images/icon-find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { getMoviesSearch } from '../../utils/MoviesApi';
import './SearchForm.css';

function SearchForm({ setSearchform, setMoviesData }) {
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchform(movieTitle);
    const result = await getMoviesSearch(movieTitle);
    setMoviesData(result);

    // Сохранение данных в localStorage
  localStorage.setItem('searchQuery', movieTitle);
  localStorage.setItem('searchResults', JSON.stringify(result));
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setMovieTitle(savedQuery);
    }
  
    const savedResults = localStorage.getItem('searchResults');
    if (savedResults) {
      setMoviesData(JSON.parse(savedResults));
    }
  }, []);

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
    </>
  );
}

export default SearchForm;
