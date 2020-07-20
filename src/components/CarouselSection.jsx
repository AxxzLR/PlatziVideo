import React from 'react'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/Carousel-item'

const CarouselSection = props => {
    const { dataVideos, title, isFavorite } = props
    return dataVideos?.length > 0
        ? (<Categories title={title}>
            <Carousel>
                {
                    dataVideos?.map(item =>
                        <CarouselItem key={item.id} {...item} isFavorite={isFavorite} />
                    )
                }
            </Carousel>
        </Categories>)
        : null
}

export default CarouselSection