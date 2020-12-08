import {useState, useEffect } from "react";
import GalleryMobile from "./GalleryMobile/GalleryMobile";
import GalleryDesktop from "./GalleryDesktop/GalleryDesktop";
import DesktopModal from "./DesktopModal"

import "./Gallery.css";

function Gallery() {
  const[width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [])

  return (
    <div className="gallery" id="gallery">
      <DesktopModal/>
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
