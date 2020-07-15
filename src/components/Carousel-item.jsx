import React from 'react'
import '../assets/styles/components/CarouselItem.scss'
import MaterialIcon from './materialIcon'
import PropTypes from 'prop-types'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
    return (
        <div className="carrusel-item">
            <img className="carrusel-item__img"
                src={cover}
                alt={title} />
            <div className="carrusel-item__details">
                <div>
                    <MaterialIcon classAdd="carrusel-item__details--icon" nameIcon="play_circle_filled" />
                    <MaterialIcon classAdd="carrusel-item__details--icon" nameIcon="add_circle" />
                </div>
                <p className="carrusel-item__details--title">{title}</p>
                <p className="carrusel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem