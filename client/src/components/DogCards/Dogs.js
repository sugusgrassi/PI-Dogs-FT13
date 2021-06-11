import React from 'react'

const Dogs = ({ dogs, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            {dogs.map(dog => (
            <li key={dog.id}>{dog.name}</li>
            ))}
        </ul>
    )
}

export default Dogs;