import React from 'react';
import './AboutUsPostCompany.css'

function AboutUsPostCompany({ props }) {
    return (
        <div className="aboutUsPostCompany">
            <div className="aboutUsPostImage">
                <img src={props.aboutCompany.image.secure_url} alt="Sobre nós" />
            </div>
            <div className="aboutUsPostText">
                <h3>{props.aboutCompany.label}</h3>
                <p>{props.aboutCompany.description}</p>
            </div>

        </div>
    );
}

export default AboutUsPostCompany;