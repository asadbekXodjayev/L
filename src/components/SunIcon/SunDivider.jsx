import React from 'react';
import './SunDivider.css';

/**
 * A small ornament flanked by thin tapering rules — a section divider.
 * Props:
 *  - label: optional small script label rendered above the divider (e.g. a section name)
 */
const SunDivider = ({ label }) => (
    <div className="sun-divider" role="separator" aria-hidden="true">
        {label ? <span className="sun-divider__label">{label}</span> : null}
        <div className="sun-divider__rule-wrap">
            <span className="sun-divider__rule" />
            <span className="sun-divider__dot" />
            <span className="sun-divider__rule" />
        </div>
    </div>
);

export default SunDivider;
