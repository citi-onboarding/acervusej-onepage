import { useState, useEffect, useReducer } from 'react';
import './Contact.css';
import logo from '../../assets/Logo-contact.png'
import axios from 'axios';


const initialState = {
    name: '',
    email: '',
    subject: '',
    phoneNumber : '',
    message: '',
    reason: ''
};

const reducer = (state, action) => {
    if (action.type === "reset") {
      return initialState;
    }
    const result = { ...state };
    result[action.field] = action.value;
    return result;
};

function Contact (){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, email, subject, phoneNumber, message, reason } = state;
    const [contactReasons, getReason] = useState([]);
    const [sendMessage, setSendMessage] = useState('Enviar');
  
    const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };


    const loadReasons = async () => {
    const res = await axios.get('http://localhost:3001/api/contact-reasons');
        getReason(res.data);
    };

    useEffect(() => {
        loadReasons();
    }, []);
    
    const sendEmail = async (event) => {
        try {
          event.preventDefault();
          state.subject = state.name
          setSendMessage('Enviando...')
          await axios.post('http://localhost:3001/api/send-email', state);
          
          console.log('Email enviado com sucesso!');
        } catch (err) {
            alert('Email não enviado')
        }
        dispatch({ type: "reset" });
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
                    <form  onSubmit={sendEmail} className = "inputs-contact">
                        <div>
                            <p>Nome</p>
                            <input 
                                placeholder = "Digite seu nome"
                                required 
                                name="name"
                                value={name}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input type = "email" 
                                placeholder = "exemplo@gmail.com"
                                required
                                name="email"
                                value={email}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <p>Número</p>
                            <input id= "input-number-contact"
                                required
                                placeholder = "(DDD) 99999-9999"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                ></input>
                        </div>
                        <div>
                            <p>Motivo</p>
                            <select id="reasons-box" value = {reason} name= "reason" onChange = {handleChange} >
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
                                onChange={handleChange}>
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