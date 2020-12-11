import { useState, useEffect } from "react";
import api from '../../../services/api';
import Slider from "react-slick";
import GalleryCardMobile from "./GalleryCardMobile/GalleryCardMobile";
import Modal from '../../Modal/Modal';

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

  const [modalGalleryVisible, setModalGalleryVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [titleSrc, setTitleSrc] = useState("");
  const [descSrc, setDescSrc] = useState("");

  const openModal = async (img, title, desc) =>{
    setImgSrc(img);
    setTitleSrc(title);
    setDescSrc(desc);
    setModalGalleryVisible(!modalGalleryVisible);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
    settings.autoplay = false;
  }

  const closeModal = () =>{
    setModalGalleryVisible(false)
    const body = document.querySelector('body');
    body.style.overflow = 'visible'
    settings.autoplay = true;
  }

  return (
    <div className='galleryMobile'>
      <img src={leftArrow} alt="" className="arrowLeft"/>
      <Slider {...settings}>
        {galleryMobile.posts.map((post) => (
          <div key={post._id} className="cardDesktop" onClick={() => openModal(post?.image?.secure_url, post?.title, post?.description)}>
            <GalleryCardMobile post={post} />
          </div>
        ))}
      </Slider>
      <img src={rightArrow} alt="" className="arrowRight"/>
      <Modal image={imgSrc} title={titleSrc} desc={descSrc} modalVisible={modalGalleryVisible} func={closeModal} />
    </div>
  );
}

export default GalleryMobile;
