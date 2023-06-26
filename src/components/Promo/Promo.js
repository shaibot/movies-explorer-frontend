import React from 'react';
import LandingLogo from '../../images/landing-logo.svg';
import './Promo.css';
import PromoHeader from '../PromoHeader/PromoHeader';

function Promo() {

  return (
<>
    <PromoHeader />
    <section className="promo">
      <div className="promo__description">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <h2 className="promo__learn-more">
          Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его
          создателя.
        </h2>
        <button className="promo__learn-btn">Узнать больше</button>
      </div>
      <img
        className="promo__logo"
        src={LandingLogo}
        alt="Схематичное изображение материков планеты Земля множественным копипастом английского слова WEB"
      />
    </section>
    </>
  );
}

export default Promo;