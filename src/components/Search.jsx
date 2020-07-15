import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => {
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input className="inputText_1" type="text" name="inputBuscador" id="txtBuscar" placeholder="Buscar..." />
        </section>
    )
}

export default Search