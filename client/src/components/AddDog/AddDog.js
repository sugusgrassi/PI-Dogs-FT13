import React, { useState, useEffect } from 'react'
import { POST_DOG_URL } from '../../constants';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./AddDog.css";
import { connect } from 'react-redux';
import { getDogs, getTemperaments } from '../../actions/index';

const AddDog = ({getDogs, getTemperaments}) => {
    const [newDog, setNewDog] = useState({
        name: "",
        weight: "",
        height: "",
        life_span: "",
        temperament: [],
        image: ""
    })
    const [error, setError] = useState("");
    let history = useHistory();


    useEffect(() => {
        getTemperaments()
        // getDogs("")
        // setdogApiDB()
      },[getTemperaments])


    function validateImageDog(value) {
        if(!/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi.test(value)) {
          setError('↑ It must be an URL');
        } else {
          setError('');
        }
        setNewDog(prevState =>
            ({...prevState, image: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // postdog(newDog) // Lo llevo a Redux?
        axios.post( POST_DOG_URL, newDog)
          .then(function (response) {
            console.log(response);
          })
        //   getDogs("")
       history.push('/thanks');
    }

    const isEnabled = newDog.name.length > 0 && newDog.weight.length > 0 && newDog.life_span.length > 0 && newDog.temperament.length > 0 && newDog.image.length > 0;

    // console.log(newDog.name)
    return (
        <div >
            <h1>Add dog</h1>
            <div className="dogCardsContainer">
                <form className="addDogForm" onSubmit={(e) => handleSubmit(e)}>
                    <input name="dogname" value={newDog.name} placeholder="Dog name" onChange={(e)=> setNewDog(prevState =>
                        ({...prevState, name: e.target.value}))}/>
                    <input name="weight" value={newDog.weight} placeholder="Dog weight" onChange={(e)=> setNewDog(prevState =>
                        ({...prevState, weight: e.target.value}))}/>
                    <input name="height" value={newDog.height} placeholder="Dog height" onChange={(e)=> setNewDog(prevState =>
                        ({...prevState, height: e.target.value}))}/>
                    <input name="life_span" value={newDog.life_span} placeholder="Dog life_span" onChange={(e)=> setNewDog(prevState =>
                        ({...prevState, life_span: e.target.value}))}/>
                    <input name="temperament" value={newDog.temperament} placeholder="Dog temperament" onChange={(e)=> setNewDog(prevState =>
                        ({...prevState, temperament: [e.target.value]}))}/>
                    <input name="image" value={newDog.image} placeholder="Dog image URL" onChange={(e)=> validateImageDog(e.target.value)}/>
                    {!error ? null : <span className="formError">{error}</span>}
                    <div className="divSubmit"><input className="inputbutton" type="submit" disabled={!isEnabled || error}/></div>
                </form>
            </div>
        </div>
    )
}

export default connect(
    null,
    {getDogs, getTemperaments }
  )(AddDog);

// export default AddDog;
// export default withRouter(AddDog);


/*
{
    "name": "Siamese",
    "weight": "12 - 16",
    "height": "30 - 60",
    "life_span": "infinite",
    "temperament": "temperament",
    "image": url"
}
*/