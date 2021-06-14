import React from 'react';
import DogCards from '../DogCards/DogCards.js';
import Find from '../Find/Find';
import Temperaments from '../Temperaments/Temperaments';

const DogContainer = () => {
    return (
        <div>
            <Find />
            <Temperaments />
            <DogCards />
        </div>
    )
}

export default DogContainer;