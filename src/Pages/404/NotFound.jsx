import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-subheading">Oops! Page not found.</p>
            <p className="not-found-description">
                Let’s get you back to where you need to be.
            </p>
            <button className="btn go-home-button" onClick={handleGoHome}>
                Back to home
            </button>
        </div>
    );
};

export default NotFound;
