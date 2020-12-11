
import { useState, useEffect } from 'react';
import api from '../../services/api';
import './AboutUs.css'

import AboutUsPostCompany from './AboutUsPost/AboutUsPostCompany';
import AboutUsPostCourse from './AboutUsPost/AboutUsPostCourse';
import Modal from './Mission-Values/Modal/Modal'

function AboutUs() {
    const [aboutUs, setAboutUs] = useState({
        aboutCompany: { label: '', description: '', image: { secure_url: '' } },
        aboutCourse: { label: '', description: '', image: { secure_url: '' } },
        mission: { description: '' },
        values: [],
        _id: ''
    });

    const loadAboutUs = async () => {
        const res = await api.get('about-us');
        setAboutUs({
            aboutCompany: {
                label: res.data[0].key,
                description: res.data[0].aboutCompany.description,
                image: { secure_url: res.data[0].aboutCompany.image.secure_url },
            },
            aboutCourse: {
                label: res.data[0].aboutCourse.key,
                description: res.data[0].aboutCourse.description,
                image: { secure_url: res.data[0].aboutCourse.image.secure_url },
            },
            mission: { description: res.data[0].mission.description },
            values: res.data[0].values,
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
                <AboutUsPostCompany props={aboutUs} />

                <div className="title" id="Second" >
                    <h1>Museologia</h1>
                </div>
                <AboutUsPostCourse props={aboutUs} />
                <Modal mission={aboutUs.mission} values={aboutUs.values} />
            </div>
        </div>
    );
}

export default AboutUs;