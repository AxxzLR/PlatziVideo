import React from 'react'
import '../assets/styles/components/Footer.scss'


const Footer = () => {
    return (
        <footer className="footer">
            <a href="/" className="footer__link">Términos de uso</a>
            <a href="/" className="footer__link">Declaración de privacidad</a>
            <a href="/" className="footer__link">Centro de ayuda</a>
        </footer>
    )
}

export default Footer