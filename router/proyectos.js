const { Router } = require('express');
const { check } = require('express-validator');
const { getProyecto, postProyecto, putProyecto, deleteProyecto } = require('../controllers/proyecto');


const router = Router();

router.get('/', getProyecto)
router.post('/', [
  check('nombre', "El nombre es obligatorio").not().isEmpty(),
  //check('correo',"correo invalido").isEmail()
], postProyecto)
router.put('/:id', putProyecto)
router.delete('/', deleteProyecto)

module.exports = router;



