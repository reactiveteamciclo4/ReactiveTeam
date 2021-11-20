const { Schema, model } = require('mongoose')

const avanceSchema = Schema({
  proyecto: {
    type: String,
    required: [true, 'El Proyecto es obligatorio'],
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  descripcion:{
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  observaciones: {
    type: String,
    required: [true, 'Las observaciones son obligatorias'],
  },
  creadoPor: {
    type: String,
    required: [true, 'El creador es obligatorio']
  
  }
})
module.exports=model('Avance', avanceSchema)


