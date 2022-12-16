// contributor :- 
// - Ketankumar Bodarya
// - Harmanjot Kaur
// - Virendra Devada 
import React from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();
    const handleIndex = (e) => {
        e.preventDefault();
        navigate("/home");
    }
    return (

        // header section
        <section id="header">
            <header>
                <div className="container">
                    <div className="logo" onClick={handleIndex}>
                        <h1 className="logo-text">Fly</h1> &nbsp; <h1 className="logo-text">Travels</h1>
                    </div>

                    <div className="menu">
                        <nav>
                            <ul>
                                <li className="menu-item">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/packages">Packages</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about">About Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Navbar;