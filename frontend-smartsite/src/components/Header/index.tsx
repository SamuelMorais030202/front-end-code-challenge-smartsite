import logo from '/logo.svg';
import styled from './header.module.css';

const Header = () => (
  <header className={styled.header}>
    <img src={ logo } alt="Logo smartfit" />
  </header>
);

export default Header;