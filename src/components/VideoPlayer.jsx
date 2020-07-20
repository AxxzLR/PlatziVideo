import React from 'react'

const VideoPlayer = props => {
    return (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.Source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={props.onGoBack}>Regresar</button>
            </div>
        </div>
    )
}

export default VideoPlayer