import React from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'
import gravatar from '../utils/gravatat'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/icon-usuario.png'
import { Link } from 'react-router-dom'

//esto es un componente presentacional.

const Header = props => {
    const { user } = props
    const hasUser = Object.keys(user).length > 0
    const handleLogOut = () => {
        props.logoutRequest({})
    }

    return (
        <header className="header">
            <Link to="/" >
                <img className="header__img" src={logo} alt="LogoPlatziVideo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--porfile">
                    {!hasUser ?
                        <img src={userIcon} alt="User" /> :
                        <img src={gravatar(user.email)} alt={user.email} />}
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser &&
                        <li><Link to="/">{user.name}</Link></li>}
                    {hasUser ?
                        <li><a onClick={handleLogOut}>Cerrar Sesión</a></li> :
                        <li><Link to="/Login">Iniciar Sesión</Link></li>}
                </ul>
            </div>
        </header>
    )
}

// export default Header

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)