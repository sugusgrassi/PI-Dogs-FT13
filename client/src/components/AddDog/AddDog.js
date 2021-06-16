import React, { useState } from 'react'
import { POST_DOG_URL } from '../../constants';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddDog = () => {
    const [newDog, setNewDog] = useState({
        name: "",
        weight: "",
        height: "",
        life_span: "",
        temperament: "",
        image: ""
    })
    const [error, setError] = useState("");
    let history = useHistory();

    function validateImageDog(value) {
        if(!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(value)) {
          setError('It must be an URL');
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
       history.push('/dogs');
    }

    // console.log(newDog.name)
    return (
        <div>
            <h1>Add dog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="dogname" value={newDog.name} placeholder="Dog name" onChange={(e)=> setNewDog(prevState =>
                    ({...prevState, name: e.target.value}))}/>
                <input name="weight" value={newDog.weight} placeholder="Dog weight" onChange={(e)=> setNewDog(prevState =>
                    ({...prevState, weight: e.target.value}))}/>
                <input name="height" value={newDog.height} placeholder="Dog height" onChange={(e)=> setNewDog(prevState =>
                    ({...prevState, height: e.target.value}))}/>
                <input name="life_span" value={newDog.life_span} placeholder="Dog life_span" onChange={(e)=> setNewDog(prevState =>
                    ({...prevState, life_span: e.target.value}))}/>
                <input name="temperament" value={newDog.temperament} placeholder="Dog temperament" onChange={(e)=> setNewDog(prevState =>
                    ({...prevState, temperament: e.target.value}))}/>
                <input name="image" value={newDog.image} placeholder="Dog image URL" onChange={(e)=> validateImageDog(e.target.value)}/>
                {!error ? null : <span>{error}</span>}
                <input type="submit" />
            </form>
            <></>
        </div>
    )
}

export default AddDog;
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