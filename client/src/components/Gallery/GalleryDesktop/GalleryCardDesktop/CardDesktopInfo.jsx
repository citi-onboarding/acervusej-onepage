import React, {useState} from "react";
import DesktopModal from '../../DesktopModal'

import './GalleryCardDesktop.css';

function GalleryCardDesktop({ post }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
      <button onClick={() => setIsModalVisible(true)}>
        {isModalVisible ? <DesktopModal post={post} /> : null }
        <div className='cardDesktop' key={post?._id}>
          <div className="gallery-image">
            <img src={post?.image?.secure_url} alt={post?.title} />
          </div>
          <div className="gallery-title">
            <h3>{post?.title}</h3>
          </div>
      </div>
      </button>
  );
}

export default GalleryCardDesktop;
