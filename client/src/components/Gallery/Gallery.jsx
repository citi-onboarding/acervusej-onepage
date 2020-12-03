import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";


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
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
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

    //console.log(gallery[0]?.image?.secure_url)

    return (
        <>
        <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          <div>
          {gallery.map(({ image }) => (
            <div className="banner-card">
                <h3 src={image[0].secure_url} alt="Post de Exemplo"></h3>
            </div>
        ))}
            <h3></h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
        </>
    );
}

export default Gallery;