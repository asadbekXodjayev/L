import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import {Link} from 'react-router-dom';
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import ScrollToTop from "./Pages/Scroll To Top/ScrollToTop.jsx";
import About from "./Pages/about/About.jsx";
import Home from "./Pages/home/Home.jsx";
import NotFound from "./Pages/404/NotFound.jsx";
import FooterCom from "./components/FooterCom/FooterCom.jsx";
import Resume from "./Pages/resume/resume.jsx";
import Works from "./Pages/work/work.jsx";
import Reflection from "./Pages/reflection/Reflection.jsx";
import BotCom from "./components/BotCom.jsx";


function App() {

    return (
        <div className="app">
            <BotCom/>

            <ScrollToTop/>
            <NavbarCom/>
            <main className="main-app">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/reflection" element={<Reflection/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="*" element={<Link to="/"/>}/> </Routes>

            </main>
        <FooterCom/>
        </div>
    );
}

export default App;
