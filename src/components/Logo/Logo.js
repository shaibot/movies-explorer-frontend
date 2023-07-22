import LogoIcon from '../../images/logo-header.svg';
import './Logo.css';

function Logo({ setViewHeader }) {
  return (
    <div className="register__container-logo">
      <img
        className="register__logo"
        alt="Логотип в виде белой латинской буквы С на зеленом фоне"
        src={LogoIcon}
      />
    </div>
  );
}

export default Logo;
