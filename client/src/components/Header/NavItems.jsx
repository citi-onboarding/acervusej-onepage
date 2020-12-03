import React from 'react';
import './Header.css';

function NavItems({}) {
  return (
        <div id="navItems">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Quem Somos</a></li>
                <li><a href="">Missão e Visão</a></li>
                <li><a href="">Nossos Serviços</a></li>
                <li><a href="">Galeria de Fotos</a></li>
            </ul>
            <button id="navContact">
                <a href="">Fale conosco</a>
            </button>
        </div>
  );
}

export default NavItems;