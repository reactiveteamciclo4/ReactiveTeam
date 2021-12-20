import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      let filter = {};
      if (args.proyecto) {
        filter = { ...args };
      }
      const avances = await ModeloAvance.find(filter).populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = await ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });

      const avances = await ModeloAvance.find({ proyecto: avanceCreado.proyecto });

      if (avances.length === 1) {
        const proyectoModificado = await ProjectModel.findOneAndUpdate(
          { _id: avanceCreado.proyecto },
          {
            fase: 'DESARROLLO',
          }
        );
        console.log('proy modificado', proyectoModificado);
      }

      return avanceCreado;
    },


    editarAvance: async (parent, args) => {
      const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id, {
        descripcion: args.descripcion,
      }, { new: true });

      return avanceEditado;
    },
    
    eliminarAvance: async (parent, args) => {
      const avanceEliminado = await ModeloAvance.findOneAndDelete({ _id: args._id },
        { new: true });
      return avanceEliminado;
    },



    crearObservacion: async (parent, args) => {
      const observacionCreada = await ModeloAvance.findByIdAndUpdate(args._id, {
        observaciones: args.observaciones
      },
        { new: true })
      return observacionCreada
    }


  },
};

export { resolversAvance };
