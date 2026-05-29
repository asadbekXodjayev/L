import React from 'react';
import './Skeleton.css';

/**
 * Shimmer skeleton placeholder.
 * Props:
 *  - className: extra classes
 *  - style: inline style (e.g. width/height/aspect-ratio/border-radius)
 */
const Skeleton = ({ className = '', style }) => (
    <span className={`skeleton ${className}`} style={style} aria-hidden="true" />
);

export default Skeleton;
