import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCardDesktop from "../GalleryDesktop/GalleryCardDesktop/GalleryCardDesktop";

import './GalleryDesktop.css'

function GalleryDesktop() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "81rem",
        slidesToShow: 2,
        speed: 4000,
        rows: 2,
        slidesPerRow: 1,
        autoplay: true
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
      <Slider {...settings}>
        {galleryDesktop.posts.map((post) => (
          <div>
            <GalleryCardDesktop post={post} />
          </div>
        ))}
      </Slider>
    </div>
    );
}

export default GalleryDesktop;