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
             {/*Reflection Section*/}
            <div className="reflection-intro" style={{ textAlign: "center", margin: "2rem 0", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ color: "var(--color-title)", marginBottom: "1rem", fontFamily: "var(--font-main)" }}>
                    Reflection / Professional Statement
                </h2>
                <p style={{ color: "var(--color-2-dark)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    My portfolio represents my growing journey as a photographer and my desire to capture real moments, emotions, and stories...
                </p>
                <Link to="/reflection">
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
                        Read More
                    </button>
                </Link>
            </div>



            <br />

            <AboutCom />
            <br />



            <div className="resume-div" style={{ textAlign: "center", margin: "2rem 0" }}>
                <div style={{ textAlign: "center", margin: "2rem 0" }}>
                    <p className="resume" >
                        Interested in my experience?
                    </p>
                </div>

                <Link to="/resume">
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
                        View Resume
                    </button>
                </Link>
            </div>

            <br />

            {/* Show only the first work */}
            <WorkCom works={worksData.slice(0, 1)} />

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
