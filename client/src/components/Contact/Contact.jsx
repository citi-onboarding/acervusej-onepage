import { useState, useEffect } from 'react';
import './Contact.css';
import logo from '../../assets/Logo-contact.png'
import axios from 'axios';

function Contact (){

    const [contactReasons, getReason] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [reason, setReason] = useState('');
    const [sendMessage, setSendMessage] = useState('Enviar');

    const loadReasons = async () => {
    const res = await axios.get('http://localhost:3001/api/contact-reasons');
        getReason(res.data);
    };

    useEffect(() => {
        loadReasons();
    }, []);
    
    const handleSubmit = async (event) => {
        try {
          event.preventDefault();
          let subject = name;
          setSendMessage('Enviando...')
          await axios.post('http://localhost:3001/api/send-email', {
            name,
            email,
            phoneNumber,
            subject,
            message,
            reason
          });
          
          console.log('Email enviado com sucesso!');
        } catch (err) {
            alert('Email não enviado')
          console.log(err?.response || err);
        }
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setSendMessage('Enviar');
    };


    return(
        <div className = "contact-box" id="contact">
            <div className = "container">
                <img className= "contact-logo" src = {logo} alt="" ></img>
                <div className= "right-contact">
                    <div className = "information-contact">
                        <h1 className = "contact-title">Converse Conosco!</h1>
                        <p className = "contact-desc">Envie um email ou ligue para nós, vamos entrar em contato.</p>
                    </div>
                    <form  onSubmit={handleSubmit} className = "inputs-contact">
                        <div>
                            <p>Nome</p>
                            <input 
                                placeholder = "Digite seu nome"
                                required 
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input type = "email" 
                                placeholder = "exemplo@gmail.com"
                                required
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <p>Número</p>
                            <input id= "input-number-contact"
                                required
                                placeholder = "(DDD) 99999-9999"
                                name="subject"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                ></input>
                        </div>
                        <div>
                            <p>Motivo</p>
                            <select id="reasons-box" onChange = {(e) => setReason(e.target.value)} >
                                <option value = ''>Escolha o motivo</option>
                                {contactReasons.map(({ _id, reason }) => (<option key = {_id} >{reason}</option>))}
                            </select>
                        </div>
                        <div>
                            <p>Mensagem</p>
                            <textarea id = "input-message-contact"
                                required
                                placeholder = "Digite sua mensagem para a Acervus"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}>
                            </textarea>
                        </div>
                        <button className = "button-contact" type = "submit" >{sendMessage} </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;