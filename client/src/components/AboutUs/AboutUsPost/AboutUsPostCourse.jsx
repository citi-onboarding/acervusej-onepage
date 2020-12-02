import React from 'react';
import './AboutUsPostCourse.css'

function AboutUsPostCourse({ props }) {
    return (
        <div className="aboutUsPostCourse">
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

export default AboutUsPostCourse;