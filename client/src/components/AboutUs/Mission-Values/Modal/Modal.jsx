import React, { useState } from 'react';
import Mission from '../Mission'
import Values from '../Values';
import './Modal.css'

function Modal({ mission, values }) {
    const [change, setChange] = useState(false);

    function toggleShowMissionText() {
        setChange(false);
        document.querySelector('.mission').style.display = 'block';
        document.querySelector('.values').style.display = 'none';
    }
    function toggleShowValuesText() {
        setChange(true);
        document.querySelector('.mission').style.display = 'none';
        document.querySelector('.values').style.display = 'flex';
    }
    
    return (
        <div className="mission-values" id="missionValue">
            <div className="buttons">
                <button className={change ? 'mission-button sleep-button' : 'mission-button active-button'} onClick={toggleShowMissionText}>Missão</button>
                <button className={change ? 'values-button active-button' : 'values-button sleep-button'} onClick={toggleShowValuesText}>Valores</button>
            </div>

            <div className="modal">
                <Mission mission={mission} />
                <Values values={values} />
            </div>
        </div>
    );
}

export default Modal;