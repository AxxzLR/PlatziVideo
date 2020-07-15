import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss' //Requirio la extensión
import useInitialState from '../Hooks/useInitialState'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/Carousel-item'
import Footer from '../components/Footer'

const API ='http://localhost:3000/initalState'

const App = () => {
    const initialState = useInitialState(API)
    return (<div className="App">
        <Header />
        <Search />
        {
            initialState.mylist?.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    {
                        initialState.mylist?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
        }
        {
            initialState.trends?.length > 0 &&
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
        }
        {
            initialState.originals?.length > 0 &&
            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {
                        initialState.originals?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
        }
        <Footer />
    </div>)
}

export default App