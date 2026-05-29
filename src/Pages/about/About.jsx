import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import SunDivider from "../../components/SunIcon/SunDivider.jsx";
import PageFade from "../../components/Motion/PageFade.jsx";

const About = () => {
    return (
        <PageFade>
            <SunDivider label="about me" />
            <AboutCom/>
            <br/>
            <br/>
        </PageFade>
    );
};

export default About;
