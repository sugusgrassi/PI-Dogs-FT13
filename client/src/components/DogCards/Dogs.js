import React from 'react'

const Dogs = ({ currentDogs, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            {currentDogs.map(currentDogs => (
            <li key={currentDogs.id}>{currentDogs.name}</li>
            ))}
        </ul>
    )
}

export default Dogs;