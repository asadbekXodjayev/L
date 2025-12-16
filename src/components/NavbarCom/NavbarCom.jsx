import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {faAlignJustify, faAlignRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './NavbarCom.css';
import Logo from '/public/LL.png';

const NavbarCom = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };


    return (
        <header
            className="header-nav"
        >
            <div className="dark-cyan-background"/>
            <div className="container">
                <nav className="nav">
                    <Link className="Logo" to="/">
                        <img src={Logo} alt="Logo" className="logo-image"/>
                    </Link>
                    <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/works" onClick={closeMobileMenu}>Works</Link>
                        </li>
 



                    </ul>
                    <div className="nav-actions">
                        <button
                            className="toggle-mobile-button"
                            onClick={handleToggleMobileMenu}
                            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                        >
                            {mobileMenuOpen ? (
                                <FontAwesomeIcon className="burger" icon={faAlignRight}/>
                            ) : (
                                <FontAwesomeIcon className="burger" icon={faAlignJustify}/>
                            )}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavbarCom;
