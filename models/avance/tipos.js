import { gql } from 'apollo-server-express';

/*cuando esten las otras colecciones listas, cambiar el tipo a los atributos:
proyecto: Proyecto! 
creadoPor: Usuario! */

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: String!
    creadoPor: String!
  }

  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
  }
`;

export { tiposAvance };
