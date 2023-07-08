import './Portfolio.css';

function Portfolio() {
  return (

<div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <nav className="portfolio__navigation">
            <ul className="portfolio__list-items">
              <li className="portfolio__list-item">
                <a className="portfolio__item link" href="#">
                  Статичный сайт
                </a>
                <button className="portfolio__btn-arrow"></button>
              </li>
              <li className="portfolio__list-item">
                <a className="portfolio__item link" href="#">
                  Адаптивный сайт
                </a>
                <button className="portfolio__btn-arrow"></button>
              </li>
              <li className="portfolio__list-item">
                <a className="portfolio__item link" href="#">
                  Одностраничное приложение
                </a>
                <button className="portfolio__btn-arrow"></button>
              </li>
            </ul>
          </nav>
        </div>
  )
  }

  export default Portfolio;