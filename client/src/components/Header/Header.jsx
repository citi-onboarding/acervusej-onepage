import React, {useState} from 'react';
import './Header.css';
import './NavItems'
/* import NavItems from './NavItems'; */
import logo from '../../assets/Logo.png'

function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!isMenuVisible);
    }

  return (
    <header>
        <div className="container" id="headerContainer">
            <nav>
                <a href=""><img src={logo} alt="" id="navLogo" /></a>
                <div className={isMenuVisible ? 'menuClose' : 'menuButton'} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div id="navItems1">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">A Acervus</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
        </div>
        <div className={isMenuVisible ? 'navOpen' : 'navClose'} >
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Quem Somos</a></li>
                <li><a href="">Missão e Visão</a></li>
                <li><a href="">Nossos Serviços</a></li>
                <li><a href="">Galeria de Fotos</a></li>
                <button id="navContact">
                    <a href="">Fale conosco</a>
                </button>
            </ul>
        </div>
        {/* {isMenuVisible ? <NavItems /> : null} */}
    </header>
  );
}

export default Header;