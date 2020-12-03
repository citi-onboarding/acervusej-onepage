import React, { useState } from 'react';
import MissionValues from '../Mission-Values'
import './Modal.css'



function Modal({props}) {
    const [change, setChange] = useState(false);

     function toggleShowMissionText() {
        setChange(false);
        document.querySelector('.mission').style.display = 'flex';
        document.querySelector('.values').style.display = 'none';
        document.querySelector('.values-button').style.borderBottom = 'none';
        document.querySelector('.values-button').style.color = '#ababab';
        document.querySelector('.mission-button').style.borderBottom = '0.25rem solid #000000';
        document.querySelector('.mission-button').style.color = '#000000';
    }
    function toggleShowValuesText() {
        setChange(true);
        document.querySelector('.mission').style.display = 'none';
        document.querySelector('.values').style.display = 'flex';
        document.querySelector('.values-button').style.borderBottom = '0.25rem solid #000000';
        document.querySelector('.values-button').style.color = '#000000';
        document.querySelector('.mission-button').style.borderBottom = 'none';
        document.querySelector('.mission-button').style.color = '#ababab';
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