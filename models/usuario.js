const { Schema, model } = require('mongoose')

const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El Nombre  es obligatorio'],
  },
  apellido: {
    type: String,
    required: [true, 'El apellido  es obligatorio'],
  },
  identificacion:{
    type: String,
    required: [true, 'La identificacion  es obligatorio'],
  },
  correo: {
    type: String,
    required: [true, 'El correo  es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio'],
    unique: true,
  },
  rol: {
    type: String,
    required:[true, 'El rol es obligatorio'],
    enum:['ESTUDIANTE','ADMINISTRADOR','LIDER']
  },
  estado:{
    type: String,
    default:'PENDIENTE',
    required:[true, 'Estado es obligatorio'],
    enum:['AUTORIZADO','PENDIENTE','NO-AUTORIZADO']
  },
  proyectos_liderados:
  {
    type: String
  }
})
module.exports=model('Usuario',usuarioSchema)


