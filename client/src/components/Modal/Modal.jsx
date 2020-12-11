import { React } from 'react';
import "./Modal.css";

function Modal({image, title, desc, modalServiceVisible, func}){

    return(
        <div className = {modalServiceVisible? "modalOpened":"modalClosed"}>
            <div className = "backgroundModal">
                <button className = "buttonModal" onClick = {() => func()}></button>
                <div className = "informationsModal">
                    <div className="imagesModal">
                    <div className="imageModal">
                        <img src = {image}/>
                    </div>
                    </div>
                    <div className="modalText">
                    <div className="titleModal">
                        <h1>{title}</h1>
                    </div>
                    <div className="descModal">
                        <p>{desc}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;