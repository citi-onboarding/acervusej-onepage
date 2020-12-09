import { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service/Service';
import Slider from 'react-slick';
import Modal from '../Modal/Modal';

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

  const [modalServiceVisible, setModalServiceVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [titleSrc, setTitleSrc] = useState("");
  const [descSrc, setDescSrc] = useState("");


  const openModal = async (img, title, desc) =>{
    setImgSrc(img);
    setTitleSrc(title);
    setDescSrc(desc);
    setModalServiceVisible(!modalServiceVisible);
  }

  const closeModal = () =>{
    setModalServiceVisible(false)
  }

  return (
    <div className="all-services">
      <Modal image = {imgSrc} title = {titleSrc} desc ={descSrc} modalServiceVisible ={modalServiceVisible} func={closeModal}/>
      <h1 className = "title-our-services">Nossos Serviços</h1>
      <Slider {...settings}>
        {services?.map(({ _id, image ,title, description}) =>(
          <div key={_id} className="service-card" onClick= {() => openModal(image[0].secure_url, title, description)}>
            <Service  image = {image[0].secure_url} title= {title} desc = {description}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurServices;