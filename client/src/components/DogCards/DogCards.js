
import React, {useEffect} from 'react';
// import axios from 'axios';
// import {BASE_URL} from '../../constants.js';
import { connect } from 'react-redux';
import { getDogs } from '../../actions/index';

function DogCards(props) {

    const {getDogs, dogs} = props

    useEffect(() => {
    getDogs()
    }, []);

  
    return (
    <div>
        {dogs.map((dog) => (
            <div key={dog.id}>
                <img src={dog.image} alt={dog.name} />
                <h2>{dog.name}</h2>
                    <div>
                        <span>{dog.temperament}</span>
                        <span>{dog.height}</span>
                        <span>{dog.weight}</span>
                        <span>{dog.life_span}</span>
                    </div>
            </div>
        ))}
    </div>
    )

}

function mapStateToProps(state) {
    return {
      dogs: state.dogs
    };
  }


export default connect(
    mapStateToProps,
    {getDogs}
  )(DogCards);



// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDogs: (dog) => {
//             dispatch(getDogs(dog));
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(DogCards);