import { useState, useEffect } from 'react';
import './Contact.css';
import logo from '../../assets/Logo-contact.png'
import axios from 'axios';

function Contact (){

    const [contactReasons, getReason] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('contactReasons[0].reason');
    const [message, setMessage] = useState('');


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
    
          await axios.post('http://localhost:3001/api/send-email', {
            name,
            email,
            number,
            subject,
            message,
          });
          
          console.log('Email enviado com sucesso!');
        } catch (err) {
            alert('Email não enviado')
          console.log(err?.response || err);
        }
        setName('');
        setEmail('');
        setNumber('');
        setSubject('');
        setMessage('');
    };


    return(
        <div className = "contact-box">
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
                                required 
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input type = "email" 
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
                                name="subject"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                ></input>
                        </div>
                        <div>
                            <p>Motivo</p>
                            <select id="reasons-box" onChange = {(e) => setSubject(e.target.value)} >
                                {contactReasons.map(({ _id, reason }) => (<option key = {_id} >{reason}</option>))}
                            </select>
                        </div>
                        <div>
                            <p>Mensagem</p>
                            <textarea id = "input-message-contact"
                                required
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}>
                            </textarea>
                        </div>
                        <button className = "button-contact" type = "submit" >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;