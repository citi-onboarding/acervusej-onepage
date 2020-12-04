import React from 'react';
import './Contact.css';
import logo from '../../assets/Logo-contact.png'

function Contact (){
    return(
        <div className = "contact-box">
            <div className = "container">
                <img className= "contact-logo" src = {logo} alt="" ></img>
                <div className= "right-contact">
                    <div className = "information-contact">
                        <h1 className = "contact-title">Converse Conosco!</h1>
                        <p className = "contact-desc">Envie um email ou ligue para nós, vamos entrar em contato.</p>
                    </div>
                    <div className = "inputs-contact">
                        <div>
                            <p>Nome</p>
                            <input></input>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Número</p>
                            <input id= "input-number-contact"></input>
                        </div>
                        <div>
                            <p>Motivo</p>
                            <select id="reasons-box" >
                                <option></option>
                            </select>
                        </div>
                        <div>
                            <p>Mensagem</p>
                            <input id = "input-message-contact"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;