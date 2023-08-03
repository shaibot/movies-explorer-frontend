const urlMain = 'https://api.movie-exp.nomoredomains.rocks';

const getMainApi = async () => {
  const response = await fetch(urlMain);
  const data = await response.json();
  return data;
};

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(
    new Error(`Error: ${response.status}: ${response.statusText}`)
  );
}

// function signUp({ name, email, password }) {
  function signUp(data) {
  return fetch(`${urlMain}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ name, email, password }),
    body: JSON.stringify(data),

  }).then((response) => checkResponse(response));
}

function signIn({ email, password }) {
  return fetch(`${urlMain}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => checkResponse(response));
}

const checkToken = (token) => {
  return fetch(`${urlMain}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

// const signUp = async (data) => {
//   const response = await fetch(urlMain, {
//     method: 'POST',
//     Authorization: '1262685206cde3d30f0f9ea3e06ea5ba3b92b70ba84590318cc02a211d86cd83',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return response.ok
// }

// const signIn = async (data) => {
//   const response = await fetch(urlMain, {
//     method: 'POST',
//     Authorization:
//       '1262685206cde3d30f0f9ea3e06ea5ba3b92b70ba84590318cc02a211d86cd83',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   console.log(document.cookie);
//   return response.ok;
// };

export { getMainApi, signUp, signIn, checkToken };
