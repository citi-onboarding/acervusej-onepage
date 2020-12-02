import React from 'react';
import './Mission-Vision.css';
import quotationMarks from '../../../assets/format_quote_end.svg'

function MissionVision({ props }) {
    return (
        <div className="modal-vision-mission">
            <div className="modal-button">
                <button>Missão</button>
                <button>Visão</button>
            </div>
            <div className="text">

                <div className="citation-end">
                    <img src={quotationMarks} alt="aspas" />
                </div>

                <div className="p">
                    <p>{props.mission.description}</p>
                </div>

                <div className="citation-start">
                    <img src={quotationMarks} alt="aspas" />
                </div>

            </div>
        </div>
    );
}

export default MissionVision;