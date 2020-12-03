import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import GalleryCard from './GalleryCard/GalleryCard'


import './Gallery.css';


function Gallery() {
    const settings = {
        dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function(currentSlide, nextSlide) {
              //console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              //console.log("after change", currentSlide);
            }
    }

    const [gallery, setGallery] = useState([]);

    const loadGallery = async () => {
        const res = await axios.get('http://localhost:3001/api/gallery');
        setGallery(res.data);
    };

    useEffect(() => {
        loadGallery();
    }, []);
    gallery.map(({ image}) => (
      console.log(image)
    ));
    //console.log(gallery[0]?.image?.secure_url)

    return (
        <>
        <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          {gallery.map(({ image }) => (
            <div className="banner-card">
                <GalleryCard props={image} />
            </div>
        ))}
        </Slider>
      </div>
        </>
    );
}

export default Gallery;