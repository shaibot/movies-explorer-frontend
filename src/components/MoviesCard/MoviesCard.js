import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ image, title, duration, trailerLink, isLiked }) {
  // Создаем состояние с помощью хука useState.
  // isSaved - переменная, которая хранит информацию о том, сохранена ли карточка.
  // setIsSaved - функция, которая позволяет изменять значение isSaved.
  const [isSaved, setIsSaved] = useState(false);
  // Функция обработки клика по кнопке.
  const handleButtonClick = () => {
    // При клике на кнопку меняем значение isSaved на противоположное с помощью setIsSaved.
    setIsSaved(!isSaved);
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : '';
    const minutesText = minutes > 0 ? `${minutes}м` : '';

    return `${hoursText} ${minutesText}`;
  };

  const openTrailerLink = () => {
    window.open(`${trailerLink}`);
  };

  return (
    <li className="movies-card" onClick={openTrailerLink}>
      <img
        src={`https://api.nomoreparties.co${image.url}`}
        alt={title}
        className="movies-card__image"
      />
      <button className={'movies-card__delete'} onClick={handleButtonClick} />
      {/* Условное отображение кнопки в зависимости от значения isSaved. */}
      {/* Если isSaved равно false, отображается кнопка "Сохранить", иначе отображается кнопка "Понравилось". */}
      {isSaved ? (
        <button
          className={`movies-card__like ${
            isLiked ? 'movies-card__like_active' : ''
          }`}
          onClick={handleButtonClick}
        />
      ) : (
        <button className="movies-card__save" onClick={handleButtonClick}>
          Сохранить
        </button>
      )}
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__duration">{formatDuration(duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
