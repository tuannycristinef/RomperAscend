import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logos/logo-01.png';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <img src={logo} alt="RomperAscend Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <a
          href="https://wa.me/5567998887742"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          Solicitar orçamento
        </a>

      </div>
    </header>
  );
}