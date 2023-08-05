const URL_MAIN = 'https://api.movie-exp.nomoredomains.rocks';

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
      return response.json();
    } else {
      throw new Error(`Error: ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteMovie = (id, jwt) => {
  return fetch(`${URL_MAIN}/movies/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    method: 'DELETE',
  });
};

export { getMainApi, signUp, signIn, URL_MAIN };
