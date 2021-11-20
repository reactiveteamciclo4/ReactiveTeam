import { model } from '../usuario.js'; 

const { Schema, model } = require('mongoose')

const inscripcionSchema = Schema({
    estado: {
        type: String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        default: 'PENDIENTE',
        required: true,
      },
      fechaIngreso: {
        type: Date,
        required: false,
      },
      fechaEgreso: {
        type: Date,
        required: false,
      },
      proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
      },
      estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
      },
    });
    const InscriptionModel = model('Inscripcion', inscripcionSchema);

export { InscripcionModel };    