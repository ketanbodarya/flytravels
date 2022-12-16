// contributor :- Virendra Devada

import React from 'react';
import hero from '../images/hero.jpg';
import profile from '../images/profile.jpg';
import {
    useNavigate
} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleAbout = (e) => {
        e.preventDefault();
        navigate('/about');
    }
    return (
        <>
            {/* hero image */}
            <section id="hero">
                <div>
                    {/* https://unsplash.com/photos/rf6ywHVkrlY */}
                    <img className="hero-image" src={hero} alt="hero" />
                    <h1 className="hero-text">
                        Budget packages in the town
                        <br />
                        <span className="crimson">- Fly Travels</span>
                    </h1>
                </div>
            </section>

            {/* home section */}
            <section id="home">
                <div className="home-block">

                    <div className="person">
                        <div>
                            {/* https://unsplash.com/photos/K4mSJ7kc0As */}
                            <img className="profile-img" src={profile} alt="profile" />
                        </div>

                        <div>
                            <h2 className="person-name">Mr. John Doe</h2>
                            <h3 className="person-role">Travel Agent</h3>
                        </div>
                    </div>

                    <div className="home-text">
                        <h1>Don’t Wait Until It’s Too Late.</h1>
                    </div>

                    <div className="home-btn" onClick={handleAbout}>
                        <h1>About me</h1>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;