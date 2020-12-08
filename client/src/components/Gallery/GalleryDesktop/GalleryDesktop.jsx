import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCardDesktop from "../GalleryDesktop/GalleryCardDesktop/GalleryCardDesktop";

import rightArrow from '../../../assets/right_arrow.svg';
import leftArrow from '../../../assets/left_arrow.svg';

import './GalleryDesktop.css'

function GalleryDesktop() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        SwipeToSlide: true,
        slidesToShow: 2,
        speed: 1000,
        rows: 2,
        slidesPerRow: 1,
        autoplay: false
    };

    const [galleryDesktop, setGalleryDesktop] = useState({
        posts: [],
    });

    const loadGalleryDesktop = async () => {
        const res = await axios.get("http://localhost:3001/api/gallery");
        setGalleryDesktop({
            posts: res.data,
        });
    };

    useEffect(() => {
        loadGalleryDesktop();
    }, []);

    return (
        <div className='galleryDesktop'>
          <img src={leftArrow} alt="" className="arrow" id="leftArrow"/>
          <Slider {...settings}>
            {galleryDesktop.posts.map((post) => (
              <div key={post._id}>
                  <GalleryCardDesktop post={post} />
              </div>
            ))}
          </Slider>
        <img src={rightArrow} alt="" className="arrow" id="rightArrow"/>
    </div>
    );
}

export default GalleryDesktop;