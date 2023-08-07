import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import './Header.css';
import Logo from '../Logo/Logo';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Header() {
  const { isLogged } = useContext(CurrentUserContext);
  const location = useLocation();
  const [burger, setBurger] = useState(false);
  const hideAuthNavPaths = ['/movies', '/saved-movies'];
  const [visibility, setVisibility] = useState(false)
  const shouldHideAuthNav = hideAuthNavPaths.includes(location.pathname);

  useEffect(() => {
    setVisibility(!!isLogged )
  }, [isLogged])

  return (
    <header className="header">
      <Link to="/" className="header__logo-link link">
        <img
          className="header__logo"
          src={headerLogo}
          alt="Логотип в виде латинской С в зеленом круге"
        />
      </Link>
      {visibility && (
        <div onClick={(e) => setBurger(true)} className="header__burger"></div>
      )}
      {visibility ? (
        <Navigation burger={burger} setBurger={setBurger} />
      ) : shouldHideAuthNav ? null : (
        <AuthNav />
      )}
    </header>
  );
}

export default Header;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import headerLogo from '../../images/logo-header.svg';
// import Navigation from '../Navigation/Navigation';
// import AuthNav from '../AuthNav/AuthNav';
// import './Header.css';

// function Header({ isLogged, setIsLogged, burger, setBurger }) {
//   const location = useLocation();
//   const hideAuthNavPaths = ['/movies', '/saved-movies'];
//   const shouldHideAuthNav = isLogged && hideAuthNavPaths.includes(location.pathname);

//   return (
//     <header className="header">
//       <Link to="/" className="header__logo-link link">
//         <img
//           className="header__logo"
//           src={headerLogo}
//           alt="Логотип в виде латинской С в зеленом круге"
//         />
//       </Link>
//       {shouldHideAuthNav ? <Navigation burger={burger} setBurger={setBurger} /> : <AuthNav burger={burger} setBurger={setBurger} />}
//     </header>
//   );
// }

// export default Header;
