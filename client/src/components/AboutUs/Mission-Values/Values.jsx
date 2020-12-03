import React from 'react';
import './Values.css'

function Values({ props }) {
    return (

        <div className="value">
            <img src={props} alt="" id="value-image" />
        </div>
    );
}

export default Values;