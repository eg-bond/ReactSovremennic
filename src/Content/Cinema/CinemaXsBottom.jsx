import Adv from "../../Template/Adv";
import SwiperXs from "../../Template/SwiperXs";
import React from "react";

function CinemaXsBottom() {
    return (
        <div>
            <Adv/>

            <div className='row'>
                <div className="separator-xs margin-top-1"></div>
                <SwiperXs/>
            </div>

            <div className="separator-special margin-top-1"></div>

            <div className=" visible-xs info_wide ">
                <a href="http://www.region47.sbor.net/"><img src="images/region47_wide.gif"></img></a>
            </div>
        </div>
    );
}

export default CinemaXsBottom;


