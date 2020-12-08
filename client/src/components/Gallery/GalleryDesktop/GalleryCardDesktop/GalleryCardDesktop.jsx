import React, {useState, createRef} from "react";
import DesktopModal from '../../DesktopModal'

import './GalleryCardDesktop.css';



function GalleryCardDesktop({ post }) {
  const [isModalVisible, setModalVisible] = useState(false);

  function Modal() {
    const title = post?.title
    console.log(title)
  }

  function closeModal() {
    setModalVisible(false);
    console.log(isModalVisible)
  }

  return (
    <button onClick={Modal}>
      <div className='cardDesktop' key={post?._id}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
          <div className="gallery-title" onClick={closeModal}>
          <h3>{post?.title}</h3>
        </div>
      </div>
      </button>
  );
}

export default GalleryCardDesktop;
