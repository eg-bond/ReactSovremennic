import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="footer container" id="footer">
                <NavLink className="lucida_font" to="/">Кинотеатр «Современник» © 2019</NavLink> |
                <a className="lucida_font" href="mailto:kapa@sbor.net"> Реклама на сайте</a>
            </div>
        </div>
    );
}

export default Footer;