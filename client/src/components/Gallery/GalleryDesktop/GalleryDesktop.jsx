import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import GalleryCardDesktop from "./GalleryCardDesktop/GalleryCardDesktop"
import Modal from '../../Modal/Modal';

import rightArrow from "../../../assets/right_arrow.svg";
import leftArrow from "../../../assets/left_arrow.svg";

import "./GalleryDesktop.css";
import "./GalleryCardDesktop/GalleryCardDesktop.css";

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
    autoplay: false,
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
  }

  const closeModal = () =>{
    setModalGalleryVisible(false)
    const body = document.querySelector('body');
    body.style.overflow = 'visible'
  }

  return (
    <div className="galleryDesktop">
      <img src={leftArrow} alt="" className="arrow" id="leftArrow" />
      <Slider {...settings}>
        {galleryDesktop.posts.map((post) => (
          <div key={post._id} className="cardDesktop" onClick={() => openModal(post?.image?.secure_url, post?.title, post?.description)}>
              <GalleryCardDesktop post={post} />
          </div>
        ))}
      </Slider>
      <img src={rightArrow} alt="" className="arrow" id="rightArrow" />
      <Modal image={imgSrc} title={titleSrc} desc={descSrc} modalVisible={modalGalleryVisible} func={closeModal} />
    </div>
  );
}

export default GalleryDesktop;
