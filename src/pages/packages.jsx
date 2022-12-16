// contributor :- Ketankumar Bodarya

import React from 'react';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import hero3 from '../images/hero3.jpg';

const Packages = () => {

    return (
        <>
            {/* hero image */}
            <section id="hero">
                <div>
                    {/* https://unsplash.com/photos/AMssSjUaTY4 */}
                    <img className="hero-image" src={hero3} alt="hero" />
                    <h1 className="hero-text-white">
                        Our Packages
                    </h1>
                </div>
            </section>

            {/* packages section */}
            <section id="packages">
                <div className="packages-title">
                    <h1><span className="crimson">M</span>y <span className="crimson">H</span>obbies</h1>
                </div>

                <div className="layout">
                    <div className="item">
                        {/* https://unsplash.com/photos/7F65HDP0-E0 */}
                        <img className="item-image" src={item1} alt="brazil" />
                        <div className="item-details">
                            <h1 className="item-name"><span className="crimson">B</span>razil - $1500/Person</h1>
                            <aside>
                                Two weeks in Brazil affords plenty of time to combine active sightseeing with relaxation. Soak up the culture in cities like Rio or unwind on the idyllic beaches of Ilha Grande and Jericoacoara. Immerse yourself in the natural wonders of the Amazon rainforest, learn how to dance the samba, and discover the history behind Brazil's Indigenous tribes. Seek a culinary-inspired itinerary and revel in the local cuisine in Fortaleza, or embark on a wildlife tour in Morro do Pai Inácio.
                            </aside>
                        </div>
                    </div>
                    <div className="item">
                        {/* https://unsplash.com/photos/FZU-vIW-lk8 */}
                        <img className="item-image" src={item2} alt="mexico" />
                        <div className="item-details">
                            <h1 className="item-name"><span className="crimson">M</span>exico - $2000/Person</h1>
                            <aside>
                                Explore the heart of Mexico's Aztec, Zapotec, Maya and Spanish cultures on this 15-day adventure. Discover ruins, visit pueblos and meet wonderful people on a tour that covers all the basics so you can get to exploring. Enjoy the relaxed shores of the Yucatan Peninsula, unravel the magnificent mystery of the ancient civilisations in Chichen Itza and immerse yourself in pre-Hispanic culture in San Cristobal de las Casas. With plenty of opportunities for swimming, snorkelling and hiking, this is the ideal introduction to one of Central America's most colourful and exciting destinations.
                            </aside>
                        </div>
                    </div>
                    <div className="item">
                        {/* https://unsplash.com/photos/uLh71gTmZ4g */}
                        <img className="item-image" src={item3} alt="cuba" />
                        <div className="item-details">
                            <h1 className="item-name"><span className="crimson">C</span>uba - $2500/Person</h1>
                            <aside>
                                Spanish colonial architecture, vintage automobiles and traditional salsa dancing that's anything but traditional - timeless Cuba is waiting for you. Our selection of Cuba vacation packages bring you closer to picture-perfect beaches, historical cities and the warmth and charm of the Cuban people.

                                Cuba has always been one of our favourite cheap and warm destinations – but starting in October it might not be so cheap after all.
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            {/* motivation section */}
            <section id="motivation">
                <div className="motivation-title">
                    <h1>Take a look at the video that inspires me a lot</h1>
                </div>

                {/* https://www.youtube.com/embed/nWUOBP_Z0qo?controls=1
                Author :- Jonna Jinton */}
                <div className="motivation-video">
                    <iframe title='motivation' width="700" height="500" src="https://www.youtube.com/embed/nWUOBP_Z0qo?controls=1" frameborder="0">
                    </iframe>
                    <p><i>*Credit :- Jonna Jinton</i></p>
                </div>
            </section>

        </>
    )
}

export default Packages;