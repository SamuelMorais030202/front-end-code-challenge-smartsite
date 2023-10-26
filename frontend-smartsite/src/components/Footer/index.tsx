import logo from '/logo.svg';
import styled from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styled.footerContainer}>
      <img src={ logo } alt="Logo smart fit" />
      <p data-testid="footer-paragraph">Todos os direitos reservados - 2023</p>
    </footer>
  );
};

export default Footer;