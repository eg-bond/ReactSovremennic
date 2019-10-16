import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="footer container" id="footer">
                <a className="lucida_font" href="index.html">Кинотеатр «Современник» © 2006</a> |
                <a className="lucida_font" href="mailto:kapa@sbor.net"> Реклама на сайте</a>
            </div>
        </div>
    );
}

export default Footer;