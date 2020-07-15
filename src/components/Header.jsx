import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/icon-usuario.png'

//esto es un componente presentacional.

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="LogoPlatziVideo" />
            <div className="header__menu">
                <div className="header__menu--porfile">
                    <img src={userIcon} alt="User" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header