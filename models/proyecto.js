const { Schema, model } = require('mongoose')

const proyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre  es obligatorio'],
    },
    objetivo: {
        type: String,
        default: 'GENERAL',
        required: [true, 'Objetivo es obligatorio'],
        enum: ['GENERAL', 'ESPECIFICO '],
    },
    presupuesto: {
        type: float,
        required: [true, 'El presupuesto es obligatorio'],
    },
    fechaInicio: {
        type: Date,
        required: [true, 'La fecha de inicio  es obligatorio'],

    },
    fechaFin: {
        type: Date,
        required: [false],

    },
    lider: {
        //TRAER INFO DEL LIDER DESDE USUARIOS CON EL ID
        type: String,

    },
    estado: {
        type: String,
        default: 'INACTIVO ',
        required: [true, 'Estado es obligatorio'],
        enum: ['INACTIVO', 'ACTIVO ']
    },
    fase: {
        type: String,
        default: 'INICIADO ',
        required: [true, 'Estado es obligatorio'],
        enum: ['INICIADO', 'DESARROLLO ', 'TERMINADO']
    },
    inscripciones:
    {
                //TRAER INFO DE las incripciones desde la collection inscripcioens
        type: String
    },
    avances:
            //TRAER INFO DE Los avances desde avances 

    {
        type: String
    }
})
module.exports = model('Proyecto', proyectoSchema)


