// contributor :- Harmanjot Kaur

import React from 'react';
import hero2 from '../images/hero2.jpg';

const About = () => {

    return (
        <>
            {/* hero image */}
            <section id="hero">
                <div>
                    {/* https://unsplash.com/photos/MSoR2O91lY0 */}
                    <img className="hero-image" src={hero2} alt="hero" />
                    <h1 className="hero-text">
                        About Us
                    </h1>
                </div>
            </section>

            {/* about me section */}
            <section id="about-me">
                <div className="about-block">

                    <div>
                        <h1 className="head-text">About Fly Travels</h1>
                    </div>

                    <div>
                        <aside className="about-text">
                            Canadians from coast to coast dream about getting away for some well-deserved fun in the sun – especially in the dead of winter. That's where vacation packages come in. All-inclusive vacation packages are the perfect remedy for winter blues, hectic lifestyles and the need to refuel or rekindle a spark. They offer affordable, hassle-free travel options, where everything is organized for you so you can kick back and relax. Our most popular vacation package destinations include Cuba, Dominican Republic, Jamaica, and Mexico - but we have packages all over the Caribbean and even in Europe!
                            <br />
                            <hr />
                            We'll Match Your Needs & Your Price Get Away from Toronto Now. Canadian Prices. 100% Secure Booking. 24 Hour Trip Assist. No Hidden Fees. Rated A+ by BBB.
                            <blockquote className="quote">- Fly Travels</blockquote>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;