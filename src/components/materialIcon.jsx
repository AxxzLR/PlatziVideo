import React from 'react'

const MaterialIcon = ({nameIcon, classAdd='', handleClick}) => {
    const classPersonalized = `material-icons ${classAdd}`
    return (
    <span onClick={handleClick} className={classPersonalized}>{nameIcon}</span>
    )
}

export default MaterialIcon