import React from 'react';
import './AboutUsPost.css'

function AboutUsPost({ props }) {
    return (
        <div className="aboutUsPost">
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

export default AboutUsPost;