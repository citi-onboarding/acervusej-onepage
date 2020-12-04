import React from 'react';

console.log("aqui")
function GalleryCard({image, id}) {
    return (
        <>
            <img key={id} src={image.secure_url} alt=""/>
        </>
    );
}

export default GalleryCard;