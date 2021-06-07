const { Dog, Temperament } = require('../db');
// const axios = require('axios');
// const { BASE_URL, DOG_URL } = require('../../constants');
const { v4: uuidv4 } = require('uuid');


/*
Ruta de creación de raza de perro: debe contener

[ ] Un formulario controlado con los siguientes campos
Nombre
Altura (Diferenciar entre altura mínima y máxima)
Peso (Diferenciar entre peso mínimo y máximo)
Años de vida
Temperamentos

{
    "weight": {
        metric: "3 - 6"
    },
    "height": {
        "metric": "23 - 29"
    },
    "id": 1,
    "name": "Affenpinscher",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "image": {
    "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    }
}
*/


// async function addDog(req, res, next){
//     console.log("hola")
//     const id = uuidv4();
//     const newDog = {...req.body, id}
//     console.log(newDog)
//     try {
//         const createdDog = await Dog.create(newDog)
//         return res.send(createdDog)
//     } catch(error) {
//         next(error);
//     }
// }

// Para Postman
// {
//     "name": "siames",
//     "weight": "12 - 16",
//     "height": "30 - 60",
//     "life_span": "infinite",
//     "temperament": "temperament"
// }

async function addDog(req, res, next){
    const  {name, weight, height, life_span, temperament } = req.body;
    console.log(req.body)
    const id = uuidv4();
    try {
        const createdDog = await Dog.create({
            id,
            name,
            weight,
            height,
            life_span
        });
    
        const createdTemperament = await Temperament.create({
            id,
            temperament
        });
    
        await createdDog.addTemperament(createdTemperament);
        // =
        // await createdTemperament.addDog(createdDog);
    
        const newDogTemp = {...createdDog, createdTemperament}
      
        // if (!name || !weight || !height || !life_span || !temperament){
        //   return res.render('error', {message: "Mensaje de error"});
        // }
    
        res.send(newDogTemp);
    } catch(error) {
        next(error)
    }
    
}


module.exports = {
    addDog
}