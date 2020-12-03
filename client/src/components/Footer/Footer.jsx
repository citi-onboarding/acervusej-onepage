import React from 'react';
import './Footer.css';
import linkedinLogo from '../../assets/Linkedin.svg';
import instagramLogo from '../../assets/Instagram.svg';
import emailLogo from '../../assets/Email.svg';


function Footer () {
    return (
        <footer className="mainFooter" className='.container'>
            <div id="smContainer">
                <div id="ftLinkedin" className="smLogo">
                    <img src={linkedinLogo} alt=""/>
                    <span>@acervusej</span>
                </div>
                <div id="ftInstagram" className="smLogo">
                    <img src={instagramLogo} alt=""/>
                    <span>/acervusej</span>
                </div>
                <div id="ftEmail" className="smLogo">
                    <img src={emailLogo} alt=""/>
                    <span>acervusej@gmail.com</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;