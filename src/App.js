import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./Content/About";
import SwiperDefault from "./Template/SwiperDefault";
import {BrowserRouter, Route} from "react-router-dom";
import Cinema from "./Content/Cinema/Cinema";

function App() {
    return (
        <BrowserRouter>
            <div>
                <About/>
                <Route path='/cinema' component={Cinema} />
            </div>
        </BrowserRouter>
    );
}

export default App;
