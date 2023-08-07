import { URL_MAIN_API } from './config.global';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw JSON.parse(text).message || JSON.parse(text).error;
  });
};

export const register = ({ name, email, password }) => {
  return fetch(URL_MAIN_API + '/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(URL_MAIN_API + '/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkCookie = () => {
  return fetch(URL_MAIN_API + '/users/me', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};

export const signOut = () => {
  return fetch(URL_MAIN_API + '/signout', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
