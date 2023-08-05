const URL_MOVIES =  'https://api.nomoreparties.co/beatfilm-movies'

const getMoviesApi = async () => {
  const response = await fetch(URL_MOVIES);
  const data = await response.json();
  return data;
}

const getMoviesSearch = async (str) => {
  const reg = new RegExp(str, 'g', 'i');
  const arr = await getMoviesApi();
  return await arr.filter(item => reg.test(item.nameRU) || reg.test(item.nameEN) || reg.test(item.description))
}


export { getMoviesApi, getMoviesSearch }