import React, { useEffect, useState} from 'react';
import DogCards from '../DogCards/DogCards.js';
import Find from '../Find/Find';
import Switch from '../Switch/Switch';
import Temperaments from '../Temperaments/Temperaments';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const DogContainer = (props) => {
    const [value, setValue] = useState(false);
    
    function handleChange() {
        console.log("modificó el value")
        // props.getDogs("")
        setValue(!value)
      }



    return (
        <div>
            <Find />
            <Switch
                isOn={value}
                handleToggle={() => handleChange()}
            />
            <Temperaments />
            <DogCards zA = {value} />
        </div>
    )
}

export default connect(
    null,
    {getDogs }
  )(DogContainer);
