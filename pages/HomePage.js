import React from "react";
import {Link} from "react-router-dom";
import "../../../frontend/src/pages/Home/HomePage.css";

const HomePage = () => {
    return (
        <div>
            <header id="header">
                <div className="logo">
                    <img src="assets/shield.png" alt="Aid Guardian Logo" />
                </div>
                <div className="auth-buttons">
                    <Link to="/login" className="button">Login</Link>
                    <Link to="/signup" className="button">Register</Link>
                </div>
            </header>
            <section className="intro">
                <h1>Welcome to Aid Guardian!</h1>
                <p>Aid Guardian is your online first aid application, dedicated to providing quick and efficient help in critical moments.</p>
            </section>
            <footer>
                <p>Contact | Support</p>
            </footer>
        </div>
    );
};

export default HomePage;