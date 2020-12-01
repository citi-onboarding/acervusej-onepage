import { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUsPost.css'
import '../../global.css'
import aspas from '../../assets/format_quote_end.png'
//import AboutUsPost from './AboutUsPost/AboutUsPost';

function AboutUs() {
    const [aboutUs, setAboutUs] = useState({
        key: '',
        aboutCompany: {
            description: '',
            image: {
                secure_url: '',
            },
        },
        aboutCourse: {
            description: '',
            label: '',
            image: {
                secure_url: '',
            },
        },
        mission: {
            description: ''
        },
        vision: {
            description: ''
        },
        _id: ''
    },

    );


    const loadAboutUs = async () => {
        const res = await axios.get('http://localhost:3001/api/about-us');
        setAboutUs({
            key: res.data[0].key,
            aboutCompany: {
                description: res.data[0].aboutCompany.description,
                image: {
                    secure_url: res.data[0].aboutCompany.image.secure_url,
                },
            },
            aboutCourse: {
                label: res.data[0].aboutCourse.key,
                description: res.data[0].aboutCourse.description,

                image: {
                    secure_url: res.data[0].aboutCourse.image.secure_url,
                },
            },
            mission: {
                description: res.data[0].mission.description,
            },
            vision: {
                description: res.data[0].vision.description,
            },
            _id: res.data[0]._id
        })
    };

    useEffect(() => {
        loadAboutUs();
    }, []);

    return (
        <div className="aboutUs">
            <div className="container">
                <div className="aboutUsPost">
                    <h3>{aboutUs.key}</h3>
                    <img src={aboutUs.aboutCompany.image.secure_url} alt="Sobre nós" />
                    <p>{aboutUs.aboutCompany.description}</p>
                </div>
                <div className="aboutUsPost">
                    <h3>{aboutUs.aboutCourse.label}</h3>
                    <img src={aboutUs.aboutCourse.image.secure_url} alt="Sobre nós" />
                    <p>{aboutUs.aboutCourse.description}</p>
                </div>
                <div className="modal-vision-mission">

                    <div className="modal-button">
                        <button>Missão</button>
                        <button>Visão</button>
                    </div>
                    <div className="text">
                        
                        <div className="citation-end">
                            <img src={aspas} alt="aspas" />
                        </div>

                        <div className="p">
                            <p>{aboutUs.mission.description}</p>
                        </div>
                        
                        <div className="citation-start">
                            <img src={aspas} alt="aspas" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;