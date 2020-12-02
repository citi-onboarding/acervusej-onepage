import React, { useState } from 'react';
import MissionValues from '../Mission-Values'
import './Modal.css'



function Modal({props}) {
    const [change, setChange] = useState(false);

     function toggleShowMissionText() {
        setChange(false);
        document.querySelector('.mission').style.display = 'flex';
        document.querySelector('.values').style.display = 'none';
    }
    function toggleShowValuesText() {
        setChange(true);
        document.querySelector('.mission').style.display = 'none';
        document.querySelector('.values').style.display = 'block';
    }

    return (

        <div className="mission-values">
            <div className="buttons">
                <button className="mission-button" onClick={toggleShowMissionText}>Missão</button>
                <button className="values-button" onClick={toggleShowValuesText}>Valores</button>
            </div>
            <div className="modal">
                <MissionValues props={props} />
            </div>

        </div>

    );
}

export default Modal;