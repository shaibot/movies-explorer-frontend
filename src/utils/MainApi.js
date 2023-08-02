const urlMain =  'https://api.movie-exp.nomoredomains.rocks'

const getMainApi = async () => {
  const response = await fetch(urlMain);
  const data = await response.json();
  return data;
}


const signUp = async (data) => {
  const response = await fetch(urlMain, {
    method: 'POST',
    Authorization: '1262685206cde3d30f0f9ea3e06ea5ba3b92b70ba84590318cc02a211d86cd83',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.ok
}


const signIn = async (data) => {
  const response = await fetch(urlMain, {
    method: 'POST',
    Authorization: '1262685206cde3d30f0f9ea3e06ea5ba3b92b70ba84590318cc02a211d86cd83',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  console.log(document.cookie);
  return response.ok
}


export { getMainApi, signUp, signIn}