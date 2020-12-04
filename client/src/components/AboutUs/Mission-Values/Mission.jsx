import React from 'react';
import './Mission.css';

import quotationMarks from '../../../assets/format_quote_end.svg';

function Mission({ mission }) {
    return (
        <div className="mission">
            <div className="citation-end">
                <img src={quotationMarks} alt="aspas" />
            </div>

            <div className="text">
                <p>{mission?.description}</p>
            </div>

            <div className="citation-start">
                <img src={quotationMarks} alt="aspas" />
            </div>
        </div>
    );
}

export default Mission;