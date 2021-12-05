import { ModeloInscripcion } from './inscripcion.js';

const resolversInscripcion = {
    Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await ModeloInscripcion.find().populate('proyecto').populate('estudiante');
      return inscripciones;
    },
    InscripcionesPendientes: async (parent, args) => {
      const inscripcionespend = await ModeloInscripcion.find({ estado:'PENDIENTE'}).populate('estudiante');
      return inscripcionespend;
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
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(
          args.id,
          {
            estado: 'ACEPTADO',
            fechaIngreso: Date.now(),
          },
          { new: true }
        );
        return inscripcionAprobada;
    },
    rechazarInscripcion: async (parent, args) => {
      const inscripcionRechazada = await ModeloInscripcion.findByIdAndUpdate(
          args.id,
          {
            estado: 'RECHAZADO',
            //fechaEgreso: Date.now(),
          },
          { new: true }
        );
        return inscripcionRechazada;
    },
  },
};

export { resolversInscripcion };