import React from 'react';
import './Mission-Values.css';
import quotationMarks from '../../../assets/format_quote_end.svg'


function MissionValues({ props }) {
    return (
        <>
            <div className="mission">
                <div className="citation-end">
                    <img src={quotationMarks} alt="aspas" />
                </div>

                <div className="text">
                    <p>{props.mission.description}</p>
                </div>

                <div className="citation-start">
                    <img src={quotationMarks} alt="aspas" />
                </div>
            </div>

            <div className="values">
                <p>{props.vision.description}</p>
            </div>
        </>
    );
}

export default MissionValues;