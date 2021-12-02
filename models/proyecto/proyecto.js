import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';
//import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

const proyectoSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: true
      },

    presupuesto:{
        type: Number,
        required: true,
      },

    fechaInicio: {
        type: Date,
        required: true,
      },
 
    fechaFin: {
        type: Date,
        required: true,
      },

    lider:  {
      type: String,
       /*type: Schema.Types.ObjectId,
      ref: UserModel,*/
      required: true,
    },

    estado: {
      type: String,
      enum: ['ACTIVO', 'INACTIVO'],
      default: 'INACTIVO',
    },

    fase: {
      type: String,
      enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
      default: 'NULO',
    },

    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        
        tipo: {
          type: String,
          enum: ['GENERAL', 'ESPECIFICO'],
          required: true,
        },
      },
    ],
     
})

const ModeloProyecto = model('Proyecto', proyectoSchema);

export { ModeloProyecto };


