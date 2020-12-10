import { useState, useEffect } from 'react';
import './Contact.css';
import logo from '../../assets/Logo-contact.png'
import axios from 'axios';

function Contact (){

    const [contactReasons, getReason] = useState([]);

    const loadReasons = async () => {
    const res = await axios.get('http://localhost:3001/api/contact-reasons');
        getReason(res.data);
    };

    useEffect(() => {
        loadReasons();
    }, []);

    return(
        <div className = "contact-box" id="contact">
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
                                {contactReasons.map(({ _id, reason }) => (<option key = {_id} >{reason}</option>))}
                            </select>
                        </div>
                        <div>
                            <p>Mensagem</p>
                            <textarea id = "input-message-contact"></textarea>
                        </div>
                        <button className = "button-contact">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;