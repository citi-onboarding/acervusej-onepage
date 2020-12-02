import React from 'react';
import './AboutUsPostCompany.css'

function AboutUsPostCompany({ props }) {
    return (
        <div className="aboutUsPostCompany">
            <div className="aboutUsPostImage">
                <img src={props.image.secure_url} alt="Sobre nós" />
            </div>
            <div className="aboutUsPostText">
                <h3>{props.label}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    );
}

export default AboutUsPostCompany;