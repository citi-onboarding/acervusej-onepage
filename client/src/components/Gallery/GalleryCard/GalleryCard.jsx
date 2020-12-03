import React from 'react';

function GalleryCard({props}) {
    return (
        <>
            <img src={props.secure_url} alt="Post de Exemplo"></img>
        </>
    );
}

export default GalleryCard;