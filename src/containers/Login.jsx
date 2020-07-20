import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'
import PropTypes from 'prop-types'
import iconGoogle from '../assets/static/icon-google.png'
import iconTwitter from '../assets/static/icon-twitter.png'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Login = props => {
    const [form, setValues] = useState({
        email: '',
        password: '',
    })

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const hadleSubmit = event => {
        event.preventDefault()
        props.loginRequest(form)
        props.history.push('/')
    }

    return (
        <React.Fragment>
            {/* <div className="preContainer"> */}
            <section className="login">
                <div className="login__container">
                    <p className="login__title">Inicia Sesión</p>
                    <form onSubmit={hadleSubmit}>
                        <input
                            type="text"
                            className="inputText_2"
                            placeholder="Correo"
                            name="email"
                            id="txtCorreo"
                            onChange={handleInput}
                        />
                        <input
                            type="password"
                            className="inputText_2"
                            placeholder="Contraseña"
                            name="password"
                            id="txtContraseña"
                            onChange={handleInput}
                        />
                        <input
                            type="submit"
                            className="inputButton_1"
                            value="Iniciar sesión"
                        />
                        <div className="login__tools">
                            <label className="login__tools--element">
                                <input type="checkbox" name="Recuerdame"
                                    id="cbRecuerdame" />Recuerdame
                            </label>
                            <Link className="login__tools--element" to="/">Olvide mi contraseña</Link>
                        </div>
                    </form>
                    <div className="login__tools">
                        <div className="login__tools--RS">
                            <img src={iconGoogle} alt="Google" />
                            <Link to="/">Inicia sesión con Google</Link>
                        </div>
                        <div className="login__tools--RS">
                            <img src={iconTwitter} alt="Twitter" />
                            <Link to="/">Inicia sesión con Twitter</Link></div>
                    </div>
                    <div className="login__tools">
                        <Link to="/Register" className="login__tools--register">¿No tienes una cuenta?
                    <span>Regístrate.</span></Link>
                    </div>
                </div>
            </section >
            {/* </div> */}
        </React.Fragment>
    )
}

Login.propTypes = {
    props: PropTypes.object
}


const mapDispatchToProps = {
    loginRequest,
}

// export default Login
export default connect(null, mapDispatchToProps)(Login)