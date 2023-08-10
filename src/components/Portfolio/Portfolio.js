import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio section">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__navigation">
        <ul className="portfolio__list-items">
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="https://github.com/shaibot/how-to-learn" target="_blank">
              Статичный сайт
              <button className="portfolio__btn-arrow"></button>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="https://shaibot.github.io/russian-travel/index.html"
               target="_blank">
              Адаптивный сайт
              <button className="portfolio__btn-arrow"></button>
            </a>
          </li>
          <li className="portfolio__list-item">
            <a className="portfolio__item link" href="https://shaibot.github.io/mesto" target="_blank">
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
