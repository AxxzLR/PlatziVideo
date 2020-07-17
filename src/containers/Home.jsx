import React, { useState, useEffect } from 'react'
import { connectct, connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/Carousel-item'
import useInitialState from '../Hooks/useInitialState'
import '../assets/styles/App.scss' //Requirio la extensión

// Se remueve el llamado a la api ya que lo realizara Redux
// const API = 'http://localhost:3000/initalState'

const Home = ({ user, myList, trends, originals }) => {
    // const initialState = useInitialState(API)
    console.log(user)
    return (
        <>
            <Search />
            {
                myList?.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {
                            myList?.map(item =>
                                <CarouselItem key={item.id} {...item} isFavorite={true} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {
                trends?.length > 0 &&
                <Categories title="Tendencias">
                    <Carousel>
                        {
                            trends?.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
            {
                originals?.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                        {
                            originals?.map(item =>
                                <CarouselItem key={item.id} {...item} />
                            )
                        }
                    </Carousel>
                </Categories>
            }
        </>
    )
}

// export default Home
/*
Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:
mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store (solo se deben solicitar los que se utilizaran).
mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.
*/

//Agrega la data a los props
const mapStateToProps = state => {
    return {
        user: state.user,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}
export default connect(mapStateToProps, null)(Home)