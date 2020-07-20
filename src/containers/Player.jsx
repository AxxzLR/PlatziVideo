import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Player.scss'
import { getVideoSource } from '../actions'
import { Redirect } from 'react-router-dom'
import VideoPlayer from '../components/VideoPlayer'
const Player = props => {
    const { id } = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0
    const [isMounted, setMounted] = useState(false)
    const handleGoBack = () => {
        props.history.goBack()
    }

    useEffect(() => {
        props.getVideoSource(id)
        setMounted(true)
    }, [])

    return isMounted ?
        hasPlaying
            ? (<VideoPlayer Source={props.playing.source} onGoBack={handleGoBack} />)
            : (<Redirect to="/404/" />)
            :(<div className="Player"></div>)
        // : (<VideoPlayer Source="" onGoBack={handleGoBack} />)
}

// export default Player

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)