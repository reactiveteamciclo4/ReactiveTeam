import { ModeloProyecto } from './proyecto.js';

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ModeloProyecto.find().populate('proyecto').populate('creadoPor');
      return proyectos;
    },
    filtrarProyecto: async (parents, args) => {
      const proyectoFiltrado = await ModeloProyecto.find({ proyecto: args.idProyecto })
        .populate('proyecto')
        .populate('creadoPor');
      return proyectoFiltrado;
    },
  },
  Mutation: {
    crearProyecto: async (parents, args) => {
      const proyectoCreado = ModeloProyecto.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
        
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
      });

      return proyectoEditado;
    },
    eliminarProyecto: async (parent, args) => {
        const proyectoEliminado = await ModeloProyecto.findOneAndDelete({ _id: args._id });
        return proyectoEliminado;
      }
  },
};

export { resolversProyecto };
