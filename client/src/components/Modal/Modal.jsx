import { React } from 'react';
import "./Modal.css";

function Modal({image, title, desc, modalServiceVisible, func}){

    return(
        <div className = {modalServiceVisible? "modalOpened":"modalClosed"}>
            <div className = "backgroundModal">
                <button className = "buttonModal" onClick = {() => func()}></button>
                <div className = "informationsModal">
                    <img src = {image} className = "imgModal"/>
                    <h1 className = "titleModal">{title}</h1>
                    <p className= "descModal">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;