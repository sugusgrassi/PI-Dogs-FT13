import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./AddDog.css";
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

const AddDogThanks = ({getDogs}) => {
 
    useEffect(()=>{
        getDogs("");
    }, [getDogs])

    return (
        <div >
            <h1>Add dog</h1>
            <div className="dogCardsContainer">
                <h2>Thanks for adding a dog</h2>
                <Link to='/'><p>Keep on searching HERE!</p></Link>
            </div>
        </div>
    )
}

export default connect(
    null,
    {getDogs }
  )(AddDogThanks);
