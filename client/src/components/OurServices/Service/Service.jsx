import React from 'react';
import './Service.css';

function Service({image,title,desc}){
    return(
        <section className = "card-service">
            <div className = "container-service">
                <img className = "image-service" src = {image}></img>
                <h2 className = "title-service">{title}</h2>
                <p className = "desc-service">{desc}</p>
            </div>
        </section>
    )
}

export default Service;