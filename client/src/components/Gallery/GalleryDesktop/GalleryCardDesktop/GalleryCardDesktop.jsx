import React from "react";

import './GalleryCardDesktop.css';

function GalleryCardDesktop({ post }) {
  return (
      <div className='cardDesktop' key={post?._id}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
        <div className="gallery-title">
          <h3>{post?.title}</h3>
        </div>
      </div>
  );
}

export default GalleryCardDesktop;
