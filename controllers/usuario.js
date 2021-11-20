
const {response} =require('express')
const Usuario=require('../models/usuario')
const bcryptjs= require("bcryptjs");
const { validationResult } = require('express-validator');

const getUsuario=  (req, res) => {
    const {nombre, apellido,edad}=req.query;
    res.json({
      msg: 'Api-get',
    
      nombre,
      apellido,
    })
  }

const postUsuario= async(req, res) => {
   const errors=validationResult(req);
   if(!errors.isEmpty())// si existe errores entonces {
  {
    return res.status(400).json(errors)
  }
    const {nombre,apellido, correo,password, rol,identificacion,estado, proyectos_liderados}= req.body;
    const usuario= new Usuario({nombre,apellido, correo,password, rol,identificacion,estado, proyectos_liderados })

    const existeEmail=Usuario.findOne({correo})
  
    // if(existeEmail)
    // {
    //   return res.status(400).json({
    //     msg:"Ese correo ya existe"
    //   })
    // }

    const salt= bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);

    await usuario.save();
    res.json({
      msg: 'api-post',
      usuario

    })
  }
const putUsuario= (req, res) => {
    
    const {id}= req.params;
    res.json({
      msg: 'Api-put',
      id
    })
  }
const deleteUsuario= (req, res) => {
    res.json({
      msg: 'Api-delete',
    })
  }

  module.exports={
      getUsuario,
      postUsuario,
      putUsuario,
      deleteUsuario
  }