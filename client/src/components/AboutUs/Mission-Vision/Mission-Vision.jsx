import React from 'react';
import './Mission-Vision.css';


function MissionVision({ props }) {
    return (
        <>
            <div className="mission">
                <p>{props.mission.description}</p>
            </div>
            <div className="vision">
            <p>{props.vision.description}</p>
            </div>
        </>
    );
}

export default MissionVision;