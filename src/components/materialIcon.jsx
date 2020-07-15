import React from 'react'

const MaterialIcon = ({nameIcon, classAdd=''}) => {
    const classPersonalized = `material-icons ${classAdd}`
    return (
    <span className={classPersonalized}>{nameIcon}</span>
    )
}

export default MaterialIcon