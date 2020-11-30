import { useState, useEffect } from 'react';
import axios from 'axios';

function AboutUs() {
    const [AboutUs, setAboutUs] = useState([]);

    const loadAboutUs = async () => {
        const res = await axios.get('http://localhost:3001/api/about-us');
        setAboutUs(res.data);
    };

    useEffect(() => {
        loadAboutUs();
    }, []);

    console.log(AboutUs[0]?.vision?.description);

    return (
        <div className="aboutUs">
            <h2>Foi!, rota about-us funcionando</h2>
            {AboutUs?.map(({_id, vision, mission}) => (
                <div key={_id} className="aboutus">
                    <p>{vision?.description}</p>
                    <p>"{mission[0]?.description}"</p>
                </div>
            ))}
        </div>
    );
}

export default AboutUs;