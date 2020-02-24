import Adv from "../../Template/Adv";
import SwiperXs from "../../Template/SwiperXs";
import React from "react";

function CinemaXsBottom() {
    return (
        <>
            <Adv/>

            <div className='row'>
                <div className="separator"></div>
                <SwiperXs/>
            </div>

            <div className="separator-xs"></div>

            <div className=" visible-xs info_wide">
                <a href="http://www.region47.sbor.net/"><img src="images/region47_wide.gif"></img></a>
            </div>
        </>
    );
}

export default CinemaXsBottom;


