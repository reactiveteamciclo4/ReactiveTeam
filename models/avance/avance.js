import mongoose from 'mongoose';
//import { ProjectModel } from '../proyecto/proyecto.js';
//import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

const avanceSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: [true, 'La fecha es obligatoria']
  },
  descripcion:{
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: String,
    /*type: Schema.Types.ObjectId,
    ref: ProjectModel,*/
    required: true,
  },
  creadoPor: {
    type: String,
    /*type: Schema.Types.ObjectId,
    ref: UserModel,*/
    required: true,
  },
})

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };


