import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import ScrollToTop from "./Pages/Scroll To Top/ScrollToTop.jsx";
import About from "./Pages/about/About.jsx";
import Home from "./Pages/home/Home.jsx";
import NotFound from "./Pages/404/NotFound.jsx";
import FooterCom from "./components/FooterCom/FooterCom.jsx";
import Works from "./Pages/work/work.jsx";
import Terms from "./Pages/terms/Terms.jsx";
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
                    <Route path="/works" element={<Works/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <FooterCom/>
        </div>
    );
}

export default App;
