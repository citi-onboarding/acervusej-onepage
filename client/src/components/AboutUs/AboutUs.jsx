import { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css'

import AboutUsPost from './AboutUsPost/AboutUsPost';
import Modal from './Mission-Vision/Modal/Modal'

function AboutUs() {
    const [aboutUs, setAboutUs] = useState({

        aboutCompany: {
            label: '',
            description: '',
            image: {
                secure_url: '',
            },
        },
        aboutCourse: {
            label: '',
            description: '',
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
            aboutCompany: {
                label: res.data[0].aboutCompany.key,
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
            <div className="container" id="contentAboutUs">
                <div className="title" id="First">
                    <h1>A Acervus</h1>
                </div>
                <AboutUsPost props={aboutUs.aboutCompany} />
                <div className="title">
                    <h1>Museologia</h1>
                </div>
                <AboutUsPost props={aboutUs.aboutCourse} />
                <Modal props={aboutUs} />      
            </div>
        </div>
    );
}

export default AboutUs;