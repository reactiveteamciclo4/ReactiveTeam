
const { response } = require('express')
const Proyecto = require('../models/proyecto')
// const bcryptjs = require("bcryptjs");
// const { validationResult } = require('express-validator');

const getProyecto = (req, res) => {
    const { nombre, objetivos, presupuesto, fechaInicio, fechaFin, lider, estado, fase, inscripciones, avances } = req.query;
    res.json({
        msg: 'Proyecto:',

        nombre,
        apellido,
    })
}

const postProyecto = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())// si existe errores entonces {
    {
        return res.status(400).json(errors)
    }
    const { nombre, objetivos, presupuesto, fechaInicio, fechaFin, lider, estado, fase, inscripciones, avances } = req.body;
    const proyecto = new Proyecto({
        nombre,
        objetivos,
        presupuesto,
        fechaInicio,
        fechaFin,
        lider,
        estado,
        fase,
        inscripciones,
        avances
    })

    const existeProyecto = Proyecto.findOne({ nombre })

    if (existeProyecto) {
        return res.status(400).json({
            msg: "Proyecto con ese nombre ya existe"
        })
    }

    // const salt = bcryptjs.genSaltSync();
    // usuario.password = bcryptjs.hashSync(password, salt);

    await Proyecto.save();
    res.json({
        msg: 'Proyecto creado',
        Proyecto

    })
}
const putProyecto = (req, res) => {

    const { id } = req.params;
    res.json({
        msg: 'Proyecto actualizado',
        id
    })
}
const deleteProyecto = (req, res) => {
    res.json({
        msg: 'Proyecto eliminado',
    })
}

module.exports = {
    getProyecto,
    postProyecto,
    putProyecto,
    deleteProyecto
}