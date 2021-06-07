const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL, DOG_URL } = require('../../constants');
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;

function getAllDogs(req, res, next){
    const dogFromApi = axios.get(`${BASE_URL}?api_key=${apiKey}`)    
    const dogFromDB = Dog.findAll({include: Temperament}); // findAll es una promesa de la búsqueda de datos en models/Dog.js que pasa por db para llegar hasta acá {limit: 4}
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    // Para traer ambas promesas
    Promise.all([dogFromApi, dogFromDB])
    .then((response) => {
        let [dogFromApiResponse, dogFromDBResponse] = response;
        let whoLetTheDogsOut = dogFromDBResponse.concat(dogFromApiResponse.data);
   
        if (req.query.name) {

            var filteredDogs = whoLetTheDogsOut.filter(o =>
                o.name.toLowerCase().includes(req.query.name.toLowerCase()));
            
            if (filteredDogs.length > 0) {
                let firstEight = filteredDogs.slice(0, 8);


                return res.json(firstEight)
            } else {
                return res.status(404).send(`Ups, we couldn't find the 
                specimen ${req.query.name} 😬, but if it's a dog you can post it 😉`)
            }
            
        }
        let firstEight = whoLetTheDogsOut.slice(0, 8);
        // console.log(firstEight)
        for (var dog of firstEight){
            if (typeof dog.id === "number") {
                delete dog.origin;
                delete dog.breed_group;
                delete dog.reference_image_id;
                delete dog.bred_for;
                dog.image = dog.image.url;
                dog.weight = dog.weight.metric;
                dog.height = dog.height.metric;
            }
            else {
                console.log(dog.dataValues)
                delete dog.dataValues.createdAt;
                delete dog.dataValues.updatedAt;
                dog.dataValues.temperament = dog.dataValues.temperaments[0].temperament;
                delete dog.dataValues.temperaments;
            }
        }
        res.json(firstEight)
    })
    .catch((error) => next(error)); 

}

async function dogById(req, res, next){

    try {
    
        await Dog.findByPk(req.params.id, {include: Temperament}).then(dog => {
            if(dog) {
                var {id, name, height, weight, life_span, temperaments} = dog;
                var temperament = temperaments[0].temperament;
                return res.json({
                    id, 
                    name, 
                    height,
                    weight,
                    life_span,
                    temperament
                })
            }
            setTimeout(function() {
                throw new Error();
            }, 4000)})
        
    } catch (error) {
        if(error) {
            console.log("La DB no lo tiene entonces vamos a la API")
            const response = await axios.get(`${BASE_URL}?api_key=${apiKey}`)
            for (var dog of response.data) {                
                if (dog.id == req.params.id){
                    var {id, name, height, weight, life_span, temperament} = dog;
                    res.json({
                        id, 
                        name, 
                        height,
                        weight,
                        life_span,
                        temperament
                    })  
            }
            }

          } 
      }
     
}

async function addDog(req, res, next){
    const id = uuidv4();
    const newDog = {...req.body, id}

    try {
        const createdDog = await Dog.create(newDog)
        return res.json(createdDog)
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


// {include: Temperament} trae demasiado!! si id no está cuelga
// function dogById(req, res, next){
//     const dogFromApi = axios.get(`${BASE_URL}?api_key=${apiKey}`)    
//     const dogFromDB = Dog.findAll({include: Temperament}); 
    

//     Promise.all([dogFromApi, dogFromDB])
//     .then((response) => {
//         let [dogFromApiResponse, dogFromDBResponse] = response;
//         const dogApiDB = dogFromDBResponse.concat(dogFromApiResponse.data)
//         console.log(req.params.id)
//         for (var dog of dogApiDB) {
        
//                 if (dog.id == req.params.id){
//                     res.json(dog)
                
//             }
//         }
//         return res.status(500)
        
//     })
//     .catch((error) => next(error));
    
// }