const urlMovies =  'https://api.nomoreparties.co/beatfilm-movies'

const getMoviesApi = async () => {
  const response = await fetch(urlMovies);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}

const getMoviesSearch = async (str) => {
  const reg = new RegExp(str, 'g', 'i');
  const arr = await getMoviesApi();

  if (!arr || !Array.isArray(arr)) {
    return []; // Возвращаем пустой массив в случае, если arr не содержит данных или не является массивом
  }
  
  return await arr.filter(item => reg.test(item.nameRU) || reg.test(item.nameEN) || reg.test(item.description))
}


export { getMoviesApi, getMoviesSearch }