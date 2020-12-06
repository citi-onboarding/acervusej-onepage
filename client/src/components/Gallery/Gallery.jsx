import React from "react";
import GalleryMobile from "./GalleryMobile/GalleryMobile";
import GalleryDesktop from "./GalleryDesktop/GalleryDesktop";

import "./Gallery.css";

function Gallery() {
  const[width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [])


  return (
    <div className="gallery">
      <div className="container">
        <div className="content">
          <div className="gallery-section-title">
            <h1>Nossa Galeria</h1>
          </div>
          <div className="carousel">
            {
              width < breakpoint ? <GalleryMobile /> : <GalleryDesktop />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
