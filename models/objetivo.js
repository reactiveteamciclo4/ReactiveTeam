import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// import { Enum_TipoObjetivo } from './enums/enums.js';
// import { ProjectModel } from './proyecto/proyecto.js';

// interface Objective {
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
// }

const objetivoSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
});

const ObjetivoModel = model('Objetivo', objetivoSchema);

export { ObjetivoModel };