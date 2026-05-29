import React from 'react';
import './FooterCom.css';
import { Link } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterCom = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand / Personal Info */}
                <div className="footer-brand">
                    <h2 className="footer-logo">Lobar Jabborova</h2>
                    <p className="footer-description">
                        Media Student · Photographer &amp; Illustrator · Creative Professional
                    </p>
                    <div className="footer-contact">
                        <p>Email: lobarzabbarova@gmail.com</p>
                        <p>Location: Tashkent, Shaykhontoxur</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-socials">
                        <a href="https://t.me/medelame" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                        <a href="mailto:lobarzabbarova@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                        <a href="https://instagram.com/lobarsdiary" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Lobar Jabborova · All rights reserved.</p>
                <Link to="/terms" className="footer-terms-link">Terms of Use &amp; Privacy</Link>
            </div>
        </footer>
    );
};

export default FooterCom;
