
import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { paginate } from '../../actions/index';


// totalDogs viene como prop del componente padre = dogs || query.name
// dogsPerPage y paginate del store
const Pagination = ({totalDogs,dogsPerPage, paginate}) => {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Cada vez que se renderiza que empiece en 1 para dogs || query.name
    useEffect(() => {
        paginate(1)
        }, []);

    return (
        <nav>
            <ul>
               {pageNumbers.map(number => (
                   <li key={number} style={{display: "inline", margin: "0 5px"}}>
                       <button onClick={() => paginate(number)} href='!#'>
                           {number} 
                       </button>
                   </li>
               ))} 
            </ul>   
        </nav>
    )
}

// export default Pagination;


function mapStateToProps(state) {
    return {
        dogsPerPage: state.dogsPerPage,
};
  }

export default connect(
    mapStateToProps,
    {paginate}
  )(Pagination);