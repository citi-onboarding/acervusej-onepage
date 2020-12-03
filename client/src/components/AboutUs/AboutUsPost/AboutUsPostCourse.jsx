import React from 'react';
import './AboutUsPostCourse.css'

function AboutUsPostCourse({ props }) {
    return (
        <div className="aboutUsPostCourse">
            <div className="aboutUsPostImage">
                <img src={props.aboutCourse.image.secure_url} alt="Sobre nós" />
            </div>
            <div className="aboutUsPostText">
                <h3>{props.aboutCourse.label}</h3>
                <p>{props.aboutCourse.description}</p>
            </div>

        </div>
    );
}

export default AboutUsPostCourse;