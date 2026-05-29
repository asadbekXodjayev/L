import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import { Link } from "react-router-dom";
import WorkCom, { worksData } from "../../components/WorkCom/WorkCom.jsx";
import SunDivider from "../../components/SunIcon/SunDivider.jsx";
import "../Pages.css";

const Home = () => {
    return (
        <div className="home-page">
            <HomeCom />

            <SunDivider label="about" />

            <AboutCom />

            <SunDivider label="selected work" />

            {/* Featured works preview */}
            <WorkCom works={worksData.slice(13, 15)} />

            <div className="home-cta">
                <Link to="/works">
                    <button className="btn">See All Works</button>
                </Link>
            </div>

            <br />
        </div>
    );
};

export default Home;
