import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
// import useInitialState from '../Hooks/useInitialState'
import '../assets/styles/App.scss' //Requirio la extensión
import CarouselSection from '../components/CarouselSection'
import { setSearch, cleanVideoSource } from '../actions'
import SearchNoResults from '../components/SearchNoResults'

// Se remueve el llamado a la api ya que lo realizara Redux
// const API = 'http://localhost:3000/initalState'

const Home = props => {
    // const initialState = useInitialState(API)
    const { myList, trends, originals, search } = props
    const [searchValues, setSearching] = useState({
        isSearching: search.searchParam.length > 0,
        searchParam: search.searchParam
    })

    useEffect(()=>{
        props.cleanVideoSource({})
    })

    const handleSearch = event => {
        const searchParam = event.target.value.trim().toLowerCase()
        const isSearching = searchParam.length > 0
        setSearching({ isSearching, searchParam })

        props.setSearch(searchParam)
    }
    return (
        <>
            <Search onSearch={handleSearch} searchParam={searchValues.searchParam} />
            {!searchValues.isSearching
                ? (<>
                    <CarouselSection
                        dataVideos={myList}
                        title="Mi lista"
                        isFavorite={true}
                    />
                    <CarouselSection
                        dataVideos={trends}
                        title="Tendencias"
                        isFavorite={false}
                    />
                    <CarouselSection
                        dataVideos={originals}
                        title="Originales de Platzi Video"
                        isFavorite={false}
                    />
                </>)
                : search.searchResults.length > 0
                    ? <CarouselSection
                        dataVideos={search.searchResults}
                        title="Resultados de la busqueda"
                        isFavorite={false}
                    />
                    : <SearchNoResults />}

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
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search,
    }
}

const mapDispatchToProps = {
    setSearch,
    cleanVideoSource,
}

//connect nos ayuda a integrar sobre las props los valores y acciones de redux
export default connect(mapStateToProps, mapDispatchToProps)(Home)