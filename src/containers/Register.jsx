import React from 'react'
import iconGoogle from '../assets/static/icon-google.png'
import iconTwitter from '../assets/static/icon-twitter.png'
import '../assets/styles/components/Login.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Register = () => (
    <React.Fragment>
        <section className="login">
            <div className="login__container">
                <p className="login__title">Regístrate</p>
                <div>
                    <input type="text" className="inputText_2" placeholder="Nombre" name="Nombre" id="txtNombre" />
                    <input type="text" className="inputText_2" placeholder="Correo" name="Correo" id="txtCorreo" />
                    <input type="password" className="inputText_2" placeholder="Contraseña" name="Contraseña"
                        id="txtContraseña" />
                    <input type="button" className="inputButton_1" value="Regístrate" />
                </div>
                <div className="login__tools">
                    <Link to="/Login" className="login__tools--iniciar">Inicia Sesión</Link>
                </div>
            </div>
        </section>
    </React.Fragment>
)

export default Register