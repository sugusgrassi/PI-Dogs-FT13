import React, { useEffect, useState} from 'react';
import DogCards from '../DogCards/DogCards.js';
import Find from '../Find/Find';
import Switch from '../Switch/Switch';
import Switchazw from '../Switch/Switchazw';
import Temperaments from '../Temperaments/Temperaments';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const DogContainer = () => {
    const [value, setValue] = useState(false);
    const [azWeight, setWeight] = useState(false);
    const [showTemp, setShowTemp] = useState(false);
    

    function handleChangeAZW() {
        // console.log("modificó el value")
        // props.getDogs("")
        setWeight(!azWeight)
        }

    function handleChange() {
        // console.log("modificó el value")
        // props.getDogs("")
        setValue(!value)
      }

    const onClick = () => {
        if (showTemp === false){
        setShowTemp(true)
    }   else {
        setShowTemp(false)
    }
    };


    return (
        <div >
            <h1>Find the dogs!</h1>
            <div className="flexContainer">
                <Find />
                <div className="flexContainer">
                    <span>Data type: Name </span>
                    <Switchazw
                        azWeight={azWeight}
                        handleToggleazw={() => handleChangeAZW()}
                    />
                    <span> Weight</span>
                </div>
                <div className="flexContainer">
                    <span>Order: ↑ </span>
                    <Switch
                        isOn={value}
                        handleToggle={() => handleChange()}
                    />
                    <span> ↓</span>
                </div>
                <div className="flexContainer">
                <button onClick={onClick}>{showTemp ? "Hide temperaments" : "Show temperaments"}</button>
                </div>
            </div>
            { showTemp ? <Temperaments/>  : null }
            <DogCards zA = {value} azWeight = {azWeight} />
        </div>
    )
}

export default connect(
    null,
    {getDogs }
  )(DogContainer);
