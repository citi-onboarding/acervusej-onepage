import React from 'react';
import './Values.css'

function Values({ values }) {
    return (
        <div className="values">
            {
                values.map((value) => (
                    <div key={value?._id} className="value">
                        <img src={value?.image?.secure_url} alt="" id="value-image"></img>
                        <h3 className="text-value" >{value?.title}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default Values;