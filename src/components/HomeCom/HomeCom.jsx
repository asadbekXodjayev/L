import React from 'react';
import { motion } from 'framer-motion';
import "./HomeCom.css";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HeaderCom = () => {
    return (
        <header className="header-container">
            <div className="header-frame">
                <div className="hero-glow" aria-hidden="true" />

                <motion.div
                    className="masthead-content"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 className="masthead-title" variants={item}>Lobar</motion.h1>
                    <motion.p className="masthead-subtitle" variants={item}>
                        Professional Photographer & Digital Artist
                    </motion.p>
                </motion.div>

                <div className="photo-plinth">
                    <motion.div
                        className="photo-placeholder"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                        role="img"
                        aria-label="Portrait of Lobar Jabborova"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderCom;
