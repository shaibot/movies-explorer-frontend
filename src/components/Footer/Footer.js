import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="section footer">
      <div className="footer__description">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </div>
      <div className="footer__navigation">
        <p className="footer__year">&copy;&nbsp;2020</p>
        <nav className="footer__naviganion-links">
          <ul className="footer__list-links">
            <li>
              <p className="footer__link">
                Яндекс.Практикум
              </p>
            </li>
            <li>
              <p className="footer__link">
                Github
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
