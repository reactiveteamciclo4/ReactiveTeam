const { Router } = require('express');
const {getInscripciones, getInscripcion, postInscripcion, putInscripcion, deleteInscripcion} = require('../controllers/inscripciones');

const router = Router();

router.get('/', getInscripciones)
router.post('/', postInscripcion)

router.get('/:id', getInscripcion)
router.put('/:id', putInscripcion)
router.delete('/:id', deleteInscripcion)

module.exports = router;