
const {response} =require('express')
const Usuario=require('../models/usuario')
const bcryptjs= require("bcryptjs");
//const { validationResult } = require('express-validator');//
const Inscripcion=require('../models/inscripciones')


const getInscripcion=  (req, res) => {
    const {proyecto, estudiante, estado, fechaIngreso, fechaEgreso}=req.query;
    res.json({
      msg: 'Api-get',
    
      proyecto,
      estudiante,
      estado,
      fechaIngreso,
      fechaEgreso,
    })
  }