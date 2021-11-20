
const {response} =require('express')
const Avance = require('../models/avance')
//const { validationResult } = require('express-validator');

/*const getAvance=  (req, res) => {
    const {proyecto, fecha, descripcion, observaciones, creadoPor}=req.query;
    res.json({
      msg: 'Api-get avances',
      proyecto,
      fecha,
      descripcion,
      observaciones,
      creadoPor

    })
  }*/

const getAvances = async (req, res)=> {
    const avances = await Avance.find()
    res.json(avances)

}

const getAvance = async (req, res)=> {
  const avance= await Avance.findById (req.params.id)
  res.json(avance)
}



const postAvance = async (req, res)=> {
    const {proyecto, fecha, descripcion, observaciones, creadoPor  } = req.body

    const avance = new Avance({
      proyecto, 
      fecha, 
      descripcion, 
      observaciones, 
      creadoPor 
    })

    await avance.save()
    res.json({message:'Avance Guardado'})

}

const putAvance= (req, res) => {
    
    const {id}= req.params;
    res.json({
      msg: 'Avance Actualizado',
      id
    })
  }

const deleteAvance= (req, res) => {
    res.json({
      msg: 'Avance Eliminado ',
    })
  }

  module.exports={
      getAvances,
      getAvance,
      postAvance,
      putAvance,
      deleteAvance
  }