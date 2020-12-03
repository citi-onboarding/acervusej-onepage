import React from 'react';
import './Mission.css';

import quotationMarks from '../../../assets/format_quote_end.svg';

// import one from '../../../assets/01.svg';
// import two from '../../../assets/02.svg';
// import three from '../../../assets/03.svg';
// import four from '../../../assets/04.svg';
// import five from '../../../assets/05.svg';
// import six from '../../../assets/06.svg';


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