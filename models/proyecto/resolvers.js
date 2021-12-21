import { ModeloUsuario } from '../usuario/usuario.js';
import { ModeloProyecto } from './proyecto.js';
import { ModeloAvance } from '../avance/avance.js';
import { ModeloInscripcion } from '../inscripcion/inscripcion.js';

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      const usr = await ModeloUsuario.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  },
  Query: {
    Proyectos: async (parent, args, context) => {
      const proyectos = await ModeloProyecto.find().populate('avances').populate('inscripciones');

      
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args, context) => {
      const proyectoCreado = await ModeloProyecto.create({
        nombre: args.nombre,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(
        args._id,
        //{ ...args.campos },
        {
          nombre: args.nombre,
          presupuesto: args.presupuesto,
          objetivos: args.objetivos,
          estado: args.estado,
          fase: args.fase,
        },
        { new: true }
      );
    /*  if (args.estado === 'INACTIVO') {
        ModeloInscripcion.updateMany (
          {estado: 'ACEPTADO'},
          {$set: {
            //estado: 'RECHAZADO',
            fechaEgreso: Date.now(),
          }},
        )
      };   */

      return proyectoEditado;
    },
    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await ModeloProyecto.findByIdAndUpdate(
        args.idProyecto,
        {
          $addToSet: {
            objetivos: { ...args.campos },
          },
        },
        { new: true }
      );

      return proyectoConObjetivo;
    },
    editarObjetivo: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(
        args.idProyecto,
        {
          $set: {
            [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
            [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
          },
        },
        { new: true }
      );
      return proyectoEditado;
    },
    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await ModeloProyecto.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },
        { new: true }
      );
      return proyectoObjetivo;
    },
  },
};

export { resolversProyecto };