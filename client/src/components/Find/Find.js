import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getDogs} from '../../actions/index';

const Find = (props) => {

    const [breedName, setBreedName] = useState("");
    
    function handleChange(event) {
        setBreedName(event.target.value);
      }
      
      function handleSubmit(event) {
        event.preventDefault();
        props.getDogs("?name="+breedName)
      }

    // Algunos no los encuentra:
    //   useEffect(() => {
    //     console.log("componentDidUpdate: se modificó el state")
    //     props.getDogs("?name="+breedName)
    //   },[breedName])


    return (
        <div>
            <h1>Find a breed by name, temperament or word</h1>
            <form className="" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className="" htmlFor="breedName">Breed? </label>
          <input
            type="text"
            id="breedName"
            autoComplete="off"
            value={breedName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">Find</button>
      </form>
        </div>
    )
}

export default connect(
    null,
    {getDogs}
  )(Find);