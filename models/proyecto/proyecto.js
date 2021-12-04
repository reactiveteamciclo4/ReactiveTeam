import mongoose from 'mongoose';
import { ModeloUsuario } from '../usuario/usuario.js';
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
<<<<<<< HEAD
        ref: modeloUsuarios,//OJJJOOO PONER EL MODELO DE USER OR USUARIOS COMO LO LLAMEMOS
=======
        ref: ModeloUsuario,
>>>>>>> prueba
    },

    estado: {
      type: String,
      default: 'INACTIVO ',
<<<<<<< HEAD
      required: [true, 'Estado es obligatorio'],
=======
>>>>>>> prueba
      enum: ['INACTIVO', 'ACTIVO']
  },
  fase: {
    type: String,
    default: 'NULO ',
<<<<<<< HEAD
    required: [true, 'Estado es obligatorio'],
=======
>>>>>>> prueba
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
  },
  {
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }, 
  }
  );


proyectoSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

proyectoSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});


const ModeloProyecto = model('Proyecto', proyectoSchema);

export { ModeloProyecto };





