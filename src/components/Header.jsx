import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/icon-usuario.png'
import { Link } from 'react-router-dom'

//esto es un componente presentacional.

const Header = () => {
    return (
        <header className="header">
            <Link to="/" >
                <img className="header__img" src={logo} alt="LogoPlatziVideo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--porfile">
                    <img src={userIcon} alt="User" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><Link to="/">Cuenta</Link></li>
                    <li><Link to="/Login">Cerrar Sesión</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header