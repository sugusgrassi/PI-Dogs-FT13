import './App.css';
import React from 'react';
import { Route, Switch } from "react-router";
import Landing from './components/Landing/Landing';
import DogContainer from './components/DogContainer/DogContainer';
import Nav from './components/Nav/Nav';
import Find from './components/Find/Find';
import AddDog from './components/AddDog/AddDog';
import AddDogThanks from './components/AddDog/AddDogThanks';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import E404 from './components/E404/E404';
import Dog from './components/Dog/Dog';


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
      <Route path="/" exact component={Landing} />
      <Route path="/" component={Nav} />
      <Switch>
        <Route path="/dogs/:id" render={({match}) => <Dog match={match} />} />
        <Route path="/dogs" component={DogContainer} />
        <Route path="/find" component={Find} />
        <Route path="/add" component={AddDog} />
        <Route path="/thanks" component={AddDogThanks} />
        <Route path="/about" component={About} />
        {/* <Route path="/temperaments" component={Temperaments} /> */}
        <Route path="*" component={E404} status={404}/>
      </Switch>
      <Route path="/" component={Footer} />
     
      {/* <Dogs currentDogs={currentDogs} loading={loading} /> */}
      {/* <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate} /> */}
      {/* <DogCards /> */}
    </div>
  );
}

export default App;



