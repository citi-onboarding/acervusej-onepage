import { useState, useEffect } from 'react';
import axios from 'axios';
//import AboutUsPost from './AboutUsPost/AboutUsPost';

function AboutUs() {
    const [aboutUs, setAboutUs] = useState({
        aboutCompany: {
          description: '',
          image: {
            secure_url: '',
          },
        },

        key: '',
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
              description: res.data[0].aboutCompany.description,
              image: {
                secure_url: res.data[0].aboutCompany.image.secure_url,
                },
            },

           key: res.data[0].key,
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
                    <div className="post">
                        <h3>{aboutUs.key}</h3>
                        <img src={aboutUs.aboutCompany.image.secure_url} alt="Sobre nós"/>
                        <p>{aboutUs.aboutCompany.description}</p>
                    </div>
                </div>
             </div>
        );
}

export default AboutUs;