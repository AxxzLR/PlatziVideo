import React from 'react'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import MaterialIcon from './materialIcon'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isFavorite } = props
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = itemID => {
        props.deleteFavorite(itemID)
    }
    return (
        <div className="carrusel-item">
            <img className="carrusel-item__img"
                src={cover}
                alt={title} />
            <div className="carrusel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <MaterialIcon
                            classAdd="carrusel-item__details--icon"
                            nameIcon="play_circle_filled"
                        />
                    </Link>
                    {!isFavorite ?
                        <MaterialIcon
                            classAdd="carrusel-item__details--icon"
                            nameIcon="add_circle"
                            handleClick={handleSetFavorite}
                        /> :
                        <MaterialIcon
                            classAdd="carrusel-item__details--icon"
                            nameIcon="highlight_off"
                            handleClick={() => handleDeleteFavorite(id)}
                        />
                    }
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

//Agrega setFavorite a props
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

// export default CarouselItem
export default connect(null, mapDispatchToProps)(CarouselItem)