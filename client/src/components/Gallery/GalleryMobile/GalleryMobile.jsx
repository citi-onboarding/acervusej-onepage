import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCardMobile from "./GalleryCardMobile/GalleryCardMobile";

import "./GalleryMobile.css";

function GalleryMobile() {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    vertical: true,
    verticalSwiping: false,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log("after change", currentSlide);
    // },
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
    <div className='galleryMobile'>
      <Slider {...settings}>
        {galleryMobile.posts.map((post) => (
          <div>
            <GalleryCardMobile post={post} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GalleryMobile;
