import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getDogs, setTempDog, paginate} from '../../actions/index';

const Find = (props) => {

    const [breedName, setBreedName] = useState("");
    
    function handleChange(event) {
        setBreedName(event.target.value);
      }
      
      function handleSubmit(event) {
        event.preventDefault();
        props.paginate(1)
        props.setTempDog("")
        props.getDogs("?name="+breedName)
      }

      useEffect(() => {
        console.log("componentDidUpdate: se modificó el state")
        props.paginate(1)
        props.setTempDog("")
        props.getDogs("?name="+breedName)
      
      },[breedName])

      function handleFormReset(event) {
        event.preventDefault();
        props.setTempDog("")
        setBreedName("")
        props.getDogs("")
        props.paginate(1)

      }

    return (
        <div>
            <h1>Find a breed by name, temperament or word</h1>
            <form className="" onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleFormReset(e)}>
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
        <input
            type="reset"
            value="Reset"
          />
      </form>
        </div>
    )
}


export default connect(
    null,
    {getDogs, setTempDog, paginate}
  )(Find);