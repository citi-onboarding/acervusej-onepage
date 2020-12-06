import React from "react";

import './GalleryCard.css';

function GalleryCard({ post }) {
    const style = {
        background: 'url(post?.image?.secure_url)'
    }
  return (
      <div className='card' key={post?._id}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
        <div className="gallery-title">
          <h2>{post?.title}</h2>
        </div>
      </div>
  );
}

export default GalleryCard;
