import React from 'react';

export const DescriptionTrailer = (props) => {

    return (
        <div>
            <p className="lucida_font description">
                {props.description}
            </p>

            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={"https://www.youtube.com/embed/" + props.trailer_src}
                        allowFullScreen title="film_trailer_desktop"/>
            </div>
        </div>
    );
};
