const { Router } = require('express');
const { getAllDogs, dogById, addDog } = require('../controllers/dogs')
const router = Router();

router.get('/', getAllDogs)

router.get('/:id', dogById)


module.exports = router;