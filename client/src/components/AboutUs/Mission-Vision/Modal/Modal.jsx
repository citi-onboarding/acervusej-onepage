import React, { useState } from 'react';
import MissionVision from '../Mission-Vision'
import './Modal.css'

import quotationMarks from '../../../../assets/format_quote_end.svg'

function Modal({props}) {
    const [change, setChange] = useState(false);

     function toggleShowMissionText() {
        setChange(false);
        document.querySelector('.mission').style.display = 'block';
        document.querySelector('.vision').style.display = 'none';
    }
    function toggleShowVisionText() {
        setChange(true);
        document.querySelector('.mission').style.display = 'none';
        document.querySelector('.vision').style.display = 'block';
    }

    return (

        <div className="mission-vision">
            <div className="buttons">
                <button className="mission-button" onClick={toggleShowMissionText}>Missão</button>
                <button className="vision-button" onClick={toggleShowVisionText}>Visão</button>
            </div>
            <div className="modal">

                <div className="citation-end">
                    <img src={quotationMarks} alt="aspas" />
                </div>

                <div className="text">
                    <MissionVision props={props} />
                </div>

                <div className="citation-start">
                    <img src={quotationMarks} alt="aspas" />
                </div>
            </div>

        </div>

    );
}

export default Modal;