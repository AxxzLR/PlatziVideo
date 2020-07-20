import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = props => {
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                className="inputText_1"
                onChange={props.onSearch}
                value={props.searchParam}
                type="text"
                name="Search"
                id="txtBuscar"
                placeholder="Buscar..." />
        </section>
    )
}

export default Search