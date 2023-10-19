import logo from '/logo.svg';
import styled from './header.module.css';

const Header = () => (
  <header className={styled.header}>
    <div className={styled.logoContainer}>
      <img src={ logo } alt="Logo smart fit" />
    </div>
    <div className={styled.textContainer}>
      <div className={styled.heading}>
        <h1>REABERTURA <br /> SMART FIT</h1>
        <span className={styled.headingBorder}></span>
      </div>
      <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
    </div>
  </header>
);

export default Header;