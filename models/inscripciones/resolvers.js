import { ModeloInscripcion } from './inscripciones.js';

const resolversIncripciones = {
    Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      //const inscripciones = await ModeloInscripcion.find().populate('proyecto').populate('creadoPor');
      return inscripciones;
    },
  }
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
  },
};

export { resolversInscripcion };