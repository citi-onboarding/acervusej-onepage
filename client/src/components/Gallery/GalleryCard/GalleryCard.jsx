import React from "react";

import './GalleryCard.css';

function GalleryCard({ post }) {
  return (
      <div key={post?._id}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
        <div className="gallery-title">
          <h2 src={post?.title} alt=""></h2>
        </div>
      </div>
  );
}

export default GalleryCard;
