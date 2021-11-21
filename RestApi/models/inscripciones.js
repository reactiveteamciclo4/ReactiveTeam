const { Schema, model } = require('mongoose')

const inscripcionSchema = Schema({
    estado: {
        type: String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: [true, 'El estado es obligatorio']
      },
    fechaIngreso: {
        type: Date,
        required: [false, 'La fecha es opcional'],
      },
    fechaEgreso: {
        type: Date,
        required: [false, 'La fecha es opcional'],
      },
    proyecto: {
        type: String,
        required: [true, 'El Proyecto es obligatorio'],
      },
    estudiante: {
        type: String,
        required: [true, 'El estudiante es obligatorio']
      }
    })

    module.exports=model ('Inscripcion', inscripcionSchema)