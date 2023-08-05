import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortFilmToggle, setShortFilmToggle }) {
  const handleCheckboxChange = () => {
    setShortFilmToggle(!shortFilmToggle);
  };
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={shortFilmToggle}
        onChange={handleCheckboxChange}
      />
      <label className="checkbox__label" htmlFor="checkbox" />
      <span className="checkbox__capture">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
