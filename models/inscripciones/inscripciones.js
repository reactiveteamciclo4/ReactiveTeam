import mongoose from 'mongoose';
//import { ProjectModel } from '../proyecto/proyecto.js;
//import { UserModel } from '../usuario/usuario.js';

const { Schema, model } = mongoose;

const inscripcionSchema= new mongoose.Schema({
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
    //type: Schema.Types.ObjectId,
    //ref: ProjectModel,  
    type: String,
    required: [true, 'El Proyecto es obligatorio'],
  },
  estudiante: {
    //type: Schema.Types.ObjectId,
    //ref: UserModel, 
    type: String,
    required: [true, 'El estudiante es obligatorio']
  }
})

const ModeloInscripcion = model('Inscripcion', inscripcionSchema);

export { ModeloInscripcion };