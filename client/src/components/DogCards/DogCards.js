
import React, { useEffect } from 'react';
import Pagination from '../Pagination/Pagination'
import { connect } from 'react-redux';
import { getDogs, paginate, stopLoading, setTempDog } from '../../actions/index';

function DogCards(props) {
    const {getDogs, dogs, loading, dogsPerPage, currentPage, stopLoading, selectedTempDogs, setTempDog, paginate, zA} = props;
    // const [currentPage, setCurrentPage] = useState([1]);

    // si str = "" trae todos
    // si le agrego page limit trae el páginado del back

    // let str = "23erf";
    // let str = "?name=Terrier";


    useEffect(() => {
        const timer = setTimeout(() => {
            stopLoading();
        }, 4000);
        return () => clearTimeout(timer);
      }, []);


    // function compare( b, a ) {
    // if ( a.weight < b.weight ){
    //     return -1;
    // }
    // if ( a.weight > b.weight ){
    //     return 1;
    // }
    // return 0;
    // }
    
    function compare( a, b ) {
        let comparison = 0;
    if ( a.name < b.name ){
        comparison = -1;
    }
    if ( a.name > b.name ){
        comparison = 1;
    }
    return comparison * -1;
    }


    // setTempDog(dogs)
    let currentDogs;
    const indexOfLastDog = currentPage *  dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    if (selectedTempDogs.length > 0){
        if (zA){
        selectedTempDogs.sort( compare );
    }
    currentDogs = selectedTempDogs.slice(indexOfFirstDog, indexOfLastDog);
    
    } else {
        if (zA){
        dogs.sort( compare );
    }
        currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
    }
    // const paginate = (number) => setCurrentPage(number)
//     const pageNumbers =[];
//     for (let i = 1; i <= Math.ceil(dogs.length / dogsPerPage); i++) {
//       pageNumbers.push(i);
//   }


// useEffect(() => {
//     // getDogs(str)
//     paginate(1)
//     }, []);

// console.log(currentPage)
// //  console.log(currentDogs)

    if (loading) {
      return <h2>Loading...</h2>
    }





    return (
<div>

          {currentDogs.length > 0  ? (<div>
          {currentDogs.map((dog) => (
              <div key={dog.id}>
                  {/* <img src={dog.image} alt={dog.name} /> */}
                  <h2>{dog.name}</h2>
                      <div>
                          <span>{dog.temperament} </span>
                          <span>{dog.height} </span>
                          <span>{dog.weight} </span>
                          <span>{dog.life_span} </span>
                      </div>
              </div>
          ))}
      </div>) : <h3>The network is not working and we couldn't catch any dog, please try later</h3>}
      {selectedTempDogs ? (<Pagination totalDogs={selectedTempDogs.length} />): <Pagination totalDogs={dogs.length} />} 
      {/* <nav>
            <ul >
               {pageNumbers.map(number => (
                   <li key={number} style={{display: "inline", margin: "0 5px"}}>
                       <button onClick={() => props.paginate(number)} >
                           {number} 
                           
                       </button>
                   </li>
               ))} 
            </ul>   
        </nav> */}
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
    {getDogs, paginate, stopLoading, setTempDog}
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