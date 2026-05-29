import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavbarCom.css';

// public/ assets are served from the site root
const SunImg = '/sun.png';
const MoonImg = '/moon.png';

const NAV_LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/works', label: 'Works' },
];

const getInitialTheme = () =>
    typeof document !== 'undefined' &&
    document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light';

const NavbarCom = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    const closeMobileMenu = () => setMobileMenuOpen(false);
    const handleToggleMobileMenu = () => setMobileMenuOpen((open) => !open);

    const isDark = theme === 'dark';
    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    // Apply + persist the color theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            /* ignore storage errors */
        }
    }, [theme]);

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="header-nav">
            <div className="container">
                <nav className="nav">
                    <Link className="Logo" to="/" onClick={closeMobileMenu} aria-label="Lobar's Diary — home">
                        <span className="logo-image" role="img" aria-label="Lobar Jabborova logo" />
                    </Link>

                    <ul className={`nav-list ${mobileMenuOpen ? 'open' : ''}`}>
                        {NAV_LINKS.map(({ to, label, end }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    to={to}
                                    end={end}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-right">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
                            title={isDark ? 'Day mode' : 'Night mode'}
                        >
                            <img src={isDark ? SunImg : MoonImg} alt="" className="theme-toggle-icon" />
                        </button>

                        <div className="nav-actions">
                            <button
                                className="toggle-mobile-button"
                                onClick={handleToggleMobileMenu}
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={mobileMenuOpen}
                            >
                                <FontAwesomeIcon className="burger" icon={mobileMenuOpen ? faXmark : faBars} />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Dimmed backdrop behind the mobile drawer */}
            <div
                className={`nav-backdrop ${mobileMenuOpen ? 'show' : ''}`}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />
        </header>
    );
};

export default NavbarCom;
