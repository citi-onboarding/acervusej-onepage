import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCard from "./GalleryCard/GalleryCard";

import "./Gallery.css";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  const [gallery, setGallery] = useState({
    posts: [],
  });

  const loadGallery = async () => {
    const res = await axios.get("http://localhost:3001/api/gallery");
    setGallery({
      posts: res.data,
    });
  };

  useEffect(() => {
    loadGallery();
  }, []);

  return (
  <div className="gallery">
    <div className='container'>
      <div className='carousel'>
        <Slider {...settings}>
          {gallery.posts.map((post) => (
            <div>
              <GalleryCard post={post} />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
}

export default Gallery;
