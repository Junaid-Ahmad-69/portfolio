import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="wrapper">
            <div className="navbar-left">
                <a href="/">Junaid</a>
                <span>toggle</span>
            </div>
            <div className="navbar-right">
                <nav className="navbar-list">
                    <ul>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </nav>
                <button className="primary-button nav-button">Contact us</button>
            </div>
        </div>
    )
}
export default Navbar
