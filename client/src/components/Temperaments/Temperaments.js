import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getTemperaments, getDogs, setTempDog} from '../../actions/index';

function Temperaments({getTemperaments, temperaments, dogs, getDogs, setTempDog, selectedTempDogs}) {

    useEffect(() => {
        getTemperaments()
        getDogs("")
      },[])
 
      

      
    function compareDogsTemp(e){

      let arrTempDogs = []
      for (var dog of dogs) {
          if (dog.temperament?.includes(e.target.value)){
          arrTempDogs.push(dog)
          }
      }
      
      
          setTempDog(arrTempDogs.map((dog) => (
            <div key={dog.id}>
                {/* <img src={dog.image} alt={dog.name} /> */}
                <h2>{dog.name}</h2>
                    <div>
                        <span>{dog.temperament}</span>
                        <span>{dog.height}</span>
                        <span>{dog.weight}</span>
                        <span>{dog.life_span}</span>
                    </div>
            </div>
            )))
    }


    return (
        <div>
        <h2>Temperaments</h2>
          {temperaments.map((temperament) => (
              <button 
              key={temperament.id} 
              value={temperament.temperament}
              onClick={(e) => compareDogsTemp(e)}
              >{temperament.temperament}</button>
          ))}

          <div>hola {selectedTempDogs}</div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
      dogs: state.dogs,
      temperaments: state.temperaments,
      selectedTempDogs: state.selectedTempDogs
    };
  }

export default connect(
    mapStateToProps,
    {getTemperaments, getDogs, setTempDog}
  )(Temperaments);
