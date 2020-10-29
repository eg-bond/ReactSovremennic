import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="footer container" id="footer">
                <NavLink className="lucida_font" to="/">Кинотеатр «Современник» © 2019</NavLink>
                {/*<NavLink className="lucida_font" to="/">Кинотеатр «Современник» © 2019</NavLink> |*/}
                {/*<NavLink className="lucida_font" to="/advertising"> Реклама на сайте</NavLink>*/}
            </div>
        </div>
    );
}

export default Footer;