import React from 'react';
import SearchIcon from '../../images/icon-find.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
  <>
    <form className="search-form section">
      <img
        className="search-form__icon"
        src={SearchIcon}
        alt="Иконка поиска в виде лупы"
      />
      <input className="search-form__input" type="text" placeholder="Фильм" />
      <button className="search-form__button" />
    </form>
    <FilterCheckbox />
    </>
)
}

export default SearchForm;
