import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import "./AddDog.css";
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const AddDogThanks = ({getDogs}) => {
 
    useEffect(()=>{
        getDogs("");
    }, [])

    return (
        <div >
            <h1>Add dog</h1>
            <div className="dogCardsContainer">
                <h2>Thanks for adding a dog</h2>
                <p>Keep on searching at Escaped Dogs</p>
            </div>
        </div>
    )
}

export default connect(
    null,
    {getDogs }
  )(AddDogThanks);
