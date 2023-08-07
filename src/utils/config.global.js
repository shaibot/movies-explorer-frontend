export const COOKIE_TOKEN_KEY = 'jwt';
export const URL_MAIN_API = 'https://api.movie-exp.nomoredomains.rocks';
// export const URL_MAIN_API = 'http://localhost:3001';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const ROUTER = {
  main: '/',
  movies: '/movies',
  saved: '/saved-movies',
  profile: '/profile',
  login: '/signin',
  register: '/signup',
  any: '*',
};

export const SCREEN = {
  desktop: {
    type: 'desktop',
    width: 1100,
  },
  tablet: {
    type: 'tablet',
    width: 680,
  },
  mobile: {
    type: 'mobile',
    width: 500,
  },
};
