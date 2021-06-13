
import React, { useEffect } from 'react';
import Pagination from '../Pagination/Pagination'
import { connect } from 'react-redux';
import { getDogs, paginate, stopLoading } from '../../actions/index';

function DogCards(props) {
    const {getDogs, dogs, loading, dogsPerPage, currentPage, stopLoading} = props;
    // const [currentPage, setCurrentPage] = useState([1]);

    // si str = "" trae todos
    // si le agrego page limit trae el páginado del back
    let str = "";
    // let str = "?name=Terrier";

    useEffect(() => {
    getDogs(str)
    // props.paginate(1)
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            stopLoading();
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    const indexOfLastDog = currentPage *  dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

    // const paginate = (number) => setCurrentPage(number)
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(dogs.length / dogsPerPage); i++) {
      pageNumbers.push(i);
  }

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
                          <span>{dog.temperament}</span>
                          <span>{dog.height}</span>
                          <span>{dog.weight}</span>
                          <span>{dog.life_span}</span>
                      </div>
              </div>
          ))}
      </div>) : <h1>We couldn't find any dog</h1>}
      <Pagination totalDogs={dogs.length} />
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
      currentPage: state.currentPage
    };
  }


export default connect(
    mapStateToProps,
    {getDogs, paginate, stopLoading}
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