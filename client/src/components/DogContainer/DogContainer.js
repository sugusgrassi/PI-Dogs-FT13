import React, { useEffect, useState} from 'react';
import DogCards from '../DogCards/DogCards.js';
import Find from '../Find/Find';
import Switch from '../Switch/Switch';
import Switchazw from '../Switch/Switchazw';
import Temperaments from '../Temperaments/Temperaments';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const DogContainer = (props) => {
    const [value, setValue] = useState(false);
    const [azWeight, setWeight] = useState(false);
    

    function handleChangeAZW() {
        console.log("modificó el value")
        // props.getDogs("")
        setWeight(!azWeight)
        }

    function handleChange() {
        console.log("modificó el value")
        // props.getDogs("")
        setValue(!value)
      }





    return (
        <div>
            <Find />
            <Switchazw
                azWeight={azWeight}
                handleToggleazw={() => handleChangeAZW()}
            /><span>A-Z or Weight</span>
            <Switch
                isOn={value}
                handleToggle={() => handleChange()}
            />
            <Temperaments />
            <DogCards zA = {value} azWeight = {azWeight} />
        </div>
    )
}

export default connect(
    null,
    {getDogs }
  )(DogContainer);
