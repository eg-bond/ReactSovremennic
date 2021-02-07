import React from 'react';
import {NavLink} from "react-router-dom";

function Footer({themeCl}) {

    return (
        <div>
            <div className={`footer container ${themeCl.footer}`} id="footer">
                <NavLink className="lucida_font focus" to="/">Кинотеатр «Современник» © 2019</NavLink>
            </div>
        </div>
    );
}

export default Footer;