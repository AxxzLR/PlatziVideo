import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import iconGoogle from '../assets/static/icon-google.png'
import iconTwitter from '../assets/static/icon-twitter.png'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = props => {

    const [form, setValues] = useState({
        email: '',
        name: '',
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
        props.registerRequest(form)
        props.history.push('/')
    }

    return (
        <React.Fragment>
            <section className="login">
                <div className="login__container">
                    <p className="login__title">Regístrate</p>
                    <form onSubmit={hadleSubmit}>
                        <input
                            type="text"
                            className="inputText_2"
                            placeholder="Nombre"
                            name="name"
                            id="txtNombre"
                            onChange={handleInput}
                        />
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
                        <input type="submit" className="inputButton_1" value="Regístrate" />
                    </form>
                    <div className="login__tools">
                        <Link to="/Login" className="login__tools--iniciar">Inicia Sesión</Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

// export default Register
const mapDispatchToProps = {
    registerRequest,
}
export default connect(null, mapDispatchToProps)(Register)