import React, { Fragment } from 'react';
import Media from 'react-media';

class MediaFragment extends React.Component {
    render() {
        return (
            <div>
                <Media query="(max-width: 768px)" render={() =>
                    (
                        <p>I am small!</p>
                    )}
                />
            </div>
        );
    }
}

export default MediaFragment;