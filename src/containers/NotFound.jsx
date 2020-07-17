import React from 'react'
import '../assets/styles/components/NotFound.scss'
import rocket from '../assets/static/icons-despegue-del-cohete-.png'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <React.Fragment>
        <section class="notFound">
            <p class="notFound__text--big animated pulse">404</p>
            <p class="notFound__text">NOT FOUND</p>
            <p class="notFound__text--parraf">¡Oops! Lo sentimos, la página que buscas no se encuentra. </p>
            <img src={rocket} alt="not found" />
            <Link to="/" class="notFound__text--link">Regresar al inicio.</Link>
        </section>
    </React.Fragment>
)

export default NotFound
