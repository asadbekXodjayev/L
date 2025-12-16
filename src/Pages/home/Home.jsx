import React from 'react';
import AboutCom from "../../components/AboutCom/AbourtCom.jsx";
import HomeCom from "../../components/HomeCom/HomeCom.jsx";
import { Link } from "react-router-dom";
import ResumeCom from "../../components/ResumeCom/ResumeCom.jsx";
import WorkCom, { worksData } from "../../components/WorkCom/WorkCom.jsx";
import "../Pages.css"

const Home = () => {
    return (
        <div>

            <HomeCom />
            <br />

            <AboutCom />
            <br />

            {/* Show only the first work */}
            <WorkCom works={worksData.slice(13, 15)} />

            <div style={{ textAlign: "center" }}>
                <Link to="/works">
                    <button
                        style={{
                            width: "30vh",

                            display: "inline-block",
                            textDecoration: "none",
                            backgroundColor: "var(--color-2)",
                            color: "var(--backround-color)",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "5px",
                            fontWeight: 500,
                            transition: "background 0.3s ease, color 0.3s ease",
                            fontFamily: "var(--font-main)",
                            cursor: "pointer",
                            border: "none",
                            fontSize: "1rem"
                        }}
                    >
                        See All Works
                    </button>
                </Link>
            </div>

            <br />
        </div>
    );
};

export default Home;
