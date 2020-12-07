import React, {useState} from 'react';

function DesktopModal({post, state}) {
    console.log(post)

    return (
        <>
            <h1>{post?.title}</h1>
        </>
    );
}

export default DesktopModal;