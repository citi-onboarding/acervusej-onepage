import { useState, useEffect } from "react";
import api from '../../../services/api';
import Slider from "react-slick";
import GalleryCardMobile from "./GalleryCardMobile/GalleryCardMobile";

import rightArrow from '../../../assets/right_arrow.svg';
import leftArrow from '../../../assets/left_arrow.svg';

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
  };

  const [galleryMobile, setGalleryMobile] = useState({
    posts: [],
  });

  const loadGalleryMobile = async () => {
    const res = await api.get("gallery");
    setGalleryMobile({
      posts: res.data,
    });
  };

  useEffect(() => {
    loadGalleryMobile();
  }, []);

  return (
    <div className='galleryMobile'>
      <img src={leftArrow} alt="" className="arrowLeft"/>
      <Slider {...settings}>
        {galleryMobile.posts.map((post) => (
          <div>
            <GalleryCardMobile post={post} />
          </div>
        ))}
      </Slider>
      <img src={rightArrow} alt="" className="arrowRight"/>
    </div>
  );
}

export default GalleryMobile;
