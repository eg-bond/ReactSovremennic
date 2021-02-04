import React from 'react';
import {NavLink} from "react-router-dom";

function Footer({themeCl}) {
    // let footerBackground = theme === 'blackWhite' ? 'bc__white' : 'bc__black'

    return (
        <div>
            <div className={`footer container ${themeCl.footer}`} id="footer">
                <NavLink className="lucida_font" to="/">Кинотеатр «Современник» © 2019</NavLink>
            </div>
        </div>
    );
}

export default Footer;