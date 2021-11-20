const {Router} = require('express');
const { check } = require('express-validator');
const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/usuario');


const router=Router();

router.get('/',getUsuario)
  router.post('/',[
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('correo',"correo invalido").isEmail()
  ],postUsuario)
  router.put('/:id',putUsuario)
  router.delete('/',deleteUsuario)

  module.exports=router;