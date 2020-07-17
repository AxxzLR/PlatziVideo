import React from 'react'
import '../assets/styles/components/Footer.scss'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/" className="footer__link">Términos de uso</Link>
            <Link to="/" className="footer__link">Declaración de privacidad</Link>
            <Link to="/" className="footer__link">Centro de ayuda</Link>
        </footer>
    )
}

export default Footer