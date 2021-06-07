const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { BASE_URL, DOG_URL } = require('../../constants');
const { v4: uuidv4 } = require('uuid');
const apiKey = process.env.API_KEY;

 function getTemperament(req, res, next){
    const dogFromApi = axios.get(`${BASE_URL}?api_key=${apiKey}`)    
    const dogFromDB = Dog.findAll(); 
    

    Promise.all([dogFromApi, dogFromDB])
    .then((response) => {
        let [dogFromApiResponse, dogFromDBResponse] = response;
        const dogApiDB = dogFromDBResponse.concat(dogFromApiResponse.data)
        let tempArray = []
        for (var dog of dogApiDB) {
            for (var key in dog) {
                if (key === "temperament"){
                    tempArray.push(dog[key])
                }
            }
        }
        let joinTempArray = tempArray.join(', ').split(', ');
        let uniqueTemp = [...new Set(joinTempArray)]
        var tempArr = [];
        // const id = uuidv4(); // NO!
        uniqueTemp.forEach(item => 
            {
            // tiene que estar adentro del forEach para que llame nuevamente al método. Sino sería el mismo id para todos. Por eso me daba error
            const id = uuidv4();
            tempArr.push({
                id,
                temperament: item
            })
            }
        )
        console.log(tempArr)
       
        Temperament.bulkCreate(tempArr).then(() => { 
            return Temperament.findAll();
          }).then(result => {
            res.send(result)
          })
          .catch((error) => next(error));
        
    })
    .catch((error) => next(error));


}




module.exports = {
    getTemperament
}