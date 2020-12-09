import React, { useState } from "react";
import "./Modal.css"

function Modal({image, title, desc, modalVisible, func}) {
    return(
        <>
            <div className={modalVisible ? "modalOpened" : "modalClosed"} id="modal">
                <div className="backgroundModal">
                <button className="buttonModal" onClick={func}>
                    Close
                </button>
                <div className="imgModal">
                    <img src={image} alt={title}/>
                </div>
                <div className="titleModal">
                    <h2>{title}</h2>
                </div>
                <div className="descModal">
                    <p>{desc}</p>
                </div>
                </div>
            </div>
        </>
    );
}

export default Modal;