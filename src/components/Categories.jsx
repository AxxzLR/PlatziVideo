import React from 'react'
import '../assets/styles/components/Categories.scss'


const Categories = ({ children, title }) => {
    return (
        <div className='component-Categories'>
            <div className="carrusel__categories">
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default Categories