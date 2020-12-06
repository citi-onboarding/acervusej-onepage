import React from "react";

import './GalleryCardMobile.css';

function GalleryCardMobile({ post }) {
  return (
      <div className='cardMobile' key={post?._id}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
        <div className="gallery-title">
          <h2>{post?.title}</h2>
        </div>
      </div>
  );
}

export default GalleryCardMobile;
