import './MoviesCard.css';
import { MOVIES_URL } from '../../utils/config.global';

function MoviesCard({ movie, isLiked, isSavedMoviesPage, onSave, onRemove }) {
  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursText = hours > 0 ? `${hours}ч` : '';
    const minutesText = minutes > 0 ? `${minutes}м` : '';

    return `${hoursText} ${minutesText}`;
  };

  const openTrailerLink = () => {
    window.open(`${movie.trailerLink}`);
  };

  const formatImage = () => {
    if (isSavedMoviesPage) {
      return movie.image;
    } else {
      return MOVIES_URL + movie.image.url;
    }
  };

  return (
    <li className="movies-card">
      <img
        src={formatImage()}
        alt={`Обложка фильма ${movie.nameRU}`}
        className="movies-card__image"
        onClick={() => openTrailerLink()}
      />
      {isSavedMoviesPage &&
        <button
          className={'movies-card__delete'}
          onClick={() => onRemove(movie._id)}
        />
      }
      {isLiked && !isSavedMoviesPage &&
        <button
          className={`movies-card__like ${isLiked ? 'movies-card__like_active' : ''}`}
          onClick={() => onRemove(movie._id)}
        />
      }
      {!isSavedMoviesPage && !isLiked &&
        <button
          className="movies-card__save"
          onClick={() => onSave(movie)}
        >
          Сохранить
        </button>
      }
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
