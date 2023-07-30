import React, { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import '../../blocks/Content/Content.css'

function App() {

  //Чтобы проверить неавторизованного пользователя на главной странице, нужно расскомментировать
  // const [isLogged, setIsLogged] = React.useState(false);

  //Состояние авторизованного пользователя:
  const [isLogged, setIsLogged] = React.useState(true);

  const [viewHeader, setViewHeader] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

 // Проверяем, нужно ли отображать Footer на текущей странице
 const shouldShowFooter = ['/movies', '/saved-movies', '/'].includes(location.pathname);

  return (
    <div className="page">
    {/* { viewHeader &&  <Header isLogged={isLogged} />} */}
    <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <main className="content">
      {isLoading ? (
          <Preloader />
        ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies  />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login setViewHeader={setViewHeader} />} />
          <Route path="/signup" element={<Register setViewHeader={setViewHeader} />} />
          <Route path="*" element={<PageNotFound setViewHeader={setViewHeader} />} />
        </Routes>
        )}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';

// import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import Preloader from '../Preloader/Preloader';
// import PageNotFound from '../PageNotFound/PageNotFound';
// import './App.css';
// import '../../blocks/Content/Content.css';

// function App() {
//   // Чтобы проверить авторизованного пользователя:
//   const [isLogged, setIsLogged] = useState(true);

//   // Чтобы проверить НЕавторизованного пользователя:
//   // const [isLogged, setIsLogged] = useState(false);

//   const [isLoading, setIsLoading] = useState(true);
//   const [burger, setBurger] = useState(false); // Состояние для бургера
//   const location = useLocation();

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//  //  // Проверяем, нужно ли отображать Footer на текущей странице
//  const shouldShowFooter = ['/movies', '/saved-movies', '/'].includes(location.pathname);


//   return (
//     <div className="page">
//       <Header isLogged={isLogged} setIsLogged={setIsLogged} burger={burger} setBurger={setBurger} />
//       <main className="content">
//         {isLoading ? (
//           <Preloader />
//         ) : (
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/saved-movies" element={<SavedMovies />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/signin" element={<Login />} />
//             <Route path="/signup" element={<Register />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         )}
//       </main>
//       {shouldShowFooter && <Footer />}
//     </div>
//   );
// }

// export default App;
