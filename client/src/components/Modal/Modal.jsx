import { React } from 'react';
import "./Modal.css";

function Modal({image, title, desc, modalVisible, func}){

    return(
        <div className = {modalVisible? "modalOpened":"modalClosed"}>
            <div className = "backgroundModal">
                <button className = "buttonArea" onClick = {() => func()}>
                    <button className = "buttonModal"></button>
                </button>
                
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