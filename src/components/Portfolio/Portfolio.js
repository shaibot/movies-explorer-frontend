import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__navigation">
        <ul className="portfolio__list-items">
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="#">
              Статичный сайт
              <button className="portfolio__btn-arrow"></button>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="#">
              Адаптивный сайт
              <button className="portfolio__btn-arrow"></button>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="#">
              Одностраничное приложение
              <button className="portfolio__btn-arrow"></button>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
