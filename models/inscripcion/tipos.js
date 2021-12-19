import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
    liderProyecto: [Proyecto]
  }

  type Query {
    filtrarInscrip(idProyecto: String!):[Inscripcion]
    Inscripciones: [Inscripcion]
    InscripcionesLider: [Inscripcion]
    InscripcionesPendientes: [Inscripcion]
    InscripcionesEst (estado: Enum_EstadoInscripcion!): [Inscripcion]
    InscripcionesAceptadas: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion
  
    rechazarInscripcion(id: String!): Inscripcion
  }
`;

export { tiposInscripcion };