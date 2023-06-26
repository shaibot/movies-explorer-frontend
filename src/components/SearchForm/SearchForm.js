import React from 'react';
import SearchIcon from '../../images/icon-find.svg';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
  <section>
    <form className="search-form">
      <img
        className="search-form__icon"
        src={SearchIcon}
        alt="Иконка поиска в виде лупы"
      />
      <input className="search-form__input" type="text" placeholder="Фильм" />
      <button className="search-form__button" />
    </form>
    <FilterCheckbox />
  </section>
)
}

export default SearchForm;
