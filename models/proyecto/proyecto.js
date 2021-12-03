import mongoose from 'mongoose';
import { ModeloAvance } from '../avance/avance';



//import { UserModel } from '../usuario/usuario.js';
const { Schema, model } = mongoose;

const proyectoSchema = new mongoose.Schema({

    nombre:{
        type: String,
        required: [true, 'El Nombre  es obligatorio'],
      },

    presupuesto:{
        type: Number,
        required: [true, 'El presupuesto es obligatorio'],
      },

    fechaInicio: {
        type: Date,
        required: true,
      },
 
    fechaFin: {
        type: Date,
        required: true,
      },

      lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: modeloUsuarios,//OJJJOOO PONER EL MODELO DE USER OR USUARIOS COMO LO LLAMEMOS
    },

    estado: {
      type: String,
      default: 'INACTIVO ',
      required: [true, 'Estado es obligatorio'],
      enum: ['INACTIVO', 'ACTIVO']
  },
  fase: {
    type: String,
    default: 'NULO ',
    required: [true, 'Estado es obligatorio'],
    enum: ['INICIADO', 'DESARROLLO ', 'TERMINADO', 'NULO']
},

    objetivos: [
      {
        descripcion: {
          type: String,
          required: [true, 'Descripcion es obligatorio'],
        },
        
        tipo: {
          type: String,
          default: 'GENERAL ',
          enum: ['GENERAL', 'ESPECIFICO'],
          required: [true, 'Tipo es obligatorio'],
        },
      },
    ],

    inscripciones: {
      //TRAER INFO DE las incripciones desde la collection inscripcioens
      type: String
  },

  avances: {
      //TRAER INFO DE Los avances desde avances
      type: String

  },

});

projectoSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});





const ModeloProyecto = model('Proyecto', proyectoSchema);

export { ModeloProyecto };


