const { Dog } = require('../db');
const axios = require('axios');
const { BASE_URL, DOG_URL } = require('../../constants');
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;

function getAllDogs(req, res, next){
    const dogFromApi = axios.get(`${BASE_URL}?api_key=${apiKey}`)    
    const dogFromDB = Dog.findAll(); // findAll es una promesa de la búsqueda de datos en models/Dog.js que pasa por db para llegar hasta acá
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    // Para traer ambas promesas
    Promise.all([dogFromApi, dogFromDB])
    .then((response) => {
        let [dogFromApiResponse, dogFromDBResponse] = response;
        res.send(dogFromDBResponse.concat(dogFromApiResponse.data))
    })
    .catch((error) => next(error));

}

async function dogById(req, res){
    const dogFromApi = axios.get(`${BASE_URL}?api_key=${apiKey}`)    
    const dogFromDB = Dog.findAll(); 
    

    Promise.all([dogFromApi, dogFromDB])
    .then((response) => {
        let [dogFromApiResponse, dogFromDBResponse] = response;
        const dogApiDB = dogFromDBResponse.concat(dogFromApiResponse.data)
        for (var dog of dogApiDB) {
            for (var key in dog) {
                console.log(dog[key])
                if (dog[key] == req.params.id){
                    res.send(dog)
                }
            }
        }
        
    })
    .catch((error) => next(error));
    

}

async function addDog(req, res, next){
    console.log("hola")
    const id = uuidv4();
    const newDog = {...req.body, id}
    console.log(newDog)
    try {
        const createdDog = await Dog.create(newDog)
        return res.send(createdDog)
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getAllDogs,
    dogById,
    addDog
}



// llamado solo a la api
// function getAllDogs(req, res, next){
//     const dogFromApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=39196b86-fa48-4a39-a0f5-4d629a8311b0`)    
//     let dogPromise = new Promise(function(myResolve, myReject) {
//         // "Producing Code" (May take some time)
//           myResolve(dogFromApi); // when successful
//           myReject();  // when error
//         });
//     dogPromise
//     .then((response) => {
//         res.send(response.data)
//         console.log(response.data)
//     })
//     .catch((error) => next(error));
// }