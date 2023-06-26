import './PageNotFound.css';

function PageNotFound () {
  return (
    <section className="page-not-found">
    <h1 className='page-not-found__title'>404</h1>
<p className='page-not-found__text'>Страница не найдена</p>
<a className='page-not-found__link-back'>Назад</a>
    </section>
  );
}

export default PageNotFound;