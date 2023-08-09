import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTER, SCREEN } from '../../utils/config.global';
import { ScreenTypeContext } from '../../contexts/ScreenTypeContext';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, savedMovies, searchStatus, onSave, onRemove }) {
  const screenType = useContext(ScreenTypeContext);
  const [ isMoreButton, setMoreButton ] = useState(false);
  const [ isRenderingMore, setRenderingMore ] = useState(false);
  const [ renderCount, setRenderCount ] = useState(0);
  const [ page, setPage ] = useState(0);
  const paginationDebounce = useRef(null);
  const path = useLocation().pathname;
  const isSavedMoviesPage = path === ROUTER.saved;

  useEffect(() => {
    if (isSavedMoviesPage) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [ path ]);

  useEffect(() => {
    if (screenType === SCREEN.desktop.type) {
      setRenderCount(SCREEN.desktop.render + SCREEN.desktop.more * page);
    } else if (screenType === SCREEN.tablet.type) {
      setRenderCount(SCREEN.tablet.render + SCREEN.tablet.more * page);
    } else {
      setRenderCount(SCREEN.mobile.render + SCREEN.mobile.more * page);
    }

    movies.length > renderCount
      ? setMoreButton(true)
      : setMoreButton(false);
  }, [ renderCount, page, movies, screenType ]);

  const incrementPage = () => {
    paginationDebounce.current = clearTimeout(paginationDebounce.current);
    setRenderingMore(true);
    paginationDebounce.current = setTimeout(() => {
      setPage((page) => page + 1);
      setRenderingMore(false);
    }, 500);
  };

  // проверка на лайк и присваивание айди для удаления
  const isLiked = (movie) => {
    if (savedMovies.length === 0) {
      return false;
    }

    return savedMovies.reduce((acc, item) => {
      if (item.movieId === movie.id) {
        movie._id = item._id;
        return true;
      }
      return acc;
    }, false);
  };

  const renderMovies = () => {
    if (movies.length > 0) {
      return movies
        .slice(0, renderCount)
        .map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId ? movie.movieId : movie.id}
              movie={movie}
              isLiked={isLiked(movie)}
              isSavedMoviesPage={isSavedMoviesPage}
              onSave={onSave}
              onRemove={onRemove}
            />
          );
        });
    }
  };

  return (
    searchStatus.isLoading
    ? <div className='movies-content__preloader-wrapper'><Preloader /></div>
    : <>
        {searchStatus.isError
          ? <div className='movies-content__error-wrapper'>
            {searchStatus.message === 'Найдите фильм себе по душе (˵ •̀ ᴗ - ˵ )' && <span className='movies-content__error-arrow' />}
            <h2 className='movies-content__error'>{searchStatus.message}</h2>
          </div>
          : <ul className="movies-cardlist">
            {renderMovies()}
          </ul>
        }
        {isMoreButton && !isRenderingMore && !searchStatus.isError && <div className="more">
          <button className="more__btn" onClick={incrementPage}>Ещё</button>
        </div>}
        {isRenderingMore && <Preloader/>}
      </>
  );
}

export default MoviesCardList;
