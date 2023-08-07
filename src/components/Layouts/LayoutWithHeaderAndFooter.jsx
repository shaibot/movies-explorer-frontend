import Header from '../Header/Header';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ROUTER } from '../../utils/config.global';

const LayoutWithHeaderAndFooter = () => {

  return (
    <>
      <Header/>
      <main className="content">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default LayoutWithHeaderAndFooter;
