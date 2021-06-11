import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from './constants.js';
import DogCards from './components/DogCards/DogCards.js';
import Dogs from './components/DogCards/Dogs';
import Pagination from './components/Pagination/Pagination';

function App() {

  // const [dogs, setDogs] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [dogsPerPage] = useState(8);

  // pageNumber = number 
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // useEffect (() => {
  //   const fetchDogs = async () => {
  //     setLoading(true);
  //     const res = await axios.get(BASE_URL);
  //     setDogs(res.data);
  //     setLoading(false)
  //   }
  //   fetchDogs() 

  // }, []); // With [] it only runs when it mounts
  // // console.log(dogs)


  // const indexOfLastDog = currentPage *  dogsPerPage;
  // const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  // const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
  
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      {/* <Dogs currentDogs={currentDogs} loading={loading} /> */}
      {/* <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate} /> */}
      <DogCards />
    </div>
  );
}

export default App;



