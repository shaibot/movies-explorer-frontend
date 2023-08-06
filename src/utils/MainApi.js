const URL_MAIN = 'https://api.movie-exp.nomoredomains.rocks';
let token

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(
    new Error(`Error: ${response.status}: ${response.statusText}`)
  );
}

const getMainApi = async () => {
  const response = await fetch(URL_MAIN);
  const data = await response.json();
  return data;
};

const signUp = async (data) => {
  const response = await fetch(`${URL_MAIN}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const signIn = async (data) => {
  try {
    const response = await fetch(`${URL_MAIN}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      token = await  response.json();
      document.cookie = 'jwt=' + token.token
      return await userMe(document.cookie)
    } else {
      throw new Error(`Error: ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const userMe = async (token) => {
  const response = await fetch(`${URL_MAIN}/users/me/`,{
    method: 'GET',
    headers: {
      Authorization: token,
    }
  })

  return await response.json()

}

const EditProfileFunc = async (data) => {
  const {name} = data
  const response = await fetch(`${URL_MAIN}/users/me/`,{
    method: 'PATCH',
    headers: {
      Authorization: document.cookie,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name}),
  })
  return await response.json()
}

const signOut = async () => {
  const response = await fetch(`${URL_MAIN}/signout/`,{
    method: 'POST',
    headers: {
      Authorization: document.cookie,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  document.cookie = ''
  return response.ok
}




// const deleteMovie = (id, jwt) => {
//   return fetch(`${URL_MAIN}/movies/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwt}`,
//     },
//     method: 'DELETE',
//   });
// };




export { getMainApi, signUp, signIn, URL_MAIN, EditProfileFunc, userMe, signOut};
