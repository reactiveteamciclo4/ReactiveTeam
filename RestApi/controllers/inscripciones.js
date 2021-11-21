const {response} = require('express')
const Inscripcion = require ('../models/inscripciones')
//const Usuario = require('../models/usuario')
//const Proyecto = require('../models/proyecto')

/*const getInscripciones=  (req, res) => {
    const {proyecto, estudiante, estado, fechaIngreso, fechaEgreso}=req.query;
    res.json({
      msg: 'Api-get',
      proyecto,
      estudiante,
      estado,
      fechaIngreso,
      fechaEgreso,
    })
  }*/

const getInscripciones= async (req, res) => {
  const inscripcion = await Inscripcion.find()
  res.json(inscripcion)
}

const getInscripcion= async (req, res) => {
  const inscripcion = await Inscripcion.findById (req.params.id)
  res.json(inscripcion)
}

const postInscripcion= async (req, res) => {
  const {proyecto, estudiante, estado, fechaIngreso, fechaEgreso}=req.body

  const inscripcion = new Inscripcion ({
    proyecto,
    estudiante, 
    estado, 
    fechaIngreso, 
    fechaEgreso
    })
      
  await inscripcion.save()
    res.json({
      msg: 'Inscripcion guardada'
    })
}

const putInscripcion= (req, res) => {
    
  const {id}= req.params;
  res.json({
    msg: 'Inscripcion Actualizada',
    id
  })
}

const deleteInscripcion= (req, res) => {
  res.json({
    msg: 'Inscripcion Eliminada',
  })
}

module.exports={getInscripciones, getInscripcion, postInscripcion, putInscripcion, deleteInscripcion}