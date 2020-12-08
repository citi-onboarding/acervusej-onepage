import { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Service from './Service/Service';
import Slider from 'react-slick';

import './OurServices.css';

function OurServices() {

  const [services, setServices] = useState([]);

  const loadServices= async () => {
    const res = await axios.get('http://localhost:3001/api/services');
    setServices(res.data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "70px",
      slidesToShow: 1,
      speed: 500
  };

  return (
    <div className="all-services" id="services">
      <h1 className = "title-our-services">Nossos Serviços</h1>
      <Slider {...settings}>
        {services?.map(({ _id, image ,title, description}) =>(
          <div key={_id} className="service-card">
            <Service  image = {image[0].secure_url} title= {title} desc = {description}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurServices;