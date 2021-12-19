import { ModeloInscripcion } from './inscripcion.js';

const resolversInscripcion = {
  Query: {

    filtrarInscrip: async (parents, args) => {
      const inFiltrada = await ModeloInscripcion.find({ proyecto: args.idProyecto })
        .populate('proyecto')
        .populate('estudiante');
      return inFiltrada;
    }, 




    Inscripciones: async (parent, args) => {
      const inscripciones = await ModeloInscripcion.find().populate('proyecto').populate('estudiante');
      return inscripciones;      
    },

   /* InscripcionesLider: async (parent, args) => {
      const inscripcionesLider = await ModeloInscripcion.find()
      .populate('estudiante')
      .populate([{ path: 'proyecto',
        populate: [{ path: 'lider' }],
        },
      ],[{ 
        path: 'liderProyecto',
        }],
      );
    return inscripcionesLider;
    },*/

    InscripcionesPendientes: async (parent, args) => {
      const inscripcionespend = await ModeloInscripcion.find({ estado:'PENDIENTE'}, { proyecto: args.idProyecto })
      .populate('proyecto').populate('estudiante');
      return inscripcionespend;
    },
    InscripcionesEst: async (parent, args) => {
      const inscripcionesest = await ModeloInscripcion.find({ estado: args.estado })
      .populate('proyecto').populate('estudiante');
      return inscripcionesest;
    },
    InscripcionesAceptadas: async (parent, args) => {
      const inscripcionesacep = await ModeloInscripcion.find( { estado:'ACEPTADO'}, { proyecto: args.idProyecto })
      .populate('proyecto').populate('estudiante');
      return inscripcionesacep; 
    },
  },

  Mutation: {
    crearInscripcion: async (parents, args) => {
      const inscripcionCreada = await ModeloInscripcion.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },

  /*  aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(
          args.id,
          {
            estado: 'ACEPTADO',
            fechaIngreso: Date.now(),
          },
          { new: true }
        );
        return inscripcionAprobada;
    },*/
    rechazarInscripcion: async (parent, args) => {
      const inscripcionRechazada = await ModeloInscripcion.findByIdAndUpdate(
          args.id,
          {
            estado: 'RECHAZADO',
          },
          { new: true }
        );
        return inscripcionRechazada;
    },
  },
};

export { resolversInscripcion };