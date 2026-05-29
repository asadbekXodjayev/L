import React from 'react';
import { motion } from 'framer-motion';

/** Gentle fade + rise applied when a page mounts. */
const PageFade = ({ children, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
    >
        {children}
    </motion.div>
);

export default PageFade;
