import { ModeloProyecto } from './proyecto.js';

const resolversProyecto = {
  Proyecto: {
    lider: async (parent, args, context) => {
      console.log(parent.lider);
      const usr = await UserModel.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  },
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
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,        
      });
      return proyectoCreado;
    },
    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(args._id,
        { ...args.campos },
        { new: true }
        // nombre: args.nombre,
        // presupuesto: args.presupuesto,
        // fechaInicio: args.fechaInicio,
        // fechaFin: args.fechaFin,
        // lider: args.lider,
      );

      return proyectoEditado;
    },
    eliminarProyecto: async (parent, args) => {
        const proyectoEliminado = await ModeloProyecto.findOneAndDelete({ _id: args._id });
        return proyectoEliminado;
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
