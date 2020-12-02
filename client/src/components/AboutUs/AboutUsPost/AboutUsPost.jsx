import React from 'react';
import './AboutUsPost.css'

function AboutUsPost({ props }) {
    return (
        <div className="aboutUsPost">
            <h3>{props.label}</h3>
            <img src={props.image.secure_url} alt="Sobre nós" />
            <p>{props.description}</p>
        </div>
    );
}

export default AboutUsPost;