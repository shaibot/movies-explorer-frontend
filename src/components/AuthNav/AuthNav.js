import { useNavigate } from 'react-router-dom';
import './AuthNav.css';
import { ROUTER } from '../../utils/config.global';

function AuthNav() {
  const navigate = useNavigate();

  return (
    <nav className="header__nav">
      <button
        className="header__nav-btn"
        type="button"
        onClick={() => navigate(ROUTER.register)}>
        Регистрация
      </button>
      <button
        className="header__nav-btn header__nav-btn_type_login"
        type="button"
        onClick={() => navigate(ROUTER.login)}
      >
        Войти
      </button>
    </nav>
  );
}

export default AuthNav;
