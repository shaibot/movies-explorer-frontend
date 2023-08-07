import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button
        type={'button'}
        className="page-not-found__link-back"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
