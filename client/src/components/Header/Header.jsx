import React, {useState} from 'react';
import './Header.css';
import './NavItems'
import NavItems from './NavItems';
import logo from '../../assets/Logo.png'

function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(true);
        document.querySelector('#menuButton').style.display = 'none';
        document.querySelector('#menuClose').style.display = 'block';
        console.log('Open')
    }

    function closeMenu() {
        setMenuVisible(false);
        document.querySelector('#menuClose').style.display = 'none';
        document.querySelector('#menuButton').style.display = 'block';
        console.log('Close')
    }

  return (
    <header>
        <div className="container" id="headerContainer">
            <nav>
                <a href=""><img src={logo} alt="" id="navLogo" /></a>
                <div id="menuButton" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div id="menuClose" onClick={closeMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {isMenuVisible ? <NavItems /> : null}
            <div id="navItems1">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">A Acervus</a></li>
                    {/* <li><a href="">Missão e Visão</a></li> */}
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
                <button id="navContact">
                    <a href="">Fale conosco</a>
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header;