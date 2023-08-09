import { useEffect, useState } from 'react';
import { SEARCH_KEY, REGEXP_FILTER } from '../utils/config.global';

export const useFilter = ({ movies, isSavedMoviesPage }) => {
  const [ filteredMovies, setFilteredMovies ] = useState([]);
  const [ savedQuery, setSavedQuery ] = useState({
    string: '',
    isShort: false,
    movies: [],
  });
  const [ searchStatus, setSearchStatus ] = useState({
    message: '',
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    if (SEARCH_KEY in localStorage && !isSavedMoviesPage) {
      const searchHistory = JSON.parse(localStorage.getItem(SEARCH_KEY));
      setSavedQuery({
        string: searchHistory.string,
        isShort: searchHistory.isShort,
        movies: searchHistory.movies,
      });
      setFilteredMovies(searchHistory.movies);
    }

    if (!localStorage.getItem(SEARCH_KEY) && !isSavedMoviesPage) {
      setSearchStatus((prevState) => {
        return {
          ...prevState,
          isError: true,
          message: 'Найдите фильм себе по душе (˵ •̀ ᴗ - ˵ )'
        };
      });
    }
  }, []);

  useEffect(() => {
    if (isSavedMoviesPage) setFilteredMovies(movies);
  }, [ isSavedMoviesPage, movies ]);

  useEffect(() => {
    if (!isSavedMoviesPage && SEARCH_KEY in localStorage) {
      setFilteredMovies(savedQuery.movies);
    }
  }, [ isSavedMoviesPage, savedQuery ]);

  const filterMovies = (query) => {
    if (query.isShort) {
      return movies
        .filter(movie => movie.duration <= 40)
        .filter(movie => movie
          .nameRU
          .trim()
          .toLowerCase()
          .replace(REGEXP_FILTER, '')
          .includes(
            query
              .string
              .trim()
              .toLowerCase()
              .replace(REGEXP_FILTER, '')
          ));
    } else {
      return movies.filter(movie => movie
        .nameRU
        .trim()
        .toLowerCase()
        .replace(REGEXP_FILTER, '')
        .includes(
          query
            .string
            .trim()
            .toLowerCase()
            .replace(REGEXP_FILTER, '')
        ));
    }
  };

  const setLoader = (boolean) => {
    setSearchStatus((prevState) => {
      return {
        ...prevState,
        isLoading: boolean,
      };
    });
  };

  const resetStatus = () => {
    setSearchStatus({ isLoading: false, isError: false, message: '' });
  };

  const handleSubmit = (query) => {
    resetStatus();

    const filteredMovies = filterMovies(query);

    setLoader(true);
    setTimeout(() => {
      if (filteredMovies.length === 0) {
        setSearchStatus((prevState) => {
          return {
            ...prevState,
            isError: true,
            message: 'Ничего не найдено (·•᷄∩•᷅)',
          };
        });
      }
      setFilteredMovies(filteredMovies);
      setLoader(false);
    }, 300);

    if (!isSavedMoviesPage) {
      localStorage.setItem(SEARCH_KEY, JSON.stringify({
        string: query.string,
        isShort: query.isShort,
        movies: filteredMovies,
      }));
    }
  };

  return { filteredMovies, savedQuery, handleSubmit, searchStatus };
};
