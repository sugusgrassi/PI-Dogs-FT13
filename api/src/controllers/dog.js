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
    const  {name, weight, height, life_span, temperament, image } = req.body;
    
    const ide = uuidv4();
    
    try {
        const createdDog = await Dog.create({
            id: ide,
            name,
            weight,
            height,
            life_span,
            image
        });
       
        
        // async function capitalizeFirstLetter(str) {
        //     return temperament.charAt(0).toUpperCase() + str.slice(1);
        //   }
        //   capitalizeFirstLetter(temperament); 

        // console.log(temperament)
        for await (const temp of temperament)  {
            const ide2 = uuidv4();
        let createdTemperament = await Temperament.findOne({
            where: { temperament: temp },
          });
        //   console.log(createdTemperament)
          if (!createdTemperament) createdTemperament = await Temperament.create({
            id: ide2,
            temperament: temp
        });
        console.log(createdTemperament)
 
        await createdDog.addTemperament(createdTemperament);
        // =
        // await createdTemperament.addDog(createdDog);
        
        // Para responder con el perroo creado y su temperamento
        const newDogTemp = {...createdDog, createdTemperament}
      
        // if (!name || !weight || !height || !life_span || !temperament){
        //   return res.render('error', {message: "Mensaje de error"});
        // }
    
        res.send("dog created");
    }
    } catch(error) {
        next(error)
    }
    
}


module.exports = {
    addDog
}