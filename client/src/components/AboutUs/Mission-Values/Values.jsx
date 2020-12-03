import React from 'react';
import './Values.css'




function Values({ props }) {
    return (

        <div className="values">
            {
                props.map(({ _id, title, image }) => (
                    <div key={_id} className="value">
                        <img src={image?.secure_url} alt="" id="value-image"></img>
                        <h3 className="text-value" >{title}</h3>
                    </div>
                ))
            }
        </div>

    );
}

export default Values;