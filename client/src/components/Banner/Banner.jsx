import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";


import './Banner.css';

function Banner() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
      };

  const [banners, setBanners] = useState([]);

  const loadBanners = async () => {
    const res = await axios.get('http://localhost:3001/api/banners');
    setBanners(res.data);
  };

  useEffect(() => {
    loadBanners();
  }, []);

  return (
    <section className="mainBanner container">
      <Slider {...settings}>
        {banners.map(({ _id, image }) => (
            <div key={_id} className="banner-card">
                <img src={image[0].secure_url} alt="Post de Exemplo"/>
            </div>
        ))}
      </Slider>
    </section>
  );
}

export default Banner;