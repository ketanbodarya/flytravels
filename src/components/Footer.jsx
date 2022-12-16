// contributor :- 
// - Ketankumar Bodarya
// - Harmanjot Kaur
// - Virendra Devada 
import React from 'react';
import {
    useNavigate
} from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();
    const handleIndex = (e) => {
        e.preventDefault();
        navigate("/home");
    }
    return (

        // footer section
        <section id="contact-us">
            <footer className="footer">
                <div className="footer-container">
                    <h2 onClick={handleIndex} className="footer-logo">
                        <span className="crimson">F</span>ly <span className="crimson">T</span>ravels
                    </h2>

                    <h3>
                        108 University Ave, Waterloo, ON N2J 2W2
                    </h3>

                    <h3>
                        Mobile :- +1 (999) 999 9999
                    </h3>

                    <h3>
                        Email :- info@flytravels.com
                    </h3>
                </div>

                <div className="copyright">
                    <p className="copy-text">&copy;2022 | Fly Travels | All rights reserved | Follow me : Instagram,
                        Facebook</p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;