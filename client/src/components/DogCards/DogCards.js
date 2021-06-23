import React, { useEffect } from 'react';
import Pagination from '../Pagination/Pagination'
import { connect } from 'react-redux';
import { getDogs, paginate, stopLoading, setTempDog, clearDogDetail } from '../../actions/index';
import { Link } from 'react-router-dom';
import './DogCards.css';

function DogCards(props) {
    const {dogs, loading, dogsPerPage, currentPage, stopLoading, selectedTempDogs, zA, azWeight, clearDogDetail} = props;

    useEffect(()=>{
        clearDogDetail()
        
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         stopLoading();
    //     }, 4000);
    //     return () => clearTimeout(timer);
    //   }, []);
    
    function compare( a, b ) {
    if (!azWeight) {
        let comparison = 0;
        if ( a.name < b.name ) {
            comparison = -1;
        }
        if ( a.name > b.name ) {
            comparison = 1;
        }
        if (!zA){
            return comparison * 1
        } else {
            return comparison * -1
        } 
    } else {
        let comparison = 0;
        if ( parseInt(a.weight.split(' ')[0]) < parseInt(b.weight.split(' ')[0]) ) {
            comparison = -1;
        }
        if ( parseInt(a.weight.split(' ')[0]) > parseInt(b.weight.split(' ')[0]) ) {
            comparison = 1;
        }
        if (!zA){
            return comparison * 1
        } else {
            return comparison * -1
        }
    }
    }
   

    let currentDogs;
    const indexOfLastDog = currentPage *  dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    if (selectedTempDogs.length > 0){

        selectedTempDogs.sort( compare );

    currentDogs = selectedTempDogs.slice(indexOfFirstDog, indexOfLastDog);
    // falta pasar breedName a redux y hacer un  else if (selectedTempDogs.length === 0 && breedName) y pasar dog a []
    } else {
       
        dogs.sort( compare );

        currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
        console.log(currentDogs)
    }


    if (loading) {
      return <h2>Loading...</h2>
    }


    return (
        <div className="dogCardsContainer">
            {currentDogs.length > 0  ? (<div className="dogCards">
            {currentDogs.map((dog) => (
                <div className="dogCard" key={dog.id}>
                <Link to={`/dogs/${dog.id}`}>
                <div className="imgContainer"><img className="imgCard" src={dog.image} alt={dog.name} /></div>
                </Link>
                <div className="nameTemp">
                    <Link className="dogLink" to={`/dogs/${dog.id}`}>
                        <h2 className="dogName">{dog.name}</h2>
                    </Link>
                    <p className="tempInfo"><strong>T:</strong> {dog.temperament} </p>
                    {/* <span>height:{dog.height} </span>
                    <span>weight: {dog.weight} </span>
                    <span>life_span: {dog.life_span} </span> */}
                </div>
              </div>
            ))}
            </div>) : <h3>We couldn't catch any dog, please press Show all or try later</h3>}
            <div className="pagination" >{selectedTempDogs.length > 0 ? <Pagination totalDogs={selectedTempDogs.length} />: <Pagination totalDogs={dogs.length} />}</div> 
        </div>
    )

}

function mapStateToProps(state) {
    return {
      dogs: state.dogs,
      loading: state.loading,
      dogsPerPage: state.dogsPerPage,
      currentPage: state.currentPage,
      selectedTempDogs: state.selectedTempDogs
    };
  }


export default connect(
    mapStateToProps,
    {getDogs, paginate, stopLoading, setTempDog, clearDogDetail}
  )(DogCards);



// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDogs: (dog) => {
//             dispatch(getDogs(dog));
//         },
//         paginate: (pageNumber) => {
//           dispatch(paginate(pageNumber))
//         }
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(DogCards);