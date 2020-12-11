import { useState, useEffect } from 'react';
import api from '../../services/api';
import Service from './Service/Service';
import Slider from 'react-slick';
import Modal from '../Modal/Modal';

import './OurServices.css';

function OurServices() {

  const [services, setServices] = useState([]);

  const loadServices= async () => {
    const res = await api.get('services');
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
      speed: 1000
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
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }

  const closeModal = () =>{
    setModalServiceVisible(false)
    const body = document.querySelector('body');
    body.style.overflow = 'visible';
  }

  return (
    <div className="all-services" id="services">
      <h1 className = "title-our-services">Nossos Serviços</h1>
      <Slider {...settings}>
        {services?.map(({ _id, image ,title, description}) =>(
          <div key={_id} className="service-card" onClick= {() => openModal(image[0].secure_url, title, description)} >
            <Service  image = {image[0].secure_url} title= {title} desc = {description}/>
          </div>
        ))}
      </Slider>
     <Modal image = {imgSrc} title = {titleSrc} desc ={descSrc} modalServiceVisible ={modalServiceVisible} func={closeModal}/>
    </div>
  );
}

export default OurServices;