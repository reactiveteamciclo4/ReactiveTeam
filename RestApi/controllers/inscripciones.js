const {response} =require('express')
const Inscripcion = require ('../models/inscripciones')
const Usuario=require('../models/usuario')
const bcryptjs= require("bcryptjs");
const { validationResult } = require('express-validator');

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

const postInscripcion= async (req, res) => {
    const {proyecto, estudiante, estado, fechaIngreso, fechaEgreso}=req.query;
    const Inscripcion = new Inscripcion ({proyecto, estudiante, estado, fechaIngreso, fechaEgreso})
      
    await Inscripcion.save();
         res.json({
           msg: 'api-post',
           Inscripcion
         })
       }