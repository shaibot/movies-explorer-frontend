import './AboutMe.css';
import Photo from '../../images/vitalij.png'

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__info">
        <div className="about-me__profile">
        <p className="about-me__name">Виталий</p>
        <p className="about-me__profession">
          Фронтенд-разработчик, 30&nbsp;лет
        </p>
        <p className="about-me__description">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
          экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
          музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015
          года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как
          прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами
          и&nbsp;ушёл с&nbsp;постоянной работы.
        </p>
        <a className="about-me__github link" href="#">
          Github
        </a>
        </div>
        <img className='about-me__photo' src={Photo} alt="Фотография из анкеты" />
        </div>
        <div className="about-me__portfolio">
          <h3 className="about-me__portfolio-title">Портфолио</h3>
          <nav className="about-me__navigation">
            <ul className="about-me__list-items">
              <li className="about-me__list-item">
                <a className="about-me__item link" href="#">
                  Статичный сайт
                </a>
                <button className="about-me__btn-arrow"></button>
              </li>
              <li className="about-me__list-item">
                <a className="about-me__item link" href="#">
                  Адаптивный сайт
                </a>
                <button className="about-me__btn-arrow"></button>
              </li>
              <li className="about-me__list-item">
                <a className="about-me__item link" href="#">
                  Одностраничное приложение
                </a>
                <button className="about-me__btn-arrow"></button>
              </li>
            </ul>
          </nav>
        </div>

    </section>
  );
}

export default AboutMe;
