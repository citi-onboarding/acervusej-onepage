import React, {useState} from 'react';
import './Header.css';
import logo from '../../assets/Logo.png'

function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!isMenuVisible);

        if (isMenuVisible === true) {
            document.querySelector('body').style.overflow = "auto";
            console.log('Hello World')
        } else {
            document.querySelector('body').style.overflow = "hidden";
        }
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
                    <li><a href="#root">Home</a></li>
                    <li><a href="#contentAboutUs">A Acervus</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#gallery">Galeria</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </div>
        <div className={isMenuVisible ? 'navOpen' : 'navClose'} >
            <ul>
                <li><a href="#root" onClick={toggleMenu}>Home</a></li>
                <li><a href="#contentAboutUs" onClick={toggleMenu}>Quem Somos</a></li>
                <li><a href="#missionValue" onClick={toggleMenu}>Missão e Visão</a></li>
                <li><a href="#services" onClick={toggleMenu}>Nossos Serviços</a></li>
                <li><a href="#gallery" onClick={toggleMenu}>Galeria de Fotos</a></li>
                <button id="navContact" onClick={toggleMenu}>
                    <a href="#contact">Fale conosco</a>
                </button>
            </ul>
        </div>
    </header>
  );
}

export default Header;