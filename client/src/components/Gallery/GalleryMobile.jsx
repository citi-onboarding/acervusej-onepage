import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCard from "./GalleryCard/GalleryCard";

import "./GalleryMobile.css";

function GalleryMobile() {    

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const [galleryMobile, setGalleryMobile] = useState({
    posts: [],
  });

  const loadGalleryMobile = async () => {
    const res = await axios.get("http://localhost:3001/api/gallery");
    setGalleryMobile({
      posts: res.data,
    });
  };

  useEffect(() => {
    loadGalleryMobile();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {galleryMobile.posts.map((post) => (
          <div>
            <GalleryCard post={post} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default GalleryMobile;
