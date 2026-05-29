import React from 'react';
import WorkCom from "../../components/WorkCom/WorkCom.jsx";
import SunDivider from "../../components/SunIcon/SunDivider.jsx";
import PageFade from "../../components/Motion/PageFade.jsx";

const Works = () => {
    return (
        <PageFade>
            <SunDivider label="works" />
            <WorkCom/>
        </PageFade>
    );
};

export default Works;
