import mongoose from 'mongoose';
import { ModeloProyecto} from '../proyecto/proyecto.js';
import { ModeloUsuario } from '../usuario/usuario.js';

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
    type: Schema.Types.ObjectId,
    ref: ModeloProyecto,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: ModeloUsuario,
    required: true,
  },
})

const ModeloAvance = model('Avance', avanceSchema);

export { ModeloAvance };


