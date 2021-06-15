import React, { useState} from 'react';
import DogCards from '../DogCards/DogCards.js';
import Find from '../Find/Find';
import Switch from '../Switch/Switch';
import Temperaments from '../Temperaments/Temperaments';

const DogContainer = () => {
    const [value, setValue] = useState(false);
    return (
        <div>
            <Find />
            <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
            <Temperaments />
            <DogCards zA = {value} />
        </div>
    )
}

export default DogContainer;