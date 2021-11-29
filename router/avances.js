const { Router } = require('express');
//const { check } = require('express-validator');
const { getAvances, getAvance, postAvance, putAvance, deleteAvance } = require('../controllers/avance');


const router = Router();

router.get('/', getAvances)
router.post('/', postAvance)


router.get('/:id', getAvance)
router.put('/:id', putAvance)
router.delete('/:id', deleteAvance)


module.exports = router;