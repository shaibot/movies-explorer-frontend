// import React, { useState } from 'react';
// import './MoviesCard.css';

// function MoviesCard(props) {
//   const [isSaved, setIsSaved] = useState(false);

//   const handleSaveClick = () => {
//     setIsSaved(true);
//     // Здесь функция, которая сохранит карточку
//   };
//   return (
//     <div className="movies-card">
//       <img src={props.imageUrl} alt={props.title} className="movies-card__image" />
//       {isSaved ? (
//         <button className="movies-card__like movies-card__like_active" onClick={props.onLikeClick} />
//         ) : (
//           <button className="movies-card__save" onClick={handleSaveClick}>Сохранить</button>
//       )}
//       <div className="movies-card__info">
//         <h2 className="movies-card__title">{props.title}</h2>
//         <p className="movies-card__duration">{props.duration}</p>
//       </div>
//     </div>
//   );
// }

// export default MoviesCard;


import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  // Создаем состояние с помощью хука useState.
  // isSaved - переменная, которая хранит информацию о том, сохранена ли карточка.
  // setIsSaved - функция, которая позволяет изменять значение isSaved.
  const [isSaved, setIsSaved] = useState(false);

  // Функция обработки клика по кнопке.
  const handleButtonClick = () => {
    // При клике на кнопку меняем значение isSaved на противоположное с помощью setIsSaved.
    setIsSaved(!isSaved);
  };

  return (
    <div className="movies-card">
      <img src={props.imageUrl} alt={props.title} className="movies-card__image" />
      {/* Условное отображение кнопки в зависимости от значения isSaved. */}
      {/* Если isSaved равно false, отображается кнопка "Сохранить", иначе отображается кнопка "Понравилось". */}
      {isSaved ? (
        <button className={`movies-card__like ${props.isLiked ? 'movies-card__like_active' : ''}`} onClick={handleButtonClick} />
      ) : (
        <button className="movies-card__save" onClick={handleButtonClick}>Сохранить</button>
      )}
      <div className="movies-card__info">
        <h2 className="movies-card__title">{props.title}</h2>
        <p className="movies-card__duration">{props.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
