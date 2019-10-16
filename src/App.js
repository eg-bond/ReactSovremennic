import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./Content/About/About";
import TopSwiper from "./Template/TopSwiper";
import {BrowserRouter, Route} from "react-router-dom";
import Cinema from "./Content/Cinema/Cinema";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navigation from "./Template/Navigation/Navigation";
import Rules from "./Content/Rules/Rules";
import BottomSwiper from "./Template/BottomSwiper";
import Footer from "./Template/Footer";
import Seans from "./Content/Seans/Seans";
import ReactBT from "./Content/Seans/ReactBT";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />

                <div id="menu_anchor" className="container line_container">
                    <div className="row">
                        <hr className="line_5px"></hr>
                    </div>
                </div>
                <div className="separator"></div>

                <div className="container wrapper">
                    <div className="row padding_15xs">
                        <TopSwiper />
                        <hr className="line_5px hidden-xs"></hr>

                        <Route path='/about' component={About}/>
                        <Route path='/rules' component={Rules}/>
                        <Route path='/seans' component={Seans}/>

                        {/*swiper-xs*/}
                        {/*adv-xs*/}
                        <Cinema />

                        <BottomSwiper />
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
