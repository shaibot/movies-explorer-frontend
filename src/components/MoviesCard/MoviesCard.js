import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <img src={props.imageUrl} alt={props.title} className="movies-card__image" />
        <button className="movies-card__save" onClick={props.onLikeClick}>Сохранить</button>
        <button className={`movies-card__like ${props.isLiked ? 'movies-card__like_active' : ''}`} onClick={props.onLikeClick} />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__duration">{props.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;