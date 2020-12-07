import React, {useState} from "react";
import DesktopModal from './DesktopModal'

import './GalleryCardDesktop.css';



function GalleryCardDesktop({ post }) {
  const [isModalVisible, setModalVisible] = useState(false);

  function Modal() {
    <DesktopModal post={post} state={isModalVisible}/>
  }

  function closeModal() {
    setModalVisible(false);
    console.log(isModalVisible)
  }
    

    



  return (
      <div className='cardDesktop' key={post?._id} onClick={Modal}>
        <div className="gallery-image">
          <img src={post?.image?.secure_url} alt={post?.title} />
        </div>
          <div className="gallery-title" onClick={closeModal}>
          <h3>{post?.title}</h3>
        </div>
      </div>
  );
}

export default GalleryCardDesktop;
